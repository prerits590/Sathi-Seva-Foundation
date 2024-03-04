import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllActiveMonthlyCampaigns } from "../../Admin Panel/Methods";
// import taxbenefitlogo from "../../../assets/Images/Sliders/Montly-slider-img/taxbenefit.gif";
// import clock from "../../../assets/Images/Sliders/Montly-slider-img/clock.gif";
import Share from "../../../components/Share-icon/Share";
import Showmorebtn from "../../../components/Buttons/Showmorebtn";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Causes() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [fundraisers, setfundraisers] = useState([]);
  const [filteredFundraisers, setFilteredfundraisers] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(selectedCategory);
  function calculateDaysElapsed(fundraiserDate) {
    const createdAt = new Date(fundraiserDate);
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate.getTime() - createdAt.getTime();
    const elapsedDays = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));

    return elapsedDays;
  }

  useEffect(() => {
    const fetchNgos = async () => {
      try {
        setLoading(true);
        const fundraisersData = await getAllActiveMonthlyCampaigns();
        setfundraisers(fundraisersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NGOs:", error);
      }
    };

    fetchNgos();
  }, []);
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

  return (
    <>
      <div className="">
        {/* <!-- CONTROL BUTTONS - LAPTOP VERSION --> */}
        <div className="laptop-version mt-5 max-w-screen-xl overflow-x-hidden mx-auto mb-10">
          <Swiper
            className="mySwiper overflow-hidden"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={7}
            spaceBetween={30}
            modules={[Autoplay]}
          >
            {/* <!-- ---------- 1 ---------  --> */}
            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "all" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("all");
                }}
              >
                <ion-icon name="gift"></ion-icon> All
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 2 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "hunger" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("hunger");
                }}
              >
                <ion-icon name="fast-food"></ion-icon> Hunger
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 3 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "animals" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("animals");
                }}
              >
                <ion-icon name="paw"></ion-icon> Animals
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 4 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "children" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("children");
                }}
              >
                <ion-icon name="accessibility"></ion-icon>Children
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 5 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "education" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("education");
                }}
              >
                <ion-icon name="school"></ion-icon> Education
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 6 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "emergency" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("emergency");
                }}
              >
                <ion-icon name="medkit"></ion-icon> Emergency
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 7 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "disability" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("disability");
                }}
              >
                <ion-icon name="walk"></ion-icon>Disability
              </button>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <!-- CONTROL BUTTONS - MOBILE VERSION --> */}

        <div
          className="donation-slider-filter-mobile"
          id="myBtnContainerMobile"
        >
          <Swiper
            className="mySwiper overflow-hidden"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={40}
            modules={[Autoplay]}
          >
            {/* <!-- ---------- 1 ---------  --> */}
            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "all" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("all");
                }}
              >
                <ion-icon name="gift"></ion-icon> All
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 2 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "hunger" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("hunger");
                }}
              >
                <ion-icon name="fast-food"></ion-icon> Hunger
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 3 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "animals" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("animals");
                }}
              >
                <ion-icon name="paw"></ion-icon> Animals
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 4 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "children" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("children");
                }}
              >
                <ion-icon name="accessibility"></ion-icon>Children
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 5 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "education" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("education");
                }}
              >
                <ion-icon name="school"></ion-icon> Education
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 6 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "medicine" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("medicine");
                }}
              >
                <ion-icon name="medkit"></ion-icon> Medicine
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 7 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "disability" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("disability");
                }}
              >
                <ion-icon name="walk"></ion-icon>Disability
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 8 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "emergency" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("emergency");
                }}
              >
                <ion-icon name="fitness"></ion-icon> Emergency
              </button>
            </SwiperSlide>

            {/* <!-- ---------- 9 ---------  --> */}

            <SwiperSlide>
              <button
                className={`donation-slider-filter-btn ${
                  selectedCategory === "templel" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("templel");
                }}
              >
                <ion-icon name="home"></ion-icon> Temple
              </button>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="">
          <div className="col-span-10 md:col-span-8 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
              className="mySwiper mb-0 col-span-10 md:col-span-8 text-sm"
            >
              {loading ? (
                <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
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
              ) : (
                filteredFundraisers.map((fundraiser) => (
                  <div key={fundraiser._id} className="border">
                    <SwiperSlide>
                      <div className="pb-4 donation-slider-card-2  filterDiv medicine">
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
                              <p className="font-semibold text-xs">
                                Tax Benefit{" "}
                              </p>
                            </div>
                          </div>
                          <div className="w-full px-4">
                            <h1 className="font-bold text-start mb-2 h-[2.5rem] line-clamp-2">
                              {fundraiser.title}
                            </h1>

                            <div className="inline-flex gap-10 w-full">
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

                            <span className="sm:text-[14px] font-medium text-gray-500 flex h-4 items-center">
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
                    </SwiperSlide>
                  </div>
                ))
              )}
            </Swiper>
          </div>
        </div>
        <div className="mt-10">
          {filteredFundraisers.length === 0 ? (
            <div className="flex justify-center">
              <span className="font-normal"> Nothing to show here...</span>
            </div>
          ) : (
            <Link to="/allcampains">
              <Showmorebtn name="Show more Campains" className="show-more" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
