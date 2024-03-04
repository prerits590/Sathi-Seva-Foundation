import { Link } from "react-router-dom";
import Share from "../Share-icon/Share";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getAllActiveMonthlyCampaigns } from "../../Pages/Admin Panel/Methods";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function CampaignsSm() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [fundraisers, setfundraisers] = useState([]);
  const [filteredFundraisers, setFilteredfundraisers] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(selectedCategory);
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
        <div
          className="mt-10 max-w-screen-xl overflow-x-hidden mx-auto"
          id="myBtnContainerMobile"
        >
          <Swiper
            className="mySwiper overflow-hidden"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={10}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <button
                className={
                  selectedCategory === "all"
                    ? "active donation-slider-filter-btn "
                    : "donation-slider-filter-btn "
                }
                onClick={() => {
                  setSelectedCategory("all");
                }}
              >
                <ion-icon name="gift"></ion-icon> All
              </button>
            </SwiperSlide>

            <SwiperSlide>
              <button
                className={
                  selectedCategory === "hunger"
                    ? "active donation-slider-filter-btn "
                    : "donation-slider-filter-btn "
                }
                onClick={() => {
                  setSelectedCategory("hunger");
                }}
              >
                <ion-icon name="fast-food"></ion-icon> Hunger
              </button>
            </SwiperSlide>

            <SwiperSlide>
              <button
                className={
                  selectedCategory === "animals"
                    ? "active donation-slider-filter-btn "
                    : "donation-slider-filter-btn "
                }
                onClick={() => {
                  setSelectedCategory("animals");
                }}
              >
                <ion-icon name="paw"></ion-icon> Animals
              </button>
            </SwiperSlide>

            <SwiperSlide>
              <button
                className={
                  selectedCategory === "children"
                    ? "active donation-slider-filter-btn "
                    : "donation-slider-filter-btn "
                }
                onClick={() => {
                  setSelectedCategory("children");
                }}
              >
                <ion-icon name="accessibility"></ion-icon>Children
              </button>
            </SwiperSlide>

            <SwiperSlide>
              <button
                className={
                  selectedCategory === "education"
                    ? "active donation-slider-filter-btn "
                    : "donation-slider-filter-btn "
                }
                onClick={() => {
                  setSelectedCategory("education");
                }}
              >
                <ion-icon name="school"></ion-icon> Education
              </button>
            </SwiperSlide>

            <SwiperSlide>
              <button
                className={
                  selectedCategory === "emergency"
                    ? "active donation-slider-filter-btn "
                    : "donation-slider-filter-btn "
                }
                onClick={() => {
                  setSelectedCategory("emergency");
                }}
              >
                <ion-icon name="medkit"></ion-icon> Emergency
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="px-2">
          {loading ? (
            <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
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
            filteredFundraisers.map((fundraiser) => (
              <div className="py-4 my-10 donation-slider-card-2 col-span-3  filterDiv medicine" key={fundraiser._id}>
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
                      <h1 className="font-bold text-start text-sm mb-2 h-[4rem] line-clamp-2">
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

                      <span className="text-[13px] font-medium text-gray-500 flex h-4 items-center">
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
            ))
          )}
        </div>
      </div>
    </>
  );
}
