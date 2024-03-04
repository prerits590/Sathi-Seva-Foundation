import { useState } from "react";
import { addMessage } from "./Methods";
import toast from "react-hot-toast";
const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const obj1 = localStorage.getItem("token");
  const objString = JSON.parse(obj1);
  const token = objString.token;

  const handleInputChange = (field, value) => {
    setContactForm({
      ...contactForm,
      [field]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMessage(contactForm, token);

      toast.success("Message sent successfully!");
      setContactForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding NGO:", error);
      toast.error("Error adding NGO");
    }
  };
  console.log(contactForm);
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container max-md:px-2 px-24 max-md:pb-4 pb-24 max-md:py-4 py-24 mx-auto flex gap-4 sm:flex-nowrap flex-wrap">
          {/* ---------- SOCIAL LINKS ----------  */}
          <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden p-10 max-md:p-2 flex justify-start relative">
            <div className="contact-component max-md:text-sm text-[24px]">
              <div className="max-md:text-xl">
                <h4 className="text-[#e72129]">Get in touch</h4>
                <h1 className="font-medium text-black">
                  Reach out to us. We are here to help you!
                </h1>
              </div>

              <div className="container py-10 flex flex-col gap-6">
                {/* ------------ WHATSAPP ------------ */}
                <div className="bg-white flex gap-6 px-4 py-2 rounded-lg contact-box-card">
                  <div className="img items-center flex">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/whatsapp--v1.png"
                      alt="whatsapp--v1"
                    />
                  </div>
                  <div className="flex-row flex sm:gap-8 gap-2 items-center">
                    <div className="text-black">
                      <p>Chat with us on Whatsapp</p>
                      <p className="text-sm">On +91 80936 47715</p>
                    </div>
                    <div>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png"
                        alt="circled-chevron-right--v1"
                      />
                    </div>
                  </div>
                </div>
                {/* ------------ INSTAGRAM ------------ */}
                <div className="bg-white flex gap-6 px-4 py-2 rounded-lg contact-box-card">
                  <div className="img">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency/48/instagram-new.png"
                      alt="instagram-new"
                    />
                  </div>

                  <div className="flex-row flex sm:gap-20 gap-4 items-center">
                    <div className="text-black">
                      <p>Join us on Instagram</p>
                      <p className="sm:text-sm text-[12px]">
                        On bharatshaktifoundation
                      </p>
                    </div>
                    <div>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png"
                        alt="circled-chevron-right--v1"
                      />
                    </div>
                  </div>
                </div>
                {/* ------------ PHONE ------------ */}
                <div className="bg-white flex gap-6 px-4 py-2 rounded-lg contact-box-card">
                  <div className="img">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/external-flat-icons-pause-08/64/external-call-shopping-flat-icons-pause-08.png"
                      alt="external-call-shopping-flat-icons-pause-08"
                    />
                  </div>

                  <div className="flex-row flex sm:gap-28 gap-8 items-center">
                    <div className="text-black">
                      <p>Get on call with us</p>
                      <p className="text-sm">On +91 80936 47715</p>
                    </div>
                    <div>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png"
                        alt="circled-chevron-right--v1"
                      />
                    </div>
                  </div>
                </div>
                {/* ------------ WHATSAPP CHANNEL ------------ */}
                <div className="bg-white flex gap-6 px-4 py-2 rounded-lg contact-box-card">
                  <div className="img items-center flex">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/whatsapp--v1.png"
                      alt="whatsapp--v1"
                    />
                  </div>

                  <div className="flex-row flex sm:gap-4 gap-3 items-center">
                    <div className="text-black">
                      <p>Join our Whatsapp channel</p>
                      <a href="https://whatsapp.com/channel/0029VaHW9xR05MUYBlFgup0h">
                        <p className="text-base">Click here</p>
                      </a>
                    </div>
                    <div>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png"
                        alt="circled-chevron-right--v1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------ CONTACT FORM --------------- */}
          <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 py-10 mt-14 md:mt-10 px-10 rounded-lg contact-box-card h-fit max-md:hidden">
            <h2 className="text-gray-900 text-xl mb-2 font-medium title-font">
              Send us and Email
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  handleInputChange("name", e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => {
                  handleInputChange("email", e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(e) => {
                  handleInputChange("message", e.target.value);
                }}
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
