// ---------- ANIMATION  ------------

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

import HeaderSlider from "../../components/Sliders/Header-Slider/HeaderSlider";
// import HeaderStats from "../../components/Stats/HeaderStats";
// import Showmorebtn from "../../components/Buttons/Showmorebtn";

import SupportFundraiser from "./Support Fundraiser/SupportFundraiser";
import TrustedNgo from "./Trusted-Ngos/TrustedNgo";
import RaiseFund from "./Raise Fund/RaiseFund";
import Stats from "./Statistics/Stats";

import SocialChange from "./Social Changes/SocialChange";

import Whatsapp from "../../components/Whatsapp-icon/Whatsapp";
// import ContactSection from "../../components/Contact/ContactSection";
import Causes from "./Causes You Can Support/Causes";
import BottomNav from "../../components/Bottom Navigation/BottomNav";
import Faq from "../../components/Faq/Faq";
import SocialReconization from "./Social Reconization/SocialReconization";
// import { useEffect} from "react";

  // ANIMATION FUNCTION 
  // useEffect(() => {
  //   AOS.init();
  // }, [])

const Home = () => {
  return (
    <>
      {/* -------- HEADER SLIDER --------  */}

      <HeaderSlider />
      {/* <HeaderStats /> */}
      <Whatsapp />

      {/* -------------- STATS -----------------  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 max-md:pt-10 pb-6 mx-auto">
          <div className="mb-20 max-md:mb-14">
            <h1
              className="sm:text-4xl text-2xl font-semibold  text-center text-gray-900 mb-2"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              Give Monthly
            </h1>
            <p
              className="text-gray-500 text-center font-medium sm:text-[20px] text-[14px]"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="60"
            >
              Sign up once and invest in India’s future every month
            </p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 max-md:px-4 px-10">
            <div
              className="p-6 md:w-1/3 flex border sm:border-l-0"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <div className="w-12 h-12 inline-flex text-[40px] items-center justify-center rounded-full  text-red-500 mb-4 flex-shrink-0">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                  Real Changes
                </h2>
                <p className="leading-relaxed text-base font-medium title-font">
                  Your choice to give monthly will make a long-lasting impact
                </p>
              </div>
            </div>
            <div
              className="p-6 md:w-1/3 flex border"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 inline-flex text-[40px] items-center justify-center rounded-full  text-red-500 mb-4 flex-shrink-0">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                  Regular Changes
                </h2>
                <p className="leading-relaxed text-base font-medium title-font">
                  Learn how you are changing lives through our reports
                </p>
              </div>
            </div>
            <div
              className="p-6 md:w-1/3 flex border sm:border-r-0"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="w-12 h-12 inline-flex text-[40px] items-center justify-center rounded-full text-red-500 mb-4 flex-shrink-0">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                  Trusted Giving
                </h2>
                <p className="leading-relaxed text-base font-medium">
                  Every beneficiary you support is under the care of GiveAssured
                  nonprofits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ----------- OUR CAMPAINS SECTION -----------  --> */}
      <section className="text-gray-600 body-font bg-gray-100 mt-16 mb-16 py-10 overflow-x-hidden">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1
              className="text-xl font-semibold title-font mb-2 text-[#e72129]"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              OUR CAMPAIGNS
            </h1>
            <h1
              className="lg:w-2/3 mx-auto text-black font-semibold text-[35px] max-md:text-[20px]"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              Causes you can support
            </h1>
          </div>
          {/* <!-- ---------- CONTROLLER SLIDER  --------  --> */}
          <Causes />

          {/* <!-- ------------ SHOW MORE BTN ---------------  --> */}
        </div>
      </section>

      {/* <!-- ------------ SUPPORT A FUNDRAISER SECTION -----------  --> */}
      <SupportFundraiser />

      {/* <!-- ------------ OUR TRUSTED NGOs PARTNERS SECTION -----------  --> */}
      <TrustedNgo />

      {/* <!-- --------- RAISE A FUND SECTION -----------  --> */}
      <RaiseFund />

      {/* <!-- --------- STATISTIC SECTION -----------  --> */}
      <Stats />

      {/* <!-- ------------ OUR CORPORATE NGOs PARTNERS SECTION -----------  --> */}
      {/* <CorporatePartener /> */}

      {/* <!-- ------------ SOCIAL CHANGES SECTION -----------  --> */}
      <SocialChange />

      {/* ---------------------- FAQs ---------------------------  */}
      <Faq />

      {/* <!-- ----------- SOCIAL RECONIZATION SECTION --------  --> */}
      <SocialReconization />

      {/* <!-- ----------- CONTACT-COMPONENT SECTION --------  --> */}
      {/* <ContactSection /> */}

      {/* <!-- ----------- BOTTOM NAVIGATION SECTION --------  --> */}
      <BottomNav />
    </>
  );
};

export default Home;
