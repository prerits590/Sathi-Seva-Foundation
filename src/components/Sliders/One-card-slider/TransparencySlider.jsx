import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// ------------ IMPORTING IMAGES --------------

import img1 from "../../../assets/Images/Sliders/Transparency/1.webp";
import img2 from "../../../assets/Images/Sliders/Transparency/2.jpg";
import img3 from "../../../assets/Images/Sliders/Transparency/3.webp";
import img4 from "../../../assets/Images/Sliders/Transparency/4.webp";

const TransparencySlider = () => {
  return (
    <div className="p-20 bg-[#fae2e2] mx-auto max-md:p-4">

        <h1 className="sm:text-[25px] text-[18px] max-md:pt-4 pb-10 mx-auto text-center font-medium">We Ensure <span className="text-[#e72129] font-medium" >100%</span> Transparency With Your Contribution</h1>

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
        className="mySwiper mb-0 col-span-10 md:col-span-8 text-sm"
      >
        {/* <!-- ---------- 1 ---------  --> */}

        <SwiperSlide>
          <div>
          <img alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={img1}
              />
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 2 ---------  --> */}

        <SwiperSlide>
          <div>
          <img alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={img2}
              />
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 3 ---------  --> */}

        <SwiperSlide>
          <div>
          <img alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={img3}
              />
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 4 ---------  --> */}

        <SwiperSlide>
          <div>
          <img alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={img4}
              />
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 5 ---------  --> */}

        <SwiperSlide>
          <div>
          <img alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={img1}
              />
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 6 ---------  --> */}
        <SwiperSlide>
          <div>
          <img alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={img2}
              />
          </div>
        </SwiperSlide>


        {/* <!-- ---------- 7 ---------  --> */}

        <SwiperSlide>
          <div>
          <img alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={img3}
              />
          </div>
        </SwiperSlide>

        {/* <!-- ---------- 8 ---------  --> */}

        <SwiperSlide>
          <div>
          <img alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={img4}
              />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default TransparencySlider