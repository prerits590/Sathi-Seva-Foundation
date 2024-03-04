import React from "react";
import "../../../components/Buttons/button.css";

// ---------- ANIMATION  ------------

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// ------------ IMPORTING IMAGES --------------

import img1 from "../../../assets/Images/Home-img/Raise fund/1.webp";

const RaiseFund = () => {
  return (
    <>
      {/* <!-- --------- RAISE A FUND SECTION -----------  --> */}
      <section className="text-gray-600 body-font overflow-hidden max-w-screen-xl mx-auto ">
        <div className="container  mx-auto">
          <div className="lg:w-[90%] mx-auto flex flex-wrap raise-fund-section pl-6">
            <div
              className="lg:w-1/2 w-full  lg:py-6 mb-6 lg:mb-0"
              data-aos="fade-in"
              data-aos-duration="700"
              data-aos-delay="0"
            >
              <h1 className="text-gray-900 sm:text-[35px] text-2xl title-font font-semibold sm:mb-4 mt-16">
                Raise funds for your cause!
              </h1>

              <p className="sm:text-xl text-base mb-8 font-medium">
                Onboard on Give and create impact by raising funds for your
                initiatives
              </p>

              <div className="inline-flex gap-4">
                <a href="">
                  <button className="payment-btn">
                    <span className="payment-btn-decor"></span>
                    <div className="payment-btn-content">
                      <div className="payment-btn__icon">
                        <svg
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                        >
                          <circle
                            opacity="0.5"
                            cx="25"
                            cy="25"
                            r="23"
                            fill="url(#icon-payments-cat_svg__paint0_linear_1141_21101)"
                          ></circle>
                          <mask id="icon-payments-cat_svg__a" fill="#fff">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z"
                            ></path>
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z"
                            fill="#fff"
                          ></path>
                          <path
                            d="M25.958 20.962l-1.47-1.632 1.47 1.632zm2.067.109l-1.632 1.469 1.632-1.469zm-.109 2.068l-1.469-1.633 1.47 1.633zm-5.154 4.638l-1.469-1.632 1.469 1.632zm-.276 1.841l-1.883 1.13 1.883-1.13zM34.42 15.93l-2.084-.695 2.084.695zm-19.725 6.42l18.568-6.189-1.39-4.167-18.567 6.19 1.389 4.166zm5.265 1.75l-5.12-3.072-2.26 3.766 5.12 3.072 2.26-3.766zm2.072 3.348l5.394-4.854-2.938-3.264-5.394 4.854 2.938 3.264zm5.394-4.854a.732.732 0 01-1.034-.054l3.265-2.938a3.66 3.66 0 00-5.17-.272l2.939 3.265zm-1.034-.054a.732.732 0 01.054-1.034l2.938 3.265a3.66 3.66 0 00.273-5.169l-3.265 2.938zm.054-1.034l-5.154 4.639 2.938 3.264 5.154-4.638-2.938-3.265zm1.023 12.152l-3.101-5.17-3.766 2.26 3.101 5.17 3.766-2.26zm4.867-18.423l-6.189 18.568 4.167 1.389 6.19-18.568-4.168-1.389zm-8.633 20.682c1.61 2.682 5.622 2.241 6.611-.725l-4.167-1.39a.732.732 0 011.322-.144l-3.766 2.26zm-6.003-8.05a3.66 3.66 0 004.332-.419l-2.938-3.264a.732.732 0 01.866-.084l-2.26 3.766zm3.592-1.722a3.66 3.66 0 00-.69 4.603l3.766-2.26c.18.301.122.687-.138.921l-2.938-3.264zm11.97-9.984a.732.732 0 01-.925-.926l4.166 1.389c.954-2.861-1.768-5.583-4.63-4.63l1.39 4.167zm-19.956 2.022c-2.967.99-3.407 5.003-.726 6.611l2.26-3.766a.732.732 0 01-.145 1.322l-1.39-4.167z"
                            fill="#fff"
                            mask="url(#icon-payments-cat_svg__a)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="icon-payments-cat_svg__paint0_linear_1141_21101"
                              x1="25"
                              y1="2"
                              x2="25"
                              y2="48"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stop-color="#fff"
                                stop-opacity="0.71"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="#fff"
                                stop-opacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <span className="payment-btn__text">Enroll your NGO</span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center align-center justify-center rounded-lg mx-auto"
              src={img1}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RaiseFund;
