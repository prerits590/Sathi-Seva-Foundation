import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// ------------ IMPORTING IMAGES --------------

import img1 from "../../../assets/Images/Sliders/Montly-slider-img/2.webp";
import img2 from "../../../assets/Images/Sliders/Montly-slider-img/3.png";
import img3 from "../../../assets/Images/Sliders/Montly-slider-img/4.png";
import img4 from "../../../assets/Images/Sliders/Montly-slider-img/9.webp";
import taxbenefitlogo from "../../../assets/Images/Sliders/Montly-slider-img/taxbenefit.gif";
import clock from "../../../assets/Images/Sliders/Montly-slider-img/clock.gif";
import Share from "../../Share-icon/Share";

const MonthlyDonateSlider = () => {
  return (
    <div className="col-span-10 md:col-span-8 mb-10">
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
        className="mySwiper mb-0 col-span-10 md:col-span-8 text-[17px]"
      >
        {/* <!-- ---------- 1 ---------  --> */}

        <SwiperSlide>
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={img1}
                />
                <div className="absolute right-0 bottom-0">
                  <Share />
                </div>
                <div className="top-4 left-0 tax-benift-text">
                  <p>
                    {" "}
                    <img
                      src={taxbenefitlogo}
                      alt=""
                      width="20px"
                      className="mr-2"
                    />
                    Tax Benift{" "}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-start mb-2">
                  Help bring warmth to abandoned old mothers in Vrindavan to
                  save them from harsh winters.
                </p>

                <div className="inline-flex gap-10 w-full">
                  <div className=" flex w-full justify-between">
                    <div>
                      <p className="text-base text-black flex justify-end ">
                        <ion-icon name="people-outline"></ion-icon> &nbsp; 542 +
                      </p>
                    </div>

                    <div>
                      <p className="text-base text-black flex justify-start ">
                        <img src={clock} alt="" width="20px" className="mr-2" />{" "}
                        &nbsp; 12 days
                      </p>
                    </div>
                  </div>
                </div>
                {/* --------------------- */}

                <div className="progress-loader">
                  <div className="progress"></div>
                </div>

                <p className="text-base text-black flex">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/giving.png"
                    alt="giving"
                    className="justify-center flex"
                  />{" "}
                  &nbsp; Target: 0 left out of 70000
                </p>

                <Link to="/monthly-donate">
                  <button className="donate-btn">Donate Monthly</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <!-- ---------- 2 ---------  --> */}

        <SwiperSlide>
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={img2}
                />
                <div className="absolute right-0 bottom-0">
                  <Share />
                </div>
                
                <div className="top-4 left-0 tax-benift-text">
                  <p>
                    {" "}
                    <img
                      src={taxbenefitlogo}
                      alt=""
                      width="20px"
                      className="mr-2"
                    />
                    Tax Benift
                  </p>
                </div>

              </div>
              <div className="w-full">
                <p className="text-start mb-2">
                  Help bring warmth to abandoned old mothers in Vrindavan to
                  save them from harsh winters.
                </p>

                <div className="inline-flex gap-10 w-full">
                  <div className=" flex w-full justify-between">
                    <div>
                      <p className="text-base text-black flex justify-end ">
                        <ion-icon name="people-outline"></ion-icon> &nbsp; 542 +
                      </p>
                    </div>

                    <div>
                      <p className="text-base text-black flex justify-start ">
                        <img src={clock} alt="" width="20px" className="mr-2" />{" "}
                        &nbsp; 12 days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="progress-loader">
                  <div className="progress"></div>
                </div>

                <p className="text-base text-black ">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/giving.png"
                    alt="giving"
                  />{" "}
                  &nbsp; Target: 0 left out of 70000
                </p>

                <Link to="/monthly-donate">
                  <button className="donate-btn">Donate Monthly</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 3 ---------  --> */}

        <SwiperSlide>
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={img3}
                />
                <div className="absolute right-0 bottom-0">
                  <Share />
                </div>
                <div className="top-4 left-0 tax-benift-text">
                  <p>
                    {" "}
                    <img
                      src={taxbenefitlogo}
                      alt=""
                      width="20px"
                      className="mr-2"
                    />
                    Tax Benift
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-start mb-2">
                  Help bring warmth to abandoned old mothers in Vrindavan to
                  save them from harsh winters.
                </p>

                <div className="inline-flex gap-10 w-full">
                  <div className=" flex w-full justify-between">
                    <div>
                      <p className="text-base text-black flex justify-end ">
                        <ion-icon name="people-outline"></ion-icon> &nbsp; 542 +
                      </p>
                    </div>

                    <div>
                      <p className="text-base text-black flex justify-start ">
                        <img src={clock} alt="" width="20px" className="mr-2" />{" "}
                        &nbsp; 12 days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="progress-loader">
                  <div className="progress"></div>
                </div>

                <p className="text-base text-black ">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/giving.png"
                    alt="giving"
                  />{" "}
                  &nbsp; Target: 0 left out of 70000{" "}
                </p>

                <Link to="/monthly-donate">
                  <button className="donate-btn">Donate Monthly</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 4 ---------  --> */}

        <SwiperSlide>
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={img4}
                />
                <div className="absolute right-0 bottom-0">
                  <Share />
                </div>
                <div className="top-4 left-0 tax-benift-text">
                  <p>
                    {" "}
                    <img
                      src={taxbenefitlogo}
                      alt=""
                      width="20px"
                      className="mr-2"
                    />
                    Tax Benift
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-start mb-2">
                  Help bring warmth to abandoned old mothers in Vrindavan to
                  save them from harsh winters.
                </p>

                <div className="inline-flex gap-10 w-full">
                  <div className=" flex w-full justify-between">
                    <div>
                      <p className="text-base text-black flex justify-end ">
                        <ion-icon name="people-outline"></ion-icon> &nbsp; 542 +
                      </p>
                    </div>

                    <div>
                      <p className="text-base text-black flex justify-start ">
                        <img src={clock} alt="" width="20px" className="mr-2" />{" "}
                        &nbsp; 12 days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="progress-loader">
                  <div className="progress"></div>
                </div>

                <p className="text-base text-black ">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/giving.png"
                    alt="giving"
                  />{" "}
                  &nbsp; Target: 0 left out of 70000{" "}
                </p>

                <Link to="/monthly-donate">
                  <button className="donate-btn">Donate Monthly</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 5 ---------  --> */}
        <SwiperSlide>
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={img1}
                />
                <div className="absolute right-0 bottom-0">
                  <Share />
                </div>
                <div className="top-4 left-0 tax-benift-text">
                  <p>
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
              </div>
              <div className="w-full">
                <p className="text-start mb-2">
                  Help bring warmth to abandoned old mothers in Vrindavan to
                  save them from harsh winters.
                </p>

                <div className="inline-flex gap-10 w-full">
                  <div className=" flex w-full justify-between">
                    <div>
                      <p className="text-base text-black flex justify-end ">
                        <ion-icon name="people-outline"></ion-icon> &nbsp; 542 +
                      </p>
                    </div>

                    <div>
                      <p className="text-base text-black flex justify-start ">
                        <img src={clock} alt="" width="20px" className="mr-2" />{" "}
                        &nbsp; 12 days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="progress-loader">
                  <div className="progress"></div>
                </div>

                <p className="text-base text-black ">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/giving.png"
                    alt="giving"
                  />{" "}
                  &nbsp; Target: 0 left out of 70000{" "}
                </p>

                <Link to="/monthly-donate">
                  <button className="donate-btn">Donate Monthly</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 6 ---------  --> */}

        <SwiperSlide>
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
        <SwiperSlide>
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={img2}
                />
                <div className="absolute right-0 bottom-0">
                  <Share />
                </div>
                <div className="top-4 left-0 tax-benift-text">
                  <p>
                    {" "}
                    <img
                      src={taxbenefitlogo}
                      alt=""
                      width="20px"
                      className="mr-2"
                    />
                    Tax Benift
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-start mb-2">
                  Help bring warmth to abandoned old mothers in Vrindavan to
                  save them from harsh winters.
                </p>

                <div className="inline-flex gap-10 w-full">
                  <div className=" flex w-full justify-between">
                    <div>
                      <p className="text-base text-black flex justify-end ">
                        <ion-icon name="people-outline"></ion-icon> &nbsp; 542 +
                      </p>
                    </div>

                    <div>
                      <p className="text-base text-black flex justify-start ">
                        <img src={clock} alt="" width="20px" className="mr-2" />{" "}
                        &nbsp; 12 days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="progress-loader">
                  <div className="progress"></div>
                </div>

                <p className="text-base text-black ">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/giving.png"
                    alt="giving"
                  />{" "}
                  &nbsp; Target: 0 left out of 70000{" "}
                </p>

                <Link to="/monthly-donate">
                  <button className="donate-btn">Donate Monthly</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 7 ---------  --> */}

        <SwiperSlide>
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={img3}
                />
                <div className="absolute right-0 bottom-0">
                  <Share />
                </div>
                <div className="top-4 left-0 tax-benift-text">
                  <p>
                    {" "}
                    <img
                      src={taxbenefitlogo}
                      alt=""
                      width="20px"
                      className="mr-2"
                    />
                    Tax Benift
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-start mb-2">
                  Help bring warmth to abandoned old mothers in Vrindavan to
                  save them from harsh winters.
                </p>

                <div className="inline-flex gap-10 w-full">
                  <div className=" flex w-full justify-between">
                    <div>
                      <p className="text-base text-black flex justify-end ">
                        <ion-icon name="people-outline"></ion-icon> &nbsp; 542 +
                      </p>
                    </div>

                    <div>
                      <p className="text-base text-black flex justify-start ">
                        <img src={clock} alt="" width="20px" className="mr-2" />{" "}
                        &nbsp; 12 days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="progress-loader">
                  <div className="progress"></div>
                </div>

                <p className="text-base text-black ">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/giving.png"
                    alt="giving"
                  />{" "}
                  &nbsp; Target: 0 left out of 70000{" "}
                </p>

                <Link to="/monthly-donate">
                  <button className="donate-btn">Donate Monthly</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 8 ---------  --> */}

        <SwiperSlide>
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
          <div className="p-4 donation-slider-card-1 filterDiv medicine">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={img4}
                />
                <div className="absolute right-0 bottom-0">
                  <Share />
                </div>
                <div className="top-4 left-0 tax-benift-text">
                  <p>
                    {" "}
                    <img
                      src={taxbenefitlogo}
                      alt=""
                      width="20px"
                      className="mr-2"
                    />
                    Tax Benift
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-start mb-2">
                  Help bring warmth to abandoned old mothers in Vrindavan to
                  save them from harsh winters.
                </p>

                <div className="inline-flex gap-10 w-full">
                  <div className=" flex w-full justify-between">
                    <div>
                      <p className="text-base text-black flex justify-end ">
                        <ion-icon name="people-outline"></ion-icon> &nbsp; 542 +
                      </p>
                    </div>

                    <div>
                      <p className="text-base text-black flex justify-start ">
                        <img src={clock} alt="" width="20px" className="mr-2" />{" "}
                        &nbsp; 12 days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="progress-loader">
                  <div className="progress"></div>
                </div>

                <p className="text-base text-black ">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/giving.png"
                    alt="giving"
                  />{" "}
                  &nbsp; Target: 0 left out of 70000{" "}
                </p>

                <Link to="/monthly-donate">
                  <button className="donate-btn">Donate Monthly</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MonthlyDonateSlider;
