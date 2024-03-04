import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// ------------ IMPORTING IMAGES --------------

import { getAllNgos } from "../../Admin Panel/Methods";
const TrustedNgo = () => {
  const obj1 = localStorage.getItem("token");
  const objString = JSON.parse(obj1);
  const token = objString ? objString.token : null;
  const [ngos, setNgos] = useState([]);
  useEffect(() => {
    const getNgos = async () => {
      // setLoading(true);
      const ngosData = await getAllNgos(token);
      setNgos(ngosData);
      // setLoading(false);
    };
    getNgos();
  }, []);
  return (
    <>
      {/* <!-- ------------ OUR TRUSTED NGOs PARTNERS SECTION -----------  --> */}
      <section className="text-gray-600 body-font mx-auto max-w-screen-xl overflow-x-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-start w-full mb-20 max-md:text-center" data-aos="slide-right"
      data-aos-duration="800" data-aos-delay="0">
            <h1 className="sm:text-4xl  text-3xl font-bold mb-4 text-gray-900">
              Our trusted NGO partners
            </h1>
            <p className="lg:w-2/3 sm:text-xl text-base leading-relaxed font-normal">
              We have been raising funds for credible nonprofits for 20+ years
            </p>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container mx-auto">
              {/* <!-- -------- LAPTOP & MOBILE BOTH VERSION ------  --> */}
              <Swiper
                className="mySwiper overflow-x-hidden"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop="true"
                slidesPerView={2}
                spaceBetween={30}
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
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                }}
              >
                {/* <!-- ---------- 1 ---------  --> */}
                <div className="border">
                  {ngos.map((ngo) => (
                    <div key={ngo._id} className="border">
                      <SwiperSlide>
                        <button className="trusted-ngo-box">
                          <img src={ngo.ngoLogo} alt="" />
                        </button>
                      </SwiperSlide>
                    </div>
                  ))}
                </div>

                {/* <!-- ---------- 2 ---------  --> */}

                {/* <!-- ---------- 7 ---------  --> */}
              </Swiper>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default TrustedNgo;
