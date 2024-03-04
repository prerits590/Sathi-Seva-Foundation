import React from "react";

// ---------- ANIMATION  ------------

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// ------------ IMPORTING IMAGES --------------

import img1 from "../../../assets/Images/Home-img/Social-Reconization/1.webp";
import img2 from "../../../assets/Images/Home-img/Social-Reconization/2.webp";
import img3 from "../../../assets/Images/Home-img/Social-Reconization/3.webp";
import img4 from "../../../assets/Images/Home-img/Social-Reconization/4.jpg";

const SocialReconization = () => {
  return (
    <>
      {/* <!-- ----------- SOCIAL RECONIZATION SECTION --------  --> */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 max-md:mb-6">
            <h1
              className="sm:text-3xl text-xl font-semibold title-font mb-4 text-black"
              data-aos="zoom-out"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              Social Recognition
            </h1>
            <h1
              className="lg:w-2/3 sm:text-lg font-medium text-sm text-center mx-auto"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              Our unique model has been recognized by more than 10 social
              influencers. Some celebrities also came forward to provide a
              helping hand to those in need.
            </h1>

            <section className="text-gray-600 body-font">
              <div className="container px-5 pt-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center social-img-container">
                  <div
                    className="p-4 sm:w-1/4 w-1/2"
                    data-aos="slide-left"
                    data-aos-duration="800"
                    data-aos-delay="0"
                  >
                    <img className="mx-auto" src={img1} width="100px" />
                    <h1 className="font-medium mt-2 sm:text-2xl text-xl text-black ">
                      Zayn Malik
                    </h1>
                  </div>
                  <div
                    className="p-4 sm:w-1/4 w-1/2"
                    data-aos="slide-left"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    <img className=" mx-auto" src={img2} alt="" width="100px" />
                    <h1 className="font-medium mt-2 sm:text-2xl text-xl text-black line-clamp-2  ">
                      Sidhu Moose Wala
                    </h1>
                  </div>
                  <div
                    className="p-4 sm:w-1/4 w-1/2"
                    data-aos="slide-left"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    <img className=" mx-auto" src={img3} alt="" width="100px" />
                    <h1 className="font-medium mt-2 sm:text-2xl text-xl text-black  ">
                      Sasha Malik
                    </h1>
                  </div>
                  <div
                    className="p-4 sm:w-1/4 w-1/2"
                    data-aos="slide-left"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <img className=" mx-auto" src={img4} alt="" width="100px" />
                    <h1 className="font-medium mt-2 sm:text-2xl text-xl text-black">
                      Rubina Dilaik
                    </h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialReconization;
