import { useState } from "react";
import "../../css/support-fundraiser.css";
import axios from "axios";

import fundHeader from "../../assets/Images/Support-Fundraiser/fundraiser-header.png";
import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    amount: "",
    email: "",
    state: "",
    pincode: "",
    address: "",
  });
  const { campaignId } = useParams();
  const { fullName, phone, email, amount, state, pincode, address } = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePayment = async () => {
    const { data } = await axios.post(
      "https://ssf-backend.vercel.app/api/payments/checkout",
      {
        amount,
      }
    );

    console.log(data);
    const options = {
      key: import.meta.env.VITE_RAZORPAY_CLIENT_ID,
      amount: Number(data.order?.amount),
      currency: "INR",
      name: "Smile foundation",
      description: "Donation",
      order_id: data.order.id,
      handler: async function (response) {
        await axios.post(
          "https://ssf-backend.vercel.app/api/payments/verifyPayment",
          {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            campaignId,
            fullName,
            phone,
            email,
            amount,
            state,
            pincode,
            address,
          }
        );
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      {/* <!-- ------------ HEADER SECTION -----------  --> */}
      <section className="fundraiser-header payment-header">
        <img src={fundHeader} alt="" />
        <hr />
      </section>

      {/* <!-- ------------ PAYMENT SECTION -----------  --> */}
      <section className="text-gray-600 body-font mx-auto payment-section ">
        <div className="container pb-44 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12">
            <p className="lg:w-2/3 mx-auto text-3xl text-black">
              Give a little
            </p>
            <h1 className="sm:text-6xl text-5xl font-medium mb-4 text-[#e72129]">
              Help a lot
            </h1>
          </div>

          {/* <!-- ------------ AMOUNT DIV ------------  --> */}
          <div className="amount-div  container">
            <p className="lg:w-2/3 mx-auto text-start max-md:text-center  text-3xl font-bold text-black mb-10">
              Donation Amount
            </p>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-16 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mb-10">
              <div className="relative flex-grow w-full">
                <button className="amount-btn w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base  text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  ₹2000
                </button>
              </div>

              <div className="relative flex-grow w-full">
                <button className="amount-btn w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base  text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  ₹4000
                </button>
              </div>

              <div className="relative flex-grow w-full">
                <button className="amount-btn w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base  text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  ₹7000
                </button>
              </div>
              <div className="relative flex-grow w-full">
                {/* <!-- <label for="full-name" className="leading-7 text-sm text-gray-600">Other</label> --> */}
                <input
                  type="number"
                  id="full-name"
                  onChange={onChange}
                  value={amount}
                  name="amount"
                  placeholder="Other amount"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-[18px] px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* <!-- <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button> --> */}
            </div>
          </div>

          {/* <!-- ------------ FORM DIV -------------  --> */}

          <div className="payment-form w-full mx-auto max-md:border-t pt-6">
            <p className="lg:w-2/3 mx-auto text-3xl font-bold text-black max-md:text-center mb-10">
              Your Details
            </p>

            {/* <!-- -------- NAME & MOBILE ----------  --> */}
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  onChange={onChange}
                  value={fullName}
                  placeholder="eg. Rahul Jain"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative flex-grow w-full">
                <label for="number" className="leading-7 text-sm text-gray-600">
                  Mobile no.
                </label>
                <input
                  type="number"
                  id="number"
                  name="phone"
                  onChange={onChange}
                  value={phone}
                  placeholder="+91 "
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            {/* <!-- -------- EMAIL & ADDRESS ----------  --> */}
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end py-4">
              <div className="relative flex-grow w-full">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={onChange}
                  value={email}
                  placeholder="eg. rahuljain@gmail.com"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow w-full">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Billing Address
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="address"
                  onChange={onChange}
                  value={address}
                  placeholder="eg. Near Raj hotel, Bhopal"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            {/* <!-- -------- STATE & PINCODE ----------  --> */}
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  State
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="state"
                  onChange={onChange}
                  value={state}
                  placeholder="Madhya Pradesh"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow w-full">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Pin code{" "}
                </label>
                <input
                  type="number"
                  id="email"
                  name="pincode"
                  onChange={onChange}
                  value={pincode}
                  placeholder="eg. 464221"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* 
            <!-- <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button> --> */}
            </div>

            <p className="w-full mx-auto text-center mt-8 ">
              <input
                className="mb-1 text-[#e72129]"
                type="checkbox"
                name="update"
                id="update"
              />
              &nbsp; Send me updates and notifications via WhatsApp/SMS
            </p>

            {/* <!-- ---------- PROCEED TO PAY ------------  --> */}
            <button
              onClick={handlePayment}
              className="mt-10 flex  mx-auto  payment-btn "
            >
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
                        <stop
                          offset="1"
                          stopColor="#fff"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="payment-btn__text">
                  Proceed to Pay &#10230;
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
