import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

// ---------- ANIMATION  ------------

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// ---------- IMPORTING IMAGES ----------

import headerImg from "../../assets/Images/About-img/headerImg.png";
import member1 from "../../assets/Images/About-img/our team/piyushImg.jpg";
import member2 from "../../assets/Images/About-img/our team/prerit.png";
import member3 from "../../assets/Images/About-img/our team/3.jpg";
import member4 from "../../assets/Images/About-img/our team/4.jpg";

const About = () => {
  return (
    <>
      {/* ------- HEADER SECTION ( MISSION ) -----------  */}
      <section className="text-gray-600 body-font bg-[#faeae2]">
        <div className="container mx-auto justify-center flex max-md:px-4 px-24 gap-16 pt-28 max-md:gap-0 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 max-md:mb-2 py-10 max-md:pt-10 max-md:py-0 ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={headerImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 sm:w-1/2 flex flex-col md:items-start md:text-left items-center text-center gap-2 mt-6">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              Sathi Sewa
              <br />
              Tech, <span className="text-[#e72129] font-medium">Charity</span>,
              Impact
            </h1>
            <p className="mb-8 text-black max-md:pr-0 text-[20px] text-start font-medium">
              Our mission at Sathi Sewa is clear: to provide equal access to
              technology solutions for NGOs and donors. We aspire to create a
              vibrant NGO community where everyone comes together, joining hands
              to elevate each other, raise donations for worthy causes, and
              collectively contribute to building a better life for those in
              need.
            </p>
            <div className="flex justify-center">
              <Link to="/donate">
                <button className="inline-flex text-white bg-red-500 font-normal border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Join our mission
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="custom-shape-divider-top-1705402275 bg-[white]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* ----------- OUR VISION --------------  */}

      <section className="text-gray-600 body-font bg-white w-full sm:px-10 px-0 mx-auto ">
        <div className="py-20 max-md:py-10 mx-auto max-md:mx-0 ">
          <div
            className="flex flex-col text-center w-full mb-14 max-md:mb-10"
            data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-normal">
              Sathi Sewa Foundation
            </p>
            <h1 class="sm:text-5xl text-4xl font-semibold  mb-4 text-gray-900">
              OUR<span class="text-[#e72129] font-semibold"> VISION</span>
            </h1>
          </div>
          <div className="flex flex-wrap mx-auto text-start statistic-box-container">
            <div
              className="sm:p-4 p-4 max-md:py-2  md:w-1/3 sm:w-1/2 w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg h-[350px] max-md:h-fit overflow-hidden statistic-box">
                <ion-icon
                  name="bulb-outline"
                  className="text-6xl text-start text-[#00CB6C] "
                ></ion-icon>
                <h2 className="font-medium text-3xl text-start text-gray-900 mb-2">
                  Equal Access to <br /> Technology
                </h2>
                <p className="text-start">
                  We believe in the power of technology to drive positive
                  change. Sathi Sewa is dedicated to ensuring that NGOs,
                  regardless of their size or resources, have access to
                  cutting-edge technology solutions to amplify their impact.
                </p>
              </div>
            </div>
            <div
              className="sm:p-4 p-4 max-md:py-2 md:w-1/3 sm:w-1/2 w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-md:h-fit overflow-hidden trunate h-[350px] statistic-box">
                <ion-icon
                  name="shield-checkmark-outline"
                  className="text-6xl text-[#00CB6C]"
                ></ion-icon>
                <h2 className="font-medium text-3xl text-gray-900 mb-2">
                  Community <br /> Collaboration
                </h2>
                <p>
                  We envision a united NGO community where collaboration is key.
                  By fostering an environment where NGOs support each other,
                  share resources, and collectively work towards common goals,
                  we aim to maximize the impact of each noble cause.
                </p>
              </div>
            </div>
            <div
              className="sm:p-4 p-4 max-md:py-2  md:w-1/3 sm:w-1/2  w-full"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-md:h-fit h-[350px] overflow-hidden statistic-box">
                <ion-icon
                  name="fitness-outline"
                  className="text-6xl text-[#00CB6C]"
                ></ion-icon>
                <h2 className="font-medium text-3xl text-gray-900 mb-2">
                  Empowering <br /> Lives
                </h2>
                <p>
                  Our core focus is on making a meaningful difference in
                  people's lives. Through strategic initiatives, we aim to
                  uplift communities, improve access to quality education, and
                  enhance skill development opportunities for a brighter future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- OUR TEAM -------------    */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-col text-center w-full mb-20"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-900 tracking-widest">
              OUR <span className="text-[#e72129] font-semibold">TEAM</span>
            </h1>
            <p className="lg:w-2/3 mx-auto  sm:text-[24px] text-[20px] font-medium">
              <span className="text-[#e72129] font-medium">Winning</span> with
              heart for the hourly workforce
            </p>
          </div>
          <div className="flex flex-wrap -m-4 max-md:pl-6">
            {/* ----------- 1 ( PIYUSH AGRAWAL ) ------------- */}
            <div
              className="p-2 lg:w-1/2 team-member-card max-md:mb-10"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              <div className="h-full flex sm:flex-row flex-col items-start sm:items-center sm:justify-start justify-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-52 object-contain bg-white sm:mb-0 mb-4"
                  src={member1}
                />
                <div className="flex-grow sm:pl-8">
                  <h1 className="font-medium text-[24px] text-gray-900">
                    Piyush Agrawal
                  </h1>
                  <h1 className="text-[#e72129] font-medium mb-3">
                    Front-end Web Developer
                  </h1>
                  <p className="mb-4 font-medium">
                    Meet Piyush, our skilled web developer with over 1 year of
                    experience. He is the creative mind behind the captivating
                    front-end of the Sathi Sewa Foundation website, showcasing
                    his talent for innovative and user-friendly design.
                  </p>

                  <a href="https://piyushportfolio7.netlify.com">
                    <p className="pb-2 -mt-2 text-red-500 font-medium cursor-pointer hover:text-blue-500">
                      View Portfolio
                    </p>
                  </a>

                  <span className="inline-flex gap-2">
                    <a href="https://www.linkedin.com/in/piyushagrawal0701/">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-linkedin-in bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                      ></i>
                    </a>

                    <a href="https://www.instagram.com/piyushagrawal0701/">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-instagram bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                      ></i>
                    </a>

                    <a href="https://wa.me/+918839170393" target="_blank">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-whatsapp bg-[#efefef] p-4 rounded-full hover:bg-[#25D366] hover:text-white"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------- 2 ( PRERIT SHARMA ) ------------- */}

            <div
              className="p-4 lg:w-1/2 team-member-card"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="h-full flex sm:flex-row flex-col items-start sm:items-center sm:justify-start justify-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-52 object-cover object-center sm:mb-0 mb-4"
                  src={member2}
                />
                <div className="flex-grow sm:pl-8">
                  <h1 className="font-medium text-[24px] text-gray-900">
                    Prerit Sharma
                  </h1>
                  <h1 className="text-[#e72129] font-medium mb-3">
                    Full Stack Developer
                  </h1>
                  <p className="mb-4 font-medium">
                    Meet Prerit, our skilled full stack developer with over 1
                    year of experience. He is the creative mind behind the
                    captivating back-end of the Sathi Sewa Foundation website,
                    showcasing his talent for innovative and user-friendly
                    design.
                  </p>

                  <a href="https://new-portfolio-kappa-nine.vercel.app/">
                    <p className="pb-2 -mt-2 text-red-500 font-medium cursor-pointer hover:text-blue-500">
                      View Portfolio
                    </p>
                  </a>

                  <span className="inline-flex gap-2">
                    <a href="https://www.linkedin.com/in/prerit-sharma-1476882a6/">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-linkedin-in bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                      ></i>
                    </a>

                    <a href="https://www.instagram.com/prerit_sh/">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-instagram bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                      ></i>
                    </a>

                    <a href="https://wa.me/+918979384648" target="_blank">
                      <i
                        style={{ transition: "all 0.3s" }}
                        className="fa-brands fa-whatsapp bg-[#efefef] p-4 rounded-full hover:bg-[#25D366] hover:text-white"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* ----------- ADDRESS -------------  */}
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-10 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200" data-aos="fade-up"
      data-aos-duration="800" data-aos-delay="0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Address
            </h1>
            <p className="leading-relaxed text-base font-normal">
              Mill Road, Ganj Basoda (M.P) , India Pin- 464221
            </p>
            <a
              className="text-red-500 font-medium inline-flex items-center mt-4"
              href="https://maps.app.goo.gl/UjRk7QPbJQKUsun28"
            >
              View location
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12 -mt-14 max-md:-mt-2" data-aos="fade-up"
      data-aos-duration="800" data-aos-delay="100">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Connect us
            </h1>
            {/* SOCIAL LINKS */}
            <div className="flex gap-7 text-[18px] mt-2 text-[#646464] min540:justify-center" >
              <a href="/">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
              </a>

              <a href="tel:8839170393">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-solid fa-phone bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
              </a>

              <a href="https://www.instagram.com/piyushagrawal0701">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-instagram bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
              </a>

              <a href="https://wa.me/+918839170393" target="_blank">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-whatsapp bg-[#efefef] p-4 rounded-full hover:bg-[#25D366] hover:text-white"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
