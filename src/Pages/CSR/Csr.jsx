import React from "react";
import "./csr.css";
// import { Link } from 'react-router-dom'
import HeaderImg from "../../assets/Images/CSR/headerImg.jpg";
import MissionGif from "../../assets/Images/CSR/mission.jpg";
import Contact from "../../components/Contact/Contact";

const Csr = () => {
  return (
    <>
      {/* --------------- HEADER ---------------  */}
      <section class="text-gray-600 body-font bg-[#faeae2] ">
        <div class="container mx-auto flex max-md:px-2 px-20 pt-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 max-md:mb-0 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={HeaderImg}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-24 max-md:mt-8 max-md:p-1">
            <h1 class="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
              Partner with us
            </h1>
            <p class="mb-8 leading-relaxed font-medium">
              Sathi Sewa Foundation Empowering the new Bharat through quality
              education, mentorship, and healthcare. We save lives, support
              young entrepreneurs, provide free food, and combat illiteracy. At
              Sathi Sewa Foundation, we envision a Bharat where every individual
              has the opportunity to thrive and reach their full potential. We
              invite you to join us in our mission to empower the new Bharat and
              make a lasting impact on generations to come.
            </p>
            <div class="flex justify-center">
              <a href="/contact">
                <button class="inline-flex text-white bg-red-500 border font-normal-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded font-medium text-lg">
                  Contact us
                </button>
              </a>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1708147014">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* ------------------- WHAT WE DO -------------  */}
      <section className="bg-white py-10 -mx-2">
        <div className="flex flex-col lg:w-[85vw] sm:mx-auto   bg-gray-100 shadow p-6 rounded-lg">
          <div>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 ">
              What we do
            </h1>
            <p className="border-b-2 border-red-500"></p>

            <br />
          </div>

          <div className="flex max-md:flex-wrap">
            <div className="p-2 sm:w-1/2 w-full sector-card">
              <div className="bg-white rounded flex p-2 h-full items-center">
                <ion-icon name="school-outline"></ion-icon>
                <button
                  onClick={(e) => {
                    setNgoCategory("education");
                  }}
                  className="title-font font-medium"
                >
                  Education
                </button>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full sector-card">
              <div className="bg-white rounded flex p-4 h-full items-center">
                <ion-icon name="leaf-outline"></ion-icon>
                <button
                  onClick={(e) => {
                    setNgoCategory("environment");
                  }}
                  className="title-font font-medium"
                >
                  Nature
                </button>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full sector-card">
              <div className="bg-white rounded flex p-4 h-full items-center">
                <ion-icon name="fast-food-outline"></ion-icon>
                <button
                  onClick={(e) => {
                    setNgoCategory("nutrition");
                  }}
                  className="title-font font-medium"
                >
                  Literacy
                </button>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full sector-card">
              <div className="bg-white rounded flex p-4 h-full items-center">
                <ion-icon name="medkit-outline"></ion-icon>
                <button
                  onClick={(e) => {
                    setNgoCategory("health");
                  }}
                  className="title-font font-medium"
                >
                  Healthcare
                </button>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full sector-card">
              <div className="bg-white rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <button
                  onClick={(e) => {
                    setNgoCategory("humanRights");
                  }}
                  className="title-font font-medium"
                >
                  Cybersercurity
                </button>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full sector-card">
              <div className="bg-white rounded flex p-4 h-full items-center">
                <ion-icon name="cash-outline"></ion-icon>
                <button
                  onClick={(e) => {
                    setNgoCategory("livelihood");
                  }}
                  className="title-font font-medium"
                >
                  Entrepreners
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- MISSION AND VISION -------------------  */}
      <section class="text-gray-600 body-font bg-white">
        <div class="container mx-auto flex px-5 sm:py-10 py-8 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-md:mb-6">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our <span className="text-[#e72129] font-medium">Mission</span>
            </h1>
            <p class="mb-8 leading-relaxed  font-medium">
              Sathi Sewa's mission is to shape a new India, providing
              opportunities for young minds to achieve their dreams. We aspire
              to build a safe, growing, and healthy nation. Join us in creating
              a brighter future for Bharat, where every youth's mission finds
              support and fulfillment.
            </p>
            <div>
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Our <span className="text-[#e72129] font-medium">Vision</span>
              </h1>
              <p class="mb-8 leading-relaxed  font-medium">
                Everyone has dreams, and we pave the path to turn those dreams
                into reality. Our vision is simple yet powerful: to empower
                dreamers. With quality support and guidance, we transform
                aspirations into achievements, creating a brighter and fulfilled
                future for all.
              </p>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={MissionGif}
            />
          </div>
        </div>
      </section>

      {/* ------------------------- OUR UPCOMING PROJECTS -------------------  */}
      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our{" "}
              <span className="text-[#e72129] font-medium">
                Upcoming Projects
              </span>
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              "Discover innovation in our upcoming projects – redefining
              excellence, one project at a time."
            </p>
          </div>
          <div class="flex flex-wrap -m-2">
            {/* ---------- 1 ------------  */}
      {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
              <div class="h-full flex items-start border-gray-200 border p-4 rounded-lg upcoming-project-box">
                <ion-icon
                  class="w-10 h-10 text-[#e72129] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  name="checkmark-circle-outline"
                ></ion-icon>
                <div class="flex-grow">
                  <h2 class="text-black text-lg  font-medium">
                    Skill Bharat -
                  </h2>
                  <p class="text-gray-500 title-font text-sm">
                    In the 'Skill Bharat' mission, we empower students with
                    21st-century skills, ensuring everyone discovers the perfect
                    skill and opportunity. Bridging rural and urban areas, we
                    create a pathway to success, making learning accessible,
                    relevant, and tailored for a brighter future."
                  </p>
                </div>
              </div>
            </div> */}
      {/* ---------- 2 ------------  */}
      {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
              <div class="h-full flex items-start border-gray-200 border p-4 rounded-lg upcoming-project-box">
                <ion-icon
                  class="w-10 h-10 text-[#e72129] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  name="checkmark-circle-outline"
                ></ion-icon>
                <div class="flex-grow">
                  <h2 class="text-black text-lg  font-medium">
                    Mentorship for Dreamers -
                  </h2>
                  <p class="text-gray-500 text-sm title-font">
                    In this mission, we offer precise mentorship and guidance to
                    those aspiring to become IAS and IPS or govt exam officers,
                    and to serve society. Bridging rural and urban areas, we
                    transform dreams into reality, empowering individuals to
                    fulfill their aspirations and contribute meaningfully to
                    society.
                  </p>
                </div>
              </div>
            </div> */}
      {/* ---------- 3 ------------  */}
      {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
              <div class="h-full flex items-start border-gray-200 border p-4 rounded-lg upcoming-project-box">
                <ion-icon
                  class="w-10 h-10 text-[#e72129] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  name="checkmark-circle-outline"
                ></ion-icon>
                <div class="flex-grow">
                  <h2 class="text-black text-lg  font-medium">
                    Empower360: Women's Holistic Education & Empowerment -
                  </h2>
                  <p class="text-gray-500 text-sm title-font">
                    Empower360 focuses on holistic women's education, covering
                    financial management,essential child-teaching skills. Our
                    initiative aims to empower women for economic independence,
                    health wellness, and nurturing family growth.
                  </p>
                </div>
              </div>
            </div> */}
      {/* ---------- 4 ------------  */}
      {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
              <div class="h-full flex items-start border-gray-200 border p-4 rounded-lg upcoming-project-box">
                <ion-icon
                  class="w-10 h-10 text-[#e72129] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  name="checkmark-circle-outline"
                ></ion-icon>
                <div class="flex-grow">
                  <h2 class="text-black text-lg  font-medium">
                    Scholar's Haven: Empowering Education Essentials -
                  </h2>
                  <p class="text-gray-500 text-sm title-font">
                    To empower children with essential educational tools and
                    resources, including school kits (bags, books, pens),
                    scholarships, establishing mini-libraries in schools, and
                    providing personalized tuition to enhance learning outcomes.
                  </p>
                </div>
              </div>
            </div> */}
      {/* ---------- 5 ------------  */}
      {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
              <div class="h-full flex items-start border-gray-200 border p-4 rounded-lg upcoming-project-box">
                <ion-icon
                  class="w-10 h-10 text-[#e72129] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  name="checkmark-circle-outline"
                ></ion-icon>
                <div class="flex-grow">
                  <h2 class="text-black text-lg  font-medium">
                    Future Innovators: Coding & Space Science Mastery -
                  </h2>
                  <p class="text-gray-500 text-sm title-font">
                    To empower students with advanced skills in coding,
                    robotics, and space science, preparing them for future
                    careers as scientists, innovators, and creators. Our
                    initiative aims to ignite passion, foster creativity, and
                    cultivate the next generation of leaders in STEM fields.
                  </p>
                </div>
              </div>
            </div> */}
      {/* ---------- 6 ------------  */}
      {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
              <div class="h-full flex items-start border-gray-200 border p-4 rounded-lg upcoming-project-box">
                <ion-icon
                  class="w-10 h-10 text-[#e72129] object-cover object-center flex-shrink-0 rounded-full mr-4"
                  name="checkmark-circle-outline"
                ></ion-icon>
                <div class="flex-grow">
                  <h2 class="text-black text-lg  font-medium">
                    Program Name: Rural Innovators Initiative -
                  </h2>
                  <p class="text-gray-500 text-sm title-font">
                    The Rural Innovators Initiative is a comprehensive program
                    aimed at empowering and supporting talented rural students
                    with innovative ideas to transform their concepts into
                    viable startups. The goal is to bridge the gap between
                    potential and opportunity, fostering innovation and
                    sustainable development in rural communities.
                  </p>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section> */}

      {/* -------------- CONTACT -----------------  */}
      <Contact />
    </>
  );
};

export default Csr;
