import { Link } from "react-router-dom";
// import taxbenefitlogo from "../../assets/Images/Sliders/Montly-slider-img/taxbenefit.gif";
// import clock from "../../assets/Images/Sliders/Montly-slider-img/clock.gif";

import Share from "../Share-icon/Share";
import { useEffect, useState } from "react";
import "./ExploreCampaigns.css";
import { getAllActiveMonthlyCampaigns } from "../../Pages/Admin Panel/Methods";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function CampaignsLg() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [fundraisers, setfundraisers] = useState([]);
  const [filteredFundraisers, setFilteredfundraisers] = useState([]);
  const [loading, setLoading] = useState(false);
  const obj1 = localStorage.getItem("token");
  const objString = JSON.parse(obj1);
  const token = objString ? objString.token : null;
  useEffect(() => {
    const fetchNgos = async () => {
      try {
        setLoading(true);
        const fundraisersData = await getAllActiveMonthlyCampaigns(token);
        setfundraisers(fundraisersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NGOs:", error);
      }
    };

    fetchNgos();
  }, [token]);
  useEffect(() => {
    const filteredByCategory = fundraisers.filter((fundraiser) => {
      if (selectedCategory === "all") {
        return true;
      } else {
        return fundraiser.ngoSector === selectedCategory;
      }
    });

    const sortedFundraisers = [...filteredByCategory].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });

    setFilteredfundraisers(sortedFundraisers);
  }, [fundraisers, selectedCategory]);

  function calculateDaysElapsed(fundraiserDate) {
    const createdAt = new Date(fundraiserDate);
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate.getTime() - createdAt.getTime();
    const elapsedDays = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));

    return elapsedDays;
  }

  return (
    <>
      <div className="">
        <div className="flex flex-wrap py-5 flex-row">
          <div className=" w-[20vw] hidden md:block">
            <div className="bg-white mx-4 my-2 rounded-2xl sticky top-24 border">
              <div className="cat-underline-div pt-4 text-center ">
                <span className="font-semibold  text-black px-1 md:text-xl lg:text-3xl text-2xl">
                  Categories
                </span>
                <div className="category-div flex justify-center mx-6">
                  <div className="cat-underline pt-2 "></div>
                </div>
              </div>

              <div className="lg:px-3 md:px-1 px-0  py-4 category-list">
                <ul>
                  <li className=" py-4">
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div
                        className={
                          selectedCategory === "all" ? "active-btn" : ""
                        }
                      >
                        <ion-icon name="gift"></ion-icon>
                      </div>
                      <div className=" ">
                        <div className="grid grid-cols-9">
                          <button
                            onClick={() => {
                              setSelectedCategory("all");
                            }}
                            className={
                              selectedCategory === "all" ? "active-btn" : ""
                            }
                          >
                            ALL
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div
                        className={
                          selectedCategory === "hunger" ? "active-btn" : ""
                        }
                      >
                        <ion-icon name="fast-food"></ion-icon>
                      </div>
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("hunger");
                          }}
                          className={
                            selectedCategory === "hunger" ? "active-btn" : ""
                          }
                        >
                          HUNGER
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div
                        className={
                          selectedCategory === "children" ? "active-btn" : ""
                        }
                      >
                        <ion-icon name="accessibility"></ion-icon>
                      </div>
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("children");
                          }}
                          className={
                            selectedCategory === "children" ? "active-btn" : ""
                          }
                        >
                          CHILDREN
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-lg truncate ">
                      <div
                        className={
                          selectedCategory === "education" ? "active-btn" : ""
                        }
                      >
                        <ion-icon name="school"></ion-icon>
                      </div>
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("education");
                          }}
                          className={
                            selectedCategory === "education" ? "active-btn" : ""
                          }
                        >
                          EDUCATION
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div
                        className={
                          selectedCategory === "animals" ? "active-btn" : ""
                        }
                      >
                        <ion-icon name="paw"></ion-icon>
                      </div>
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("animals");
                          }}
                          className={
                            selectedCategory === "animals" ? "active-btn" : ""
                          }
                        >
                          ANIMALS
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div
                        className={
                          selectedCategory === "emergency" ? "active-btn" : ""
                        }
                      >
                        <ion-icon name="medkit"></ion-icon>
                      </div>
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("emergency");
                          }}
                          className={
                            selectedCategory === "emergency" ? "active-btn" : ""
                          }
                        >
                          MEDICAL
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[70vw] col-span-7 sm:block hidden">
            {loading ? (
              <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className=" w-full rounded-lg">
                    <div className="py-2 px-2 flex justify-center flex-col">
                      <div className=" md:mb-0 mb-4 flex justify-center ">
                        <Skeleton width={300} height={200} />
                      </div>
                      <div className="md:flex-grow px-6   ">
                        <div className=" flex justify-center items-center flex-col">
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                        </div>
                        <div className=" py-4 flex justify-center">
                          <Skeleton width={300} height={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredFundraisers.length === 0 ? (
              <div className=" flex justify-center h-full items-center">
                <span>Nothing to show here...</span>
              </div>
            ) : (
              <div className="grid grid-cols-9 w-[80vw] pr-6 ">
                {filteredFundraisers.map((fundraiser) => (
                  <div className="py-4 donation-slider-card-2 col-span-3  filterDiv medicine" key={fundraiser._id}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-full">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src={fundraiser.cardImg}
                      />
                      <div className="absolute right-0 bottom-0">
                        <Share />
                      </div>
                      <div className="top-0 px-4  tax-benift-text ">
                        <p className="font-semibold text-xs">Tax Benefit </p>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <h1 className="font-bold text-start mb-2 h-[5rem] line-clamp-2">
                        {fundraiser.title}
                      </h1>

                      <div className="inline-flex  gap-10 w-full">
                        <div className=" flex w-full justify-between">
                          <div>
                            <p className="text-base text-black font-normal flex justify-end items-center">
                              <ion-icon name="people-outline"></ion-icon>{" "}
                              &nbsp; 542 +
                            </p>
                          </div>

                          <div>
                            <p className="text-base text-black font-normal flex justify-start items-center">
                              <ion-icon name="time-outline"></ion-icon>
                              &nbsp;
                              {calculateDaysElapsed(fundraiser.createdAt)}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* --------------------- */}

                      <div className="progress-loader">
                        <div className="progress"></div>
                      </div>

                      <span className="text-[15px] font-medium text-gray-500 flex h-4 items-center">
                        <span className="text-red-500 font-bold flex items-center">
                          <ion-icon name="rocket"></ion-icon>
                        </span>
                        &nbsp; Target: 0 left out of{" "}
                        <span className="text-black font-semibold ml-2">
                          {fundraiser.amountRaise}
                        </span>
                      </span>

                      <Link to={`/monthly-donate/${fundraiser._id}`}>
                        <button className="donate-btn">
                          Donate Monthly
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                //   <div
                //   key={fundraiser._id}
                //   className="py-4 donation-slider-card-2 filterDiv col-span-3 medicine"
                // >
                //   <div className="flex flex-col items-center text-center">
                //     <div className="relative w-full">
                //       <img
                //         alt="team"
                //         className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                //         src={fundraiser.cardImg}
                //       />
                //       <div className="absolute right-0 bottom-0">
                //         <Share />
                //       </div>
                //       <div className="top-0 px-4 -right-4 tax-benift-text">
                //         <p>
                //           {/* <img
                //                     src={taxbenefitlogo}
                //                     alt=""
                //                     width="20px"
                //                     className="mr-2"
                //                   /> */}
                //           Tax Benefit{" "}
                //         </p>
                //       </div>
                //     </div>
                //     <div className="w-full px-4">
                //       <h1 className="font-bold text-start mb-2 h-6">
                //         {fundraiser.title}
                //       </h1>
  
                //       <div className="inline-flex gap-10 w-full">
                //         <div className=" flex w-full justify-between">
                //           <div>
                //             <p className="text-base text-black flex justify-end ">
                //               <ion-icon name="people-outline"></ion-icon> &nbsp;
                //               542 +
                //             </p>
                //           </div>
  
                //           <div>
                //             <p className="text-base text-black flex justify-start ">
                //               <ion-icon name="time-outline"></ion-icon>
                //               &nbsp; 12 days
                //             </p>
                //           </div>
                //         </div>
                //       </div>
                //       {/* --------------------- */}
  
                //       <div className="progress-loader">
                //         <div className="progress"></div>
                //       </div>
  
                //       <span className="text-[13px] text-gray-500 flex h-4">
                //         <span className="text-black font-bold">
                //           <ion-icon name="rocket-outline"></ion-icon>
                //         </span>
                //         &nbsp; Target: 0 left out of{" "}
                //         <span className="text-black font-semibold ml-2">
                //           {fundraiser.amountRaise}
                //         </span>
                //       </span>
  
                //       <Link to={`/monthly-donate/${fundraiser._id}`}>
                //         <button className="donate-btn">Donate Monthly</button>
                //       </Link>
                //     </div>
                //   </div>
                // </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
