import React, { useState, useEffect } from "react";
import "./footer.css";
import logo from "../../assets/Images/extra/logo.png";
import { Link } from "react-router-dom";

// ---------- ANIMATION  ------------

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Footer = () => {
  {
    /* ---------- BACK TO TOP ----------  */
  }

  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });

  return (
    <>
      {/* <!-- --------- FOOTER SECTION ---------  --> */}

      <footer
        className="text-gray-600 body-font"
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay="0"
      >
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              to="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-black font-bold text-gray-900 tracking-widest text-sm mb-3">
                ON OUR SITE
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/howitworks"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/allcampains"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Explore Campaigns
                  </Link>
                </li>
                {/* <li>
                  <a className="text-black hover:text-gray-800">
                    Volunteer Program
                  </a>
                </li> */}
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-black font-bold text-gray-900 tracking-widest text-sm mb-3">
                SUPPORT
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <li>
                  <Link
                    to="/faqs"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/donation-policy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Donation Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Terms and condition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Privacy policy
                  </Link>
                </li>
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-black font-bold text-gray-900 tracking-widest text-sm mb-3">
                OTHER LINKS
              </h2>
              <span className="list-none mb-2 flex gap-2 flex-col footer-links">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">
                    Start your campaign
                  </a>
                </li>
              </span>
              {/* ---------- BACK TO TOP ----------  */}
              <span
                className="list-none mb-10 flex gap-2 flex-col footer-links"
                onClick={() =>
                  setPosition({ ...position, position: { top: 0, left: 0 } })
                }
              >
                <li>
                  <span className="text-gray-600 font-medium cursor-pointer hover:text-gray-800">
                    Back to top
                  </span>
                </li>
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-black font-bold text-gray-900 tracking-widest text-sm mb-3">
                GET IN TOUCH WITH US
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <a href="https://maps.app.goo.gl/UjRk7QPbJQKUsun28">
                  <p className="text-gray-600 font-medium">
                    Mill Road, Ganj Basoda (M.P) , India Pin- 464221
                    <br />
                  </p>
                </a>
                <a href="tel:8839170393">
                  <p className="text-gray-600 font-medium hover:text-[#e72129]">
                    +91 88391 70393
                  </p>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-red-70 ">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-black text-sm text-center sm:text-left font-medium">
              Copyright @ 2024. Sathi Sewa Foundation . All rights reserved .
              Made with &hearts; by{" "}
              <a
                href="https://piyushportfolio7.netlify.com"
                className="text-[#e72129] font-medium"
              >
                Piyush
              </a>{" "}
              &{" "}
              <a
                href="https://new-portfolio-kappa-nine.vercel.app/"
                className="text-[#e72129] font-medium"
              >
                Prerit
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
