import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/Sliders/Control-btn-slider/controlslider.css";

// ------- COMPONENTS ------------
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Preloader/Preloader";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import PaymentPage from "./Pages/Payment page/PaymentPage";
import Allcampains from "./Pages/All/Allcampains";
import AllFundraiser from "./Pages/All/AllFundraiser";
import StoryPage from "./Pages/Home/Support Fundraiser/StoryPage";
import MonthlyDonatepage from "./Pages/Montly-Donate/MonthlyDonatepage";
import ScrollToTop from "./components/Scroll to top/ScrollToTop";
import DiscoverNgos from "./Pages/Discover Ngos/DiscoverNgos";
import Faq from "./components/Faq/Faq";
import About from "./Pages/About/About";
import ProfilePage from "./Pages/Profile/ProfilePage";
import StartFundraising from "./Pages/Start-Fundraiser/StartFundraising";
import WithAuth from "./components/WithAuth/WithAuth";
import AdminPanel from "./Pages/Admin Panel/AdminPanel";
import { Toaster } from "react-hot-toast";
import HowItWorks from "./Pages/How it works/HowItWorks";
import PrivacyPolicy from "./Pages/Policy and T&C/PrivacyPolicy";
import TermsAndCondition from "./Pages/Policy and T&C/TermsAndCondition";
import DonationPolicy from "./Pages/Policy and T&C/DonationPolicy";
import Csr from "./Pages/CSR/Csr";
import Success from "./components/Payments/Success";

// ------------ ANIMATION -------------- 
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);

  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);
  // useEffect(()=>{
  // })

    // ANIMATION FUNCTION 
    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <div className="app">
          <ScrollToTop />
          <Navbar />
          <Toaster />

          <Routes>
            <Route path="/success" element={<Success />} />
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            <Route path="/" element={<Home />} />

            {/* --------- SIGN UP & LOGIN -------  */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* --------- PAGES -------  */}

            <Route
              path="/startfundraising"
              element={
                <WithAuth>
                  <StartFundraising />
                </WithAuth>
              }
            />
            <Route
              path="/admin-panel"
              element={
                <WithAuth>
                  <AdminPanel />
                </WithAuth>
              }
            />
            <Route
              path="/donate/:monthlyFundraiserId"
              element={
                <WithAuth>
                  <PaymentPage />
                </WithAuth>
              }
            />

            <Route path="/allcampains" element={<Allcampains />} />
            <Route
              path="/allfundraiser"
              element={
                <WithAuth>
                  <AllFundraiser />
                </WithAuth>
              }
            />
            <Route path="/storypage/:fundraiserId" element={<StoryPage />} />
            <Route
              path="/monthly-donate/:monthlyFundraiserId"
              element={<MonthlyDonatepage />}
            />
            <Route path="/discover-ngo" element={<DiscoverNgos />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/csr" element={<Csr />} />
            <Route
              path="/profile"
              element={
                <WithAuth>
                  <ProfilePage />
                </WithAuth>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndCondition />}
            />
            <Route path="/donation-policy" element={<DonationPolicy />} />
          </Routes>

          <Footer />
          {/* </AuthContextProvider> */}
        </div>
      )}
    </>
  );
}

export default App;
