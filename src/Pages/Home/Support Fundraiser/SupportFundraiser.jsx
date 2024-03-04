import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ---------- ANIMATION  ------------ 

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


// ------------ IMPORTING IMAGES --------------
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import taxbenefitlogo from "../../../assets/Images/Support-Fundraiser/taxbenefit.gif";
import { getAllActiveCampaigns } from "../../Admin Panel/Methods";

const SupportFundraiser = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(false);
  const obj1 = localStorage.getItem("token");
  const objString = JSON.parse(obj1);
  const token = objString ? objString.token : null;
  function calculateDaysElapsed(fundraiserDate) {
    const createdAt = new Date(fundraiserDate);
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate.getTime() - createdAt.getTime();
    const elapsedDays = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));

    return elapsedDays;
  }

  useEffect(() => {
    const fetchFundraisers = async () => {
      setLoading(true);
      const fundraisersData = await getAllActiveCampaigns(token);
      setFundraisers(fundraisersData);
      setLoading(false);
    };
    fetchFundraisers();
  }, []);
  const sortedFundraisers = [...fundraisers].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
  const firstEightFundraisers = sortedFundraisers.slice(0, 8);
  return (
    <>
      {/* <!-- ------------ SUPPORT A FUNDRAISER SECTION -----------  --> */}
      <section className="text-gray-600 body-font mx-auto max-w-screen-xl overflow-x-hidden">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col max-md:text-center text-start w-full sm:mb-20 mb-10" data-aos="slide-right"
      data-aos-duration="800" data-aos-delay="0">
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-gray-900">
              Support a fundraiser
            </h1>
            <p className="lg:w-2/3 sm:text-xl text-base leading-relaxed font-normal">
              Pick a cause close to your heart and donate now
            </p>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container mx-auto">
              {/* <!-- -------------- FIRST 3 BOXES IN A ROW ---------  --> */}
              <div className="flex flex-wrap justify-center -m-4">
                {/* <!-- ------------ 1 -------------  --> */}

                {loading ? (
                  <div className="rounded-xl grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className=" w-full rounded-lg ">
                        <div className="py-2 px-2 flex justify-center flex-col">
                          <div className=" md:mb-0 mb-4 flex justify-center ">
                            <Skeleton width={400} height={200} />
                          </div>
                          <div className="md:flex-grow px-6   ">
                            <div className=" flex justify-center py-4 items-center flex-col">
                              <Skeleton width={400} height={20} />
                              <Skeleton width={400} height={20} />
                              <Skeleton width={400} height={20} />
                              <Skeleton width={400} height={20} />
                              <Skeleton width={400} height={20} />
                            </div>
                            <div className=" py-4 flex justify-center">
                              <Skeleton width={400} height={40} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  firstEightFundraisers.map((fundraiser) => (
                    <div
                      key={fundraiser._id}
                      className="sm:p-4 p-2 Support-fundraiser-card md:w-1/3"
                     
                    >
                      <div className="top-8 left-4 tax-benift-text">
                        <p className="flex font-bold items-center">
                          {" "}
                          <img
                            src={taxbenefitlogo}
                            alt=""
                            width="20px"
                            className="mr-2"
                          />
                          Tax Benefit
                        </p>
                      </div>
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Link to={`/storypage/${fundraiser._id}`}>
                          <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={fundraiser.cardImg}
                            alt="blog"
                          />
                        </Link>
                        <div className="sm:p-6 p-3">
                          <h1 className="sm:text-base text-base font-bold text-gray-900 line-clamp-3">
                            {fundraiser.title}
                          </h1>
                          <p className="leading-relaxed mb-3 font-medium sm:text-base text-sm">
                            {fundraiser.ngoName}
                          </p>

                          <div className="inline-flex gap-10 w-full">
                            <div className=" flex w-full justify-between">
                              <div>
                                <p className="text-base text-black font-normal flex justify-end items-center">
                                  <ion-icon name="people-outline"></ion-icon>{" "}
                                  &nbsp; 542 +
                                </p>
                              </div>

                              <div>
                                <p className="text-base text-black font-normal flex justify-start items-center ">
                                  <ion-icon name="time-outline"></ion-icon>
                                  &nbsp;
                                  {calculateDaysElapsed(
                                    fundraiser.createdAt
                                  )}{" "}
                                  days ago
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center flex-wrap">
                            <div className="progress-loader">
                              <div className="progress"></div>
                            </div>

                            <div className="inline-flex gap-10 w-full">
                            <div className="flex w-full justify-between items-center">
                              <div>
                                <p className="sm:text-[20px] text-[16px] text-black font-semibold flex justify-end items-center">
                                ₹31,51,000
                                </p>
                              </div>

                              <div>
                                <p className="sm:text-[14px] text-[12px] text-black font-medium flex justify-start items-center ">
                                Raised of ₹{fundraiser.amountRaise} goal
                                </p>
                              </div>
                            </div>
                          </div>                          

                            <Link
                              className="w-full"
                              to={`/storypage/${fundraiser._id}`}
                            >
                              <button className="donate-btn">Donate Now</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {/* <!-- ------------ 2 -------------  --> */}

                {/* <!-- ------------ 3 -------------  --> */}
              </div>

              {/* <!-- -------------- NEXT 3 BOXES IN A ROW ---------  --> */}

              {/* <!-- ------------ SEE MORE BTN -------------  --> */}
              <Link to="allfundraiser">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">See More</span>
                </button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default SupportFundraiser;
