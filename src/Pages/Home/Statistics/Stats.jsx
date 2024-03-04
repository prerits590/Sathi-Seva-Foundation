import React from "react";

// -------- ANIMATION ---------
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Stats = () => {
  return (
    <>
      {/* <!-- ----------- STATISTIC ----------  --> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 max-md:px-5 py-24 mx-auto">
          <div
            className="flex flex-col text-center w-[60%] max-md:w-[100%] mx-auto sm:mb-20 mb-4"
            data-aos="zoom-out-down"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <p className="lg:w-2/3 mx-auto leading-relaxed text-[#e72129] font-bold sm:text-xl text-base">
              Sathi Sewa Foundation
            </p>
            <h2 className="sm:text-5xl max-md:mt-2 text-3xl font-medium body-font mb-4 text-gray-900">
              <b>
                India’s most trusted online <br /> donation platform
              </b>
            </h2>
          </div>
          <div className="flex flex-wrap m-4 text-center statistic-box-container">
            <div
              className="max-md:py-4 p-4 md:w-1/4 sm:w-1/2 w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="50"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg statistic-box">
                <ion-icon
                  name="people-outline"
                  className="text-6xl text-[#faeae2] "
                ></ion-icon>
                <h2 className="title-font font-medium text-3xl text-gray-900 py-1">
                  1,000+
                </h2>
                <p className="leading-relaxed font-medium">Donors</p>
              </div>
            </div>
            <div
              className="max-md:py-4 p-4 md:w-1/4 sm:w-1/2 w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg statistic-box">
                <ion-icon
                  name="fitness-outline"
                  className="text-6xl text-[#faeae2]"
                ></ion-icon>
                <h2 className="title-font font-medium text-3xl text-gray-900 py-1">
                  5K+
                </h2>
                <p className="leading-relaxed font-medium">Lives Impacted</p>
              </div>
            </div>
            <div
              className="max-md:py-4 p-4 md:w-1/4 sm:w-1/2 w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="250"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg statistic-box justify-center items-center flex flex-col">
                <ion-icon
                  name="shield-checkmark-outline"
                  className="text-6xl text-[#faeae2]"
                ></ion-icon>
                <h2 className="title-font font-medium text-3xl text-gray-900 py-1">
                  100+
                </h2>
                <p className="leading-relaxed font-medium">
                  Verified Non Profits
                </p>
              </div>
            </div>
            <div
              className="max-md:py-4 p-4 md:w-1/4 sm:w-1/2 w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="350"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg statistic-box justify-center items-center flex flex-col">
                <ion-icon
                  name="ribbon-outline"
                  className="text-6xl text-[#faeae2]"
                ></ion-icon>
                <h2 className="title-font font-medium text-3xl text-gray-900 py-1">
                  1+
                </h2>
                <p className="leading-relaxed font-medium">
                  Corporate Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
