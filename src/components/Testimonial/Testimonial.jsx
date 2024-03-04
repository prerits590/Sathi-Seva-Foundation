import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "./testimonial.css";

// ------------ IMPORTING IMAGES --------------

import img1 from "../../assets/Images/Testimonials/1.avif";
import img2 from "../../assets/Images/Testimonials/2.avif";
import img3 from "../../assets/Images/Testimonials/3.avif";
import img4 from "../../assets/Images/Testimonials/4.avif";
// import img4 from '../../../assets/Images/Testimonials/4.avif'

const Testimonial = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 ">
              What people are <span className="text-red-600 font-medium">Saying</span>
            </h1>
          </div>
        </div>
      </section>

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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper mb-16 max-w-screen-xl overflow-x-hidden"
      >
        {/* <!-- ---------- 1 ---------  --> */}
        <SwiperSlide>
          <div className="p-8 m-4 donation-slider-card  testimonial-card children filterDiv">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0  object-center my-4"
                src={img1}
              />
              <div className="w-full">

                <h1 className="text-[20px] font-medium">Dr. Rajat jain</h1>

                <p className="mt-4 title-font font-normal">                  
                We want more donors to step forward and support our work so that we can create a larger impact across India. Give Discover will help them find us, effortlessly.            
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 2 ---------  --> */}

        <SwiperSlide>
          <div className="p-8 m-4 donation-slider-card  testimonial-card children filterDiv">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0  object-center my-4"
                src={img2}
              />
              <div className="w-full">

                <h1 className="text-[20px] font-medium">Arti Sharma</h1>

                <p className="mt-4 title-font font-normal">                  
                We want more donors to step forward and support our work so that we can create a larger impact across India. Give Discover will help them find us, effortlessly.            
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 3 ---------  --> */}

        <SwiperSlide>
          <div className="p-8 m-4 donation-slider-card  testimonial-card children filterDiv">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0  object-center my-4"
                src={img3}
              />
              <div className="w-full">

                <h1 className="text-[20px] font-medium">Prerit Jain</h1>

                <p className="mt-4 title-font font-normal">                  
                We want more donors to step forward and support our work so that we can create a larger impact across India. Give Discover will help them find us, effortlessly.            
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 4 ---------  --> */}

        <SwiperSlide>
          <div className="p-8 m-4 donation-slider-card  testimonial-card children filterDiv">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0  object-center my-4"
                src={img4}
              />
              <div className="w-full">

                <h1 className="text-[20px] font-medium">Dr. Rohan Verma</h1>

                <p className="mt-4 title-font font-normal">                  
                We want more donors to step forward and support our work so that we can create a larger impact across India. Give Discover will help them find us, effortlessly.            
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 5 ---------  --> */}
        <SwiperSlide>
          <div className="p-8 m-4 donation-slider-card  testimonial-card children filterDiv">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0  object-center my-4"
                src={img1}
              />
              <div className="w-full">

                <h1 className="text-[20px] font-medium">Dr. Rajat jain</h1>

                <p className="mt-4 title-font font-normal">                  
                We want more donors to step forward and support our work so that we can create a larger impact across India. Give Discover will help them find us, effortlessly.            
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 6 ---------  --> */}

        <SwiperSlide>
          <div className="p-8 m-4 donation-slider-card  testimonial-card children filterDiv">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0  object-center my-4"
                src={img2}
              />
              <div className="w-full">

                <h1 className="text-[20px] font-medium">Arti Raghuwanshi</h1>

                <p className="mt-4 title-font font-normal">                  
                We want more donors to step forward and support our work so that we can create a larger impact across India. Give Discover will help them find us, effortlessly.            
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 7 ---------  --> */}

        <SwiperSlide>
          <div className="p-8 m-4 donation-slider-card  testimonial-card children filterDiv">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0  object-center my-4"
                src={img3}
              />
              <div className="w-full">

                <h1 className="text-[20px] font-medium">Prerit Jain</h1>

                <p className="mt-4 title-font font-normal">                  
                We want more donors to step forward and support our work so that we can create a larger impact across India. Give Discover will help them find us, effortlessly.            
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 8 ---------  --> */}

        <SwiperSlide>
          <div className="p-8 m-4 donation-slider-card  testimonial-card children filterDiv">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="object-contain my-4"
                src={img4}
              />
              <div className="w-full">

                <h1 className="text-[20px] font-medium">Dr. Rohan Verma</h1>

                <p className="mt-4 title-font font-normal">                  
                We want more donors to step forward and support our work so that we can create a larger impact across India. Give Discover will help them find us, effortlessly.            
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Testimonial;
