import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ------------ IMPORTING IMAGES --------------

import img1 from "../../../assets/Images/Story Page img/paytm-log.png";
import img2 from "../../../assets/Images/Story Page img/credit-card.webp";
import img3 from "../../../assets/Images/Story Page img/internet-bank.webp";
import org1 from "../../../assets/Images/Story Page img/org-1.jpeg";
import org2 from "../../../assets/Images/Story Page img/org-2.png";
import { useParams } from "react-router-dom";
import { getCampaignById } from "./Methods";
const StoryPage = () => {
  const { fundraiserId } = useParams();
  const [campaignDetails, setCampaignDetails] = useState({});
  const [embedLink, setEmbedLink] = useState("");
  const [storyHTML, setStoryHTML] = useState("");
  const obj1 = localStorage.getItem("token");
  const objString = JSON.parse(obj1);
  const token = objString ? objString.token : null;
  const [isVisible, setIsVisible] = useState(false);
  const [daysElapsed, setDaysElapsed] = useState(calculateDaysElapsed());
  function calculateDaysElapsed() {
    const createdAt = new Date(campaignDetails.createdAt);
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate.getTime() - createdAt.getTime();
    const elapsedDays = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));

    return elapsedDays;
  }
  const monthlyFundraiserId = fundraiserId;
  console.log(monthlyFundraiserId);
  useEffect(() => {
    setDaysElapsed(calculateDaysElapsed());
  }, [campaignDetails]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const fetchCampaignDetails = async () => {
      try {
        const details = await getCampaignById(token, fundraiserId);
        setCampaignDetails(details);
        setStoryHTML(details.story);

        const videoIdMatch = details.videoLink.match(
          /(?:youtu\.be\/|youtube\.com\/(?:.*v\/|.*\?v=|.*&v=))([^"&?\/\s]{11})/
        );
        const videoId = videoIdMatch ? videoIdMatch[1] : null;

        if (videoId) {
          const embedLink = `https://www.youtube.com/embed/${videoId}`;
          setEmbedLink(embedLink);
        } else {
          setEmbedLink(details.videoLink);
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching campaign details:", error);
      }
    };

    fetchCampaignDetails();
  }, [fundraiserId, token]);
  console.log(campaignDetails);
  return (
    <>
      {/* <!-- ------------ STORY PAGE FOR LAPTOP SECTION -----------  --> */}
      <main className="story-container max-md:p-6  py-24">
        <header className="header">
          <h1 className="font-bold max-md:text-[17px] mt-4 heading ">
            {campaignDetails.title}
          </h1>
          <p className="subheading font-normal">{campaignDetails.ngoName}</p>
        </header>

        {/* ----------- PAGE CONTENT ------------   */}
        <section className="content">
          {embedLink ? (
            <iframe
              width="560"
              height="500"
              className="poster-image"
              src={embedLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : (
            <img
              className="w-full h-1/4"
              src={campaignDetails.cardImg}
              alt=""
            />
          )}
          <div className="via-pay py-10  ">
            <h1 className="text-4x1 font-semibold py-4">Donate Via</h1>

            <div className="flex max-md:flex-wrap p-2 w-full gap-4">
              <div className="flex flex-row sm:w-1/3 payment-box">
                <img className="w-16" src={img1} alt="" />
                <p className="text-2x1 p-2 body-font font-normal ">
                  Google Pay, Paytm and others
                </p>
              </div>
              <div className="flex flex-row sm:w-1/3 payment-box">
                <img className="w-16" src={img2} alt="" />
                <p className="text-2x1 p-2 body-font font-normal">Credit & Debit Cards</p>
              </div>
              <div className="flex flex-row sm:w-1/3 payment-box">
                <img className="w-16" src={img3} alt="" />
                <p className="text-2x1 p-2 body-font font-normal">
                  Internet Banking & Transfer
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div
                className="ql-editor    "
                dangerouslySetInnerHTML={{ __html: storyHTML }}
              />
            </div>
            <div>
              <div className="organiser ">
                <h1 className="text-[30px] max-md:text-[20px]  font-semibold py-4">
                  Organiser
                </h1>
                <div className="flex flex-row gap-10">
                  <div className="flex">
                    <div>
                      <img className="w-16 mt-2 max-md:hidden" src={org1} alt="" />
                    </div>
                    <div className="flex flex-col text-start ">
                      <p className="text-2x1 max-md:text-[17px] p-2 body-font font-medium">
                        IAF India Animal Foundation
                      </p>
                      <span className="ml-2 text-base ">
                        Beneficiary Charity
                      </span>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <img className="w-36 mt-2 max-md:hidden" src={org2} alt="" />
                    </div>
                    <div className="flex flex-col text-start ">
                      <p className="text-2x1 max-md:text-[17px] p-2 body-font font-medium ">
                        Sathi Sewa Foundation
                      </p>
                      <span className="ml-2 text-base ">Organiser</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="start-fundraising">
                <h1 className="text-[30px] text-start max-md:text-[19px] font-semibold py-4">
                  Start a Supporting Fundraiser
                </h1>
                <p className="text-gray-700 ">
                  Magnify your impact by starting your own fundraiser. All funds
                  raised by you will support the cause and help reach the goal
                  faster.
                </p>{" "}
                <br />
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg font-normal">
                  Raise fund now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ----------- SIDE CARD ------------   */}
        <aside className="aside max-md:mt-10 ">
          <div className="progress-loader">
            <div className="progress"></div>
          </div>
          <div className="flex gap-6">
            <p className="text-[20px] font-semibold text-black">
              ₹31,51,000 <br />{" "}
              <span className="text-[13px]">
                Raised of ₹{campaignDetails.amountRaise}
              </span>
            </p>
            <p className="text-[20px] font-semibold text-black">
              752 + <br /> <span className="text-[13px]">Supporters</span>
            </p>
          </div>

          <div className="flex flex-col py-4 gap-4 text-center">
            <Link to={`/donate/${monthlyFundraiserId}`}>
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-20 focus:outline-none hover:bg-red-600 rounded text-lg text-center mx-auto font-normal">
                Donate now
              </button>
            </Link>
            <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-28 focus:outline-none hover:bg-gray-200 rounded text-lg text-center mx-auto font-normal">
              Share
            </button>
          </div>

          <p className=" text-center text-gray-500 text-sm font-normal">
            553 shares! Every share counts.
          </p>
          <br />
          <hr />
          <br />
          <div className="flex gap-4">
            <ion-icon
              name="trending-up"
              className="text-[#e72129] text-[20px] pr-2"
            ></ion-icon>
            <h4 className="heading"> 59 people donated just now</h4>
          </div>
          <div className="donor-card gap-6 flex">
            <ion-icon
              name="person"
              className="text-[#e72129] text-[30px] bg-[#bffbbf] rounded-full p-2 mr-4"
            ></ion-icon>
            <div>
              <p className="heading title">Piyush Agrawal</p>
              <p className="author pt-2">
                $ 20 .{" "}
                <span className="px-4 bg-[#bffbbf] rounded-lg py-[5px]">
                  Recent donor
                </span>
              </p>
            </div>
          </div>
          <div className="donor-card  gap-6 flex">
            <ion-icon
              name="person"
              className="text-[#e72129] text-[30px] bg-[#bffbbf] rounded-full p-2 mr-4"
            ></ion-icon>
            <div>
              <p className="heading title">Utkarsh Jain</p>
              <p className="author pt-2">
                $ 10 .{" "}
                <span className="px-4 bg-[#a0d2eb] rounded-lg py-[5px]">
                  First donor
                </span>
              </p>
            </div>
          </div>
          <div className="donor-card  gap-6 flex">
            <ion-icon
              name="person"
              className="text-[#e72129] text-[30px] bg-[#bffbbf] rounded-full p-2 mr-4"
            ></ion-icon>
            <div>
              <p className="heading title">Rahul Jha</p>
              <p className="author pt-2">
                $ 2,000 .{" "}
                <span className="px-4 bg-[#f2d53c] rounded-lg py-[5px]">
                  Top donor
                </span>
              </p>
            </div>
          </div>

          <button className="fill-upfill-btn font-semibold px-20 py-2 mt-4">
            View All Donor
          </button>
        </aside>
      </main>

      {/* <!-- -------------- EXTRA - DIALOG - BOX FOR DONATE BTN ----------  --> */}
      <section className="donate-dialog-box-story-page items-center sm:rounded-lg max-md:gap-4 rounded-none w-full sm:bottom-10 bottom-0 ">
        <div className="flex gap-4 max-md:flex-wrap max-md:justify-center">
          <Link to={`/donate/${monthlyFundraiserId}`}>
            {isVisible && (
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-16 focus:outline-none hover:bg-red-600 rounded text-lg">
                Donate Now
              </button>
            )}
          </Link>
        </div>
      </section>

      {/* <!-- ------------ STORY PAGE FOR MOBILE SECTION -----------  --> */}
      <main className="story-container-mobile max-md:p-6 py-24">
        {/* ----------- PAGE CONTENT ------------   */}
        <section className="content">
          <iframe
            width="560"
            className="poster-image mt-20"
            src={embedLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <header className="header bg-gray-50">
            <h1 className="font-bold max-md:text-[17px] mt-4 heading ">
              {campaignDetails.title}
            </h1>
            <p className="subheading">{campaignDetails.ngoName}</p>
          </header>
          {/* ----------- SIDE CARD ------------   */}
          <aside className="aside-mobile max-md:mt-4 ">
            <div className="progress-loader">
              <div className="progress"></div>
            </div>
            <div className="flex gap-6">
              <p className="text-[20px] font-semibold text-black">
                ₹31,51,000 <br />{" "}
                <span className="text-[13px]">
                  Raised of ₹{campaignDetails.amountRaise}
                </span>
              </p>
              <p className="text-[20px] font-semibold text-black">
                752 + <br /> <span className="text-[13px]">Supporters</span>
              </p>
            </div>

            <div className="flex flex-col py-4 gap-4 text-center">
              <Link to={`/donate/${fundraiserId}`}>
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-20 focus:outline-none hover:bg-red-600 rounded text-lg text-center mx-auto">
                  Donate now
                </button>
              </Link>

              <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-28 focus:outline-none hover:bg-gray-200 rounded text-lg text-center mx-auto">
                Share
              </button>
            </div>

            <p className=" text-center text-gray-500 text-sm">
              553 shares! Every share counts.
            </p>
            <br />
            <hr />
          </aside>
          <div className="via-pay py-10  ">
            <h1 className="text-4x1 font-semibold py-4">Donate Via</h1>

            <div className="flex p-2 w-full gap-4">
              <div className="flex flex-col sm:w-1/3 payment-box-mobile">
                <img className="w-16" src={img1} alt="" />
                <p className="text-sm p-2 body-font ">G Pay, Paytm, etc.</p>
              </div>
              <div className="flex flex-col sm:w-1/3 payment-box-mobile">
                <img className="w-16" src={img2} alt="" />
                <p className="text-sm p-2 body-font ">Credit, Debit Cards</p>
              </div>
              <div className="flex flex-col sm:w-1/3 payment-box-mobile">
                <img className="w-16" src={img3} alt="" />
                <p className="text-sm p-2 body-font ">Bank Payment</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div
                className="ql-editor    "
                dangerouslySetInnerHTML={{ __html: storyHTML }}
              />
            </div>
            <div>
              <div className="organiser ">
                <h1 className="text-[30px] max-md:text-[20px]  font-semibold py-4">
                  Organiser
                </h1>
                <div className="flex flex-row gap-10">
                  <div className="flex">
                    <div>
                      <img className="w-16 max-md:hidden" src={org1} alt="" />
                    </div>
                    <div className="flex flex-col text-start ">
                      <p className="text-2x1 max-md:text-[17px] p-2 body-font font-medium">
                        IAF India Animal Foundation
                      </p>
                      <span className="ml-2 text-base ">
                        Beneficiary Charity
                      </span>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <img className="w-24 max-md:hidden" src={org2} alt="" />
                    </div>
                    <div className="flex flex-col text-start ">
                      <p className="text-2x1 max-md:text-[17px] p-2 body-font font-medium ">
                        Sathi Sewa Foundation
                      </p>
                      <span className="ml-2 text-base ">Organiser</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="start-fundraising">
                <h1 className="text-[30px] text-start max-md:text-[19px] font-semibold py-4">
                  Start a Supporting Fundraiser
                </h1>
                <p className="text-gray-700 ">
                  Magnify your impact by starting your own fundraiser. All funds
                  raised by you will support the cause and help reach the goal
                  faster.
                </p>{" "}
                <br />
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Raise fund now
                </button>
              </div>
            </div>
          </div>

          <div className="py-10">
            <div className="flex gap-4">
              <ion-icon
                name="trending-up"
                className="text-[#e72129] text-[20px] pr-2"
              ></ion-icon>
              <h4 className="heading">59 people donated just now</h4>
            </div>
            <div className="donor-card gap-6 flex">
              <ion-icon
                name="person"
                className="text-[#e72129] text-[30px] bg-[#bffbbf] rounded-full p-2 mr-4"
              ></ion-icon>
              <div>
                <p className="heading title">Piyush Agrawal</p>
                <p className="author pt-2">
                  $ 20 .{" "}
                  <span className="px-4 bg-[#bffbbf] rounded-lg py-[5px]">
                    Recent donor
                  </span>
                </p>
              </div>
            </div>
            <div className="donor-card  gap-6 flex">
              <ion-icon
                name="person"
                className="text-[#e72129] text-[30px] bg-[#bffbbf] rounded-full p-2 mr-4"
              ></ion-icon>
              <div>
                <p className="heading title">Utkarsh Jain</p>
                <p className="author pt-2">
                  $ 10 .{" "}
                  <span className="px-4 bg-[#a0d2eb] rounded-lg py-[5px]">
                    First donor
                  </span>
                </p>
              </div>
            </div>
            <div className="donor-card  gap-6 flex">
              <ion-icon
                name="person"
                className="text-[#e72129] text-[30px] bg-[#bffbbf] rounded-full p-2 mr-4"
              ></ion-icon>
              <div>
                <p className="heading title">Rahul Jha</p>
                <p className="author pt-2">
                  $ 2,000 .{" "}
                  <span className="px-4 bg-[#f2d53c] rounded-lg py-[5px]">
                    Top donor
                  </span>
                </p>
              </div>
            </div>
            <button className="fill-upfill-btn font-medium px-10 justify-center flex py-2 mt-4">
              View All Donor
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default StoryPage;
