// import headerImg from '../../assets/Images/Contact/headerImg.jpg'

function Contact() {
  return (
    <>
      <section className="bg-white px-6">
        <div className="login-banner relative justify-center flex">
          {/* <img src={headerImg} alt="" className='object-contain w-full h-[300px]' />    */}
        </div>
        <hr className="w-full bg-black border" />

        <h1
          className="text-black text-center mt-4 text-[2rem] sm:text-[2.5rem] font-semibold"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="10"
        >
          Contact Us
        </h1>
        {/* contact */}
        <div className="bg-white pb-[4rem] pt-[2rem] page-padding grid grid-cols-2 container gap-10 items-center max-md:grid-cols-1 ">
          {/* first col */}
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2
              className="text-black sm:text-[30px] text-[20px] font-semibold leading-[1.2]"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="10"
            >
              We're here to help you shape your digital presence.
            </h2>
            <p
              className="sm:text-[16px] w-[95%] text-[#646464] font-medium my-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Sathi Sewa Foundation Empowering the new Bharat through quality
              education, mentorship, and healthcare. We save lives, support
              young entrepreneurs, provide free food, and combat illiteracy.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 max-md:gap-y-10 gap-y-10 max-md:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[1.2rem] font-semibold sm:mb-4 mb-4">
                  Madhya Pradesh, India
                </h3>
                <p className="text-[15px] font-medium text-[#646464]">
                  Mill Road, Ganj Basoda (M.P), India <br /> Pin- 464221
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col relative sm:block hidden">
                <h3 className="text-[1.2rem] font-semibold mb-4">
                  Opening Hours
                </h3>

                <div className="text-[15px] font-medium text-[#646464]">
                  <p className="font-medium">Mon to Sat: 09:00 am — 11:00 pm</p>
                  <p className="font-medium">Sunday: Closed</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[1.2rem] font-semibold mb-4 sm:mb-4">
                  Information
                </h3>

                <div className="text-[15px] font-medium text-[#646464] gap-0">
                  <a href="tel:8839170393">
                    <p className="font-medium hover:text-red-500">
                      +91 8839170393
                    </p>
                  </a>
                  <a href="mailto:agrawal777piyush@gmail.com">
                    <p className="font-medium hover:text-red-500">
                      &nbsp; agrawal777piyush@gmail.com
                    </p>
                  </a>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative sm:block hidden">
                <h3 className="text-[1.2rem] font-semibold max-md:text-center sm:mb-4 mb-4">
                  Follow Us On
                </h3>

                <div className="max-md:text-[15px] text-[18px] ml-6 font-medium text-black sm:flex flex-wrap sm:gap-5 max-md:w-full">
                  <a href="https://hi-in.facebook.com/">
                    <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 max-md:m-2 hover:text-white"></i>
                  </a>

                  <a href="tel:8839170393">
                    <i className="fa-solid fa-phone p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white  max-md:m-2"></i>
                  </a>

                  <a href="https://www.instagram.com/piyushagrawal0701/">
                    <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white max-md:m-2"></i>
                  </a>

                  <a href="https://wa.me/+918839170393">
                    <i className="fa-brands fa-whatsapp p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white max-md:m-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* second col ---*/}
          <form
            className="flex flex-col py-[25px] px-[50px] max-md:px-[20px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full"
            action="https://formsubmit.co/"
            method="POST"
          >
            <h3 className="sm:text-[28px] text-[23px] font-semibold mb-14">
              Leave Us Your Info
            </h3>

            <p>
              <input
                className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8 font-medium"
                placeholder="Full Name "
                type="text"
                required
              ></input>
            </p>

            <p>
              <input
                className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8 font-medium"
                placeholder="Email Address "
                type="email"
              ></input>
            </p>

            <p>
              <input
                className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8 font-medium"
                placeholder="Mobile No. "
                type="number"
                required
              ></input>
            </p>

            <p>
              <textarea
                placeholder="Comment"
                className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8 font-medium"
                type="text"
              ></textarea>
            </p>

            <p>
              <button
                type="submit"
                className="text-white bg-[#e72129] rounded-[25px] w-fit py-[15px] px-[30px] font-semibold text-[14px] uppercase self-center mt-6 hover:bg-red-700"
              >
                Submit now
              </button>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
