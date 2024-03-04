import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/Images/Sliders/Montly-slider-img/2.webp";
import "./profile.css";
import Faq from "../../components/Faq/Faq";
import { useAuth } from "../../ContentAPI/UserContext";
import defaultUser from "../../assets/Images/extra/defaultUser.jpeg";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../libs/firebase";
import toast from "react-hot-toast";
import { updateUserProfile } from "./Methods";
const ProfilePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("myDonation");
  const { userData, userLogout } = useAuth();
  const [userForm, setUserForm] = useState({
    number: null,
    address: "",
    state: "",
    pincode: null,
    profilePic: null,
  });
  const obj1 = localStorage.getItem("token");
  const objString = JSON.parse(obj1);
  const token = objString ? objString.token : null;
  const [loading, setLoading] = useState(false);
  const handleInputChange = (field, value) => {
    setUserForm({
      ...userForm,
      [field]: value,
    });
  };
  const handleLogout = (e) => {
    e.preventDefault();
    userLogout();
  };
  const handleFileChange = async (field, file) => {
    try {
      if (!file) {
        return;
      }

      const storageRef = ref(storage, `userDocuments/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      setLoading(true);

      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload progress:", progress);
      });

      await uploadTask;

      const downloadURL = await getDownloadURL(storageRef);

      setUserForm({
        ...userForm,
        [field]: downloadURL,
      });
      setLoading(false);
      toast.success("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      setLoading(false);
      toast.error("Error uploading file");
    }
  };
  console.log(userForm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile(token, userData._id, userForm);

      toast.success("User profile updated successfully!");
    } catch (error) {
      console.error("Error updating user profile:", error);
      toast.error("Error updating user profile");
    } finally {
      setLoading(false);
    }
  };
  const renderContent = () => {
    switch (selectedCategory) {
      case "myDonation":
        return renderMyDonation();
      case "myFundraiser":
        return renderMyFundraiser();
      case "myDetails":
        return renderMyDetails();
      case "support":
        return renderSupport();
      default:
        return null;
    }
  };

  const renderMyDonation = () => {
    return (
      <div className="profile-posts w-[50%] max-md:w-full">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>
                <ion-icon name="checkmark-circle"></ion-icon>
              </p>
              <h3>THANK YOU FOR YOUR DONATION</h3>

              <h3 className="mt-10">Rs. $4000</h3>
              <p className="mt-2 text-blue-800">View full details</p>
            </div>
            <div className="flip-card-back">
              <div className="p-4 filterDiv medicine py-10">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={img2}
                  />
                  <div className="w-full">
                    <p className="mb-4 font-normal">
                      Help bring warmth to abandoned old mothers in Vrindavan to
                      save them from harsh winters.
                    </p>
                    <div className="progress-loader">
                      <div className="progress"></div>
                    </div>

                    <p className="text-base text-black font-normal ">
                      <ion-icon name="cube-outline"></ion-icon> &nbsp; Target: 0
                      left out of 70000{" "}
                    </p>

                    <Link to="/monthly-donate">
                      <button className="donate-btn">Donate Monthly</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMyFundraiser = () => {
    return (
      <div className="profile-posts w-[100%] max-md:w-full">
        <div className="start-fundraiser-card m-6 flex flex-wrap max-md:gap-6 px-2 py-6 w-[90%] max-md:w-[90%] bg-[#fae2e2] ">
          <div className="px-2 ">
            <h1 className="font-semibold">Be the first to make an impact</h1>
            <p className="font-normal">Support a cause close to your heart by starting a fundraiser.</p>
          </div>
          <Link to="/startfundraising">
            <button className="show-more">Start a Fundraiser</button>
          </Link>
        </div>
      </div>
    );
  };
  const renderMyDetails = () => {
    return (
      <div className="profile-posts w-[100%] max-md:w-full px-10 max-md:px-4">
        {/* --- HOVER CARD 1 -----  */}
        <div className="flex flex-start flex-wrap text-start justify-start w-full max-md:border-t pt-6">
          <p className="lg:w-2/3 text-3xl font-semibold text-black max-md:text-center mb-10">
            Your Details
          </p>

          {/* <!-- -------- NAME & MOBILE ----------  --> */}
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col  px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="number"
                className="leading-7 text-base font-medium text-gray-600"
              >
                Mobile no.
              </label>
              <input
                type="number"
                id="number"
                name="email"
                placeholder="+91 "
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => handleInputChange("number", e.target.value)}
              />
            </div>
          </div>

          {/* <!-- -------- EMAIL & ADDRESS ----------  --> */}
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col  px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end py-4">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="full-name"
                className="leading-7 text-base font-medium text-gray-600"
              >
                Billing Address
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="eg. Near Raj hotel, Bhopal"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>
          </div>

          {/* <!-- -------- STATE & PINCODE ----------  --> */}
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="full-name"
                className="leading-7 text-base font-medium text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Madhya Pradesh"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => handleInputChange("state", e.target.value)}
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="email"
                className="leading-7 text-base font-medium text-gray-600"
              >
                Pin code{" "}
              </label>
              <input
                type="number"
                id="email"
                name="email"
                placeholder="eg. 464221"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => handleInputChange("pincode", e.target.value)}
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="email"
                className="leading-7 text-base font-medium text-gray-600"
              >
                Profile Photo{" "}
              </label>
              <input
                type="file"
                id="file"
                name="email"
                placeholder="eg. 464221"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) =>
                  handleFileChange("profilePic", e.target.files[0])
                }
              />
            </div>
            {/* 
            <!-- <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button> --> */}
          </div>

          <p className="w-full mt-8 font-medium">
            <input
              className="mb-1 text-[#e72129]"
              type="checkbox"
              name="update"
              id="update"
            />
            &nbsp; Send me updates and notifications via WhatsApp/SMS
          </p>

          {/* <!-- ---------- PROCEED TO PAY ------------  --> */}
          <button className="my-10 payment-btn ml-0 " onClick={handleSubmit}>
            <span className="payment-btn-decor"></span>
            <div className="payment-btn-content">
              <div className="payment-btn__icon">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 2.177l-5.154 4.638a1.464 1.464 0 00-.276 1.841l3.101 5.17c.644 1.072 2.25.896 2.645-.29L34.42 15.93z"
                    ></path>
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
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
                      <stop stopColor="#fff" stopOpacity="0.71"></stop>
                      <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="payment-btn__text">
                {" "}
                {loading ? "Uploading..." : "Save Changes ➳"}
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  };
  const renderSupport = () => {
    return (
      <div className="profile-posts w-[100%] px-2 max-md:w-full">
        {/* --- HOVER CARD 1 -----  */}
        <div>
          <Faq />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container ">
        <div className="profile-header py-36 max-md:py-20">
          <div className="profile-img w-full">
            <img
              src={userData.profilePic ? userData.profilePic : defaultUser}
              width="100"
              alt="Profile Image"
              className="w-[3rem] h-[3rem] rounded-full z-2 object-center object-cover"
            />
          </div>
          <div className="profile-nav-info">
            <h3 className="user-name">Welcome, {userData.name}</h3>
            <p className="font-normal max-md:text-base">Thanks for being a part of the our community.</p>
          </div>
        </div>

        {/* ---- RIGHT PROFILE --------  */}
        <div className="main-bd">
         {/* <div className="left-side">
            <div className="profile-side h-[600px] max-md:h-[250px] ">
              <p className="font-normal">
                <a href="tel:8839170393">
                  <i
                    style={{ transition: "all 0.3s" }}
                    className="fa-solid fa-phone bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                  ></i>
                </a>
                +91 9789873456
              </p>


              <p className="user-mail font-normal">
                <a href="mailto:preritsharma@gmail.com">
                  <i className="fa-brands mail-icon" aria-hidden="true">
                    <ion-icon
                      name="mail-sharp"
                      role="img"
                      className="md hydrated"
                    ></ion-icon>
                  </i>
                </a>
                {userData.email}
              </p>

              <div className="profile-btn">
                <button className="chatbtn mt-6" id="chatBtn">
                  Complete Your Profile
                </button>
              </div>
            </div>
          </div> */}

          {/* ------- CARD (HISTORY) ------  */}
          <div className="right-side">
            <div className="nav w-full max-md:w-[100%]">
              <ul className="flex flex-wrap w-full max-md:justify-center">
                <li
                  onClick={() => {
                    setSelectedCategory("myDonation");
                  }}
                  className={
                    selectedCategory === "myDonation"
                      ? "active md:w-1/4 sm:w-1/2 w-1/2"
                      : ""
                  }
                >
                  My Donation
                </li>
                <li
                  onClick={() => {
                    setSelectedCategory("myFundraiser");
                  }}
                  className={
                    selectedCategory === "myFundraiser"
                      ? "active md:w-1/4 sm:w-1/2 w-1/2"
                      : ""
                  }
                >
                  My Fundraiser
                </li>
                <li
                  onClick={() => {
                    setSelectedCategory("myDetails");
                  }}
                  className={
                    selectedCategory === "myDetails"
                      ? "active  md:w-1/4 sm:w-1/2 w-1/2"
                      : ""
                  }
                >
                  My Details
                </li>
                <li
                  onClick={() => {
                    setSelectedCategory("support");
                  }}
                  className={
                    selectedCategory === "support"
                      ? "active md:w-1/4 sm:w-1/2 w-1/2"
                      : ""
                  }
                >
                  My Support
                </li>
              </ul>
            </div>
            <div className="profile-body max-md:mt-10">
              <div className=" w-full ">
                <div className="">{renderContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
