import { Link } from "react-router-dom";
import fundHeader from "../../assets/Images/Support-Fundraiser/fundraiser-header.png";
import { useEffect, useState } from "react";
import { getAllActiveCampaigns } from "../Admin Panel/Methods";
import BottomNav from "../../components/Bottom Navigation/BottomNav";

const AllFundraiser = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const obj1 = localStorage.getItem("token");
  const objString = JSON.parse(obj1);
  const token = objString ? objString.token : null;
  useEffect(() => {
    const fetchFundraisers = async () => {
      const fundraisersData = await getAllActiveCampaigns(token);
      setFundraisers(fundraisersData);
    };
    fetchFundraisers();
  }, []);
  const sortedFundraisers = [...fundraisers].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
  return (
    <>
      {/* <!-- ------------ HEADER SECTION -----------  --> */}
      <section className="fundraiser-header pt-36">
        <img src={fundHeader} alt="" />
        <hr />
      </section>

      <section className="text-gray-600 body-font mx-auto max-w-screen-xl pb-10 ">
        <div className="container px-5  mx-auto ">
          <div className="flex flex-col max-md:text-center text-start w-full mb-20 ">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 ">
              Support a fundraiser
            </h1>
            <p className="lg:w-2/3 sm:text-xl font-normal text-base leading-relaxed">
              Pick a cause close to your heart and donate now
            </p>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container mx-auto">
              {/* <!-- -------------- FIRST 3x1 BOXES IN A ROW ---------  --> */}

              <div className="flex flex-wrap -m-4">
                {/* <!-- ------------ 1 -------------  --> */}
                {sortedFundraisers.map((fundraiser) => (
                  <div
                    key={fundraiser._id}
                    className="p-4 Support-fundraiser-card md:w-1/3 cursor-pointer"
                  >
                    <div className="left-4 top-7 tax-benift-text ">
                      <p className=" font-semibold">Tax Benefit Available</p>
                    </div>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <Link to="/storypage">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={fundraiser.cardImg}
                          alt="blog"
                        />
                      </Link>
                      <div className="p-6">
                        <h1 className=" text-lg font-bold text-gray-900 mb-2 line-clamp-3">
                          {fundraiser.title}
                        </h1>
                        <p className="leading-relaxed mb-3 font-normal">
                          {fundraiser.ngoName}
                        </p>
                        <div className="flex items-center flex-wrap">
                          <div className="progress-loader">
                            <div className="progress"></div>
                          </div>

                          <p className="text-[20px] font-semibold text-black ">
                            ₹31,51,000{" "}
                            <span className="text-[14px] font-normal ml-8">
                              Raised of ₹{fundraiser.amountRaise} goal
                            </span>{" "}
                          </p>

                          <Link className="w-full" to="/storypage">
                            <button className="donate-btn">Donate Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/Pages/support-a-fundraiser.html">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">See More</span>
                </button>
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* ------------- BOTTOM NAV ------------  */}
      <BottomNav />
    </>
  );
};

export default AllFundraiser;
