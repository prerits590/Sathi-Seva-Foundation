import "./monthlydonate.css";
import { Link, useParams } from "react-router-dom";
import lap2 from "../../assets/Images/Monthly Donate img/header-slider-img/2.webp";

import Faq from "../../components/Faq/Faq";
import TopDonors from "../../components/TopDonors/TopDonors";
import { useEffect, useState } from "react";
import TransparencySlider from "../../components/Sliders/One-card-slider/TransparencySlider";
import { getMonthlyCampaignById } from "../Admin Panel/Methods";
const MonthlyDonatepage = () => {
  const [count, setCount] = useState(0);
  const [monthlyCampaign, setMonthlyCampaign] = useState({});
  const { monthlyFundraiserId } = useParams();
  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleDecrement = () => {
    if (count === 0) {
      setCount(count);
    } else setCount(count - 1);
    console.log(count);
  };
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await getMonthlyCampaignById(monthlyFundraiserId);
        setMonthlyCampaign(details);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDetails();
  }, []);
  return (
    <>
      {/* <!-- ------------ HEADER SECTION -----------  --> */}
      <section className="max-md:pt-0 pt-16 z-5 ">
        <swiper-container
          class="mySwiper max-md:h-[300px] max-md:pt-8 h-[504px]"
          space-between="30"
          centered-slides="true"
          autoplay-delay="2500"
          autoplay-disable-on-interaction="false"
        >
          <swiper-slide>
            <img src={monthlyCampaign.sliderImg1} alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src={lap2} alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src={monthlyCampaign.sliderImg2} alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src={monthlyCampaign.sliderImg3} alt="" />
          </swiper-slide>
        </swiper-container>
      </section>
      {/* <section className=" fundraiser-header sm:h-[30rem] pt-16 h-[20rem]">
        <img src={banner} className="object-cover w-full h-full" alt="" />
      </section> */}

      {/* -------------- TITLE AND PARA ( LAPTOP VERSION ) -----------  */}
      <div className="sm:px-4 px-0 sm:m-10 m-4 max-md:px-2 rounded-[30px] sm:-mt-16 z-10 -mt-24 bg-white relative shadow sm:block hidden">
        <header className="header m-2 py-2 rounded-[30px]">
          <h1 className="font-semibold max-md:text-[17px] sm:p-2 heading ">
            {monthlyCampaign.title}
          </h1>

          <p className="sm:text-[20px] text-sm text-gray-500 px-2 font-normal">
            {monthlyCampaign.description}
          </p>
        </header>
        {/* ----------- SIDE CARD ------------   */}
        <aside className="aside-mobile max-md:mt-4 ">
          <div className="flex justify-between py-2">
            <p className="sm:text-[26px] text-lg font-semibold text-black">
              ₹{monthlyCampaign.amountRaise}
            </p>
            <p className="text-[20px] font-semibold text-black">
              <span className="text-red-500 font-normal text-[26px]">
                ₹235,000{" "}
              </span>{" "}
              Donated
            </p>
          </div>
          <div className="progress-loader">
            <div className="progress"></div>
          </div>

          <div className="flex justify-between py-2">
            <p className="text-[20px] font-semibold text-gray-500 flex items-center align-center text-start justify-center  gap-2">
              <span className="text-[36px] pt-2">
                <ion-icon name="people-outline"></ion-icon>
              </span>{" "}
              <p className="font-normal">52,432+ Donors</p>
            </p>
            <p className="text-[20px] font-semibold text-gray-500 flex items-center align-center text-start justify-center  gap-2">
              <span className="text-[30px] pt-2">
                <ion-icon name="time-outline"></ion-icon>
              </span>{" "}
              <p className="font-normal">12 Days</p>
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-[15px] font-semibold text-gray-500 flex flex-col   text-start justify-center  gap-2">
              <span className="text-[20px] font-bold -mb-2">
                Share this fundraiser
              </span>{" "}
              <p className="font-normal">
                Every Social Media Share Brings Rs 5000
              </p>
            </p>

            <span className="inline-flex gap-4">
              <a href="https://www.linkedin.com/">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-linkedin-in bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
              </a>

              <a href="https://www.instagram.com/">
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

          <br />
          <hr />
        </aside>
      </div>

      {/* -------------- TITLE AND PARA ( MOBILE VERSION ) -----------  */}
      <div className="sm:px-4 py-1 sm:m-10 m-4 max-md:px-2 rounded-[30px] sm:-mt-16 z-10 -mt-24 bg-white relative shadow sm:hidden block">
        <header className="header m-2 py-2 rounded-[30px]">
          <h4 className="font-semibold max-md:text-[17px] heading mb-2">
            {monthlyCampaign.title}
          </h4>

          <p className="sm:text-[20px] text-sm font-medium text-gray-500 ">
            {monthlyCampaign.description}
          </p>
        </header>
        {/* ----------- SIDE CARD ------------   */}
        <aside className="aside-mobile ">
          <div className="flex justify-between py-2">
            <p className="sm:text-[26px] text-lg font-semibold text-black">
              ₹{monthlyCampaign.amountRaise}
              <span className="text-gray-500 text-sm font-medium">
                &nbsp; is required by 5 hours
              </span>
            </p>
          </div>
          <div className="progress-loader">
            <div className="progress"></div>
          </div>

          <div className="flex justify-between py-2">
            <div className="text-[20px] font-semibold text-gray-500 flex items-center align-center text-start justify-center  gap-2">
              <div className="text-[15px] text-gray-500 font-semibold flex flex-col">
                <p className="text-[18px]">
                  <ion-icon name="heart-outline"></ion-icon>
                </p>
                <p className="font-normal">₹235,000 Donated</p>
              </div>

              <div className="text-[15px] text-gray-500 font-semibold flex flex-col">
                <p className="text-[18px]">
                  <ion-icon name="people-outline"></ion-icon>
                </p>
                <p className="font-normal">52,432+ Donors</p>
              </div>
              <div className="text-[15px] text-gray-500 font-semibold flex flex-col">
                <p className="text-[18px]">
                  <ion-icon name="time-outline"></ion-icon>
                </p>
                <p className="font-normal">12 Days</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between flex-col gap-4">
            <p className="text-[13px] font-semibold text-gray-500 flex flex-col   text-start justify-center  gap-2">
              <span className="text-[17px] font-semibold text-black -mb-2">
                Share this fundraiser
              </span>{" "}
              <p className="font-normal">
                Every Social Media Share Brings Rs 5000
              </p>
            </p>

            <span className="inline-flex gap-4">
              <a href="https://www.linkedin.com/">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-linkedin-in bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
              </a>

              <a href="https://www.instagram.com/">
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

          <br />
          <hr />
        </aside>
      </div>

      {/* -------------- ABOUT THIS PAGE -----------  */}
      <div className="sm:px-4 px-0 sm:m-16 m-2 rounded-[30px] pb-6 z-10  bg-white  shadow">
        <header className="header m-2 py-2 rounded-[30px] bg-white">
          <h1 className="font-bold max-md:text-[20px] p-2 heading ">
            About us
          </h1>

          <p className="sm:text-[17px] text-base text-gray-500 px-2 font-medium">
            {monthlyCampaign.about}
          </p>
        </header>
      </div>

      {/* ---------- Top Donors -------------  */}
      <TopDonors />

      {/* -------------- 100% TRANSPARENCY ----------  */}
      <TransparencySlider />

      {/* ---------- FAQs -------------  */}
      <div className="pb-4">
        <Faq />
      </div>

      {/* <!-- -------------- EXTRA - DIALOG - BOX FOR DONATING ----------  --> */}
      <section className="donate-dialog-box items-center  sm:rounded-lg max-md:gap-4 rounded-none sm:w-8/12 w-full sm:bottom-10 bottom-0 ">
        <h1 className="font-semibold">
          <span className="text-[#e72129] font-semibold">1584</span> sponsored,
          416 still left
        </h1>
        <div className="flex sm:gap-4 gap-2 max-md:flex-wrap max-md:justify-center">
          <div className="quantity-field">
            <button
              className="value-button decrease-button"
              // onclick="decreaseValue(this)"
              title="Azalt"
              onClick={handleDecrement}
            >
              -
            </button>
            <div className="number font-semibold">{count}</div>
            <button
              className="value-button increase-button"
              // onclick="increaseValue(this, 5)"
              title="Arrtır"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <Link to={`/donate/${monthlyFundraiserId}`}>
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-4 max-md:px-2 focus:outline-none hover:bg-red-600 rounded sm:text-lg text-base font-normal">
              Donate Monthly
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MonthlyDonatepage;
