import React from 'react'

const Oldmonthly = () => {
  return (
    <>
            {/* <!-- ------------ MONTHLY SECTION -----------  --> */}
            <section className="monthly-section max-md:mt-0  mt-20">
        {/* <!-- ---------- 1 - BLOCK -------------  --> */}
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex sm:px-44 sm:px-10 px-6 pb-10 md:flex-row flex-col items-center ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Save India’s orphans
              </h1>
              <p className="sm:text-2xl text-base mb-8">
              Transforming Lives through Compassion
              </p>

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 sm:hidden">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={orphanImg}
                />
              </div>
              <p className="mb-8 body-font">
              Welcome to "Save India's Orphans," an initiative Empowering orphans with love, education, food, and dreams. Be their beacon of hope. Support Save India's Orphans.

              </p>
              <p className="mb-8 body-font">
                <span className="text-[#e72129] font-bold">
                  Join our Mission: No Child Orphaned
                </span>{" "}
                and your support is instrumental in creating a ripple effect of change. By making a donation, you become a lifeline for these children, offering them a second chance at a fulfilling life. Your generosity can fund critical medical care, educational resources, and extracurricular activities that contribute to their holistic development.

              </p>
              <div className="flex justify-center">
                <a href="donate.html">
                  <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Donate Now
                  </button>
                </a>
                {/* <!-- <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> --> */}
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={orphanImg}
              />
            </div>
          </div>
        </section>

        {/* <!-- ---------- 2 - BLOCK --------- --> */}
        <section className="text-gray-600 body-font">
          <hr />
          <div className="container mx-auto flex sm:px-36 px-8 py-14 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={OurFondImg}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Our Foundation approach
              </h1>
              <p className="sm:text-2xl text-base mb-8">
                Our foundation partner's with the most credible nonprofits to
                make sure your donation does what it is supposed to - change
                lives.
              </p>
              <p className="sm:text-2xl text-base text-black mb-8 p-2 bg-[#faeae2]">
                A donation of{" "}
                <span className="text-[#e72129] font-bold">₹1,000/month</span>{" "}
                for an orphan's support will:
              </p>

              <div className="flex">
                <img
                  className="aspect-square w-20 h-20 rounded-lg"
                  src={BreakcycleImg}
                  alt=""
                />
                <div className="flex flex-col ml-3">
                  <h1 className="sm:text-2xl text-[17px] text-black font-medium">
                    Break cycle of neglect
                  </h1>
                  <p className="sm:text-[20px] text-[12px] leading-relaxed mb-8">
                    Help them become caring, responsible citizens
                  </p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="aspect-square w-20 h-20 rounded-lg"
                  src={EnsureImg}
                  alt=""
                />
                <div className="flex flex-col ml-3">
                  <h1 className="sm:text-2xl text-[17px] text-black font-medium">
                    Ensure their education
                  </h1>
                  <p className="sm:text-[20px] text-[12px] leading-relaxed mb-8">
                    Literacy will help shield them from future poverty
                  </p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="aspect-square w-20 h-20 rounded-lg"
                  src={ProvideShelterImg}
                  alt=""
                />
                <div className="flex flex-col ml-3">
                  <h1 className="sm:text-2xl text-[17px] text-black font-medium">
                    Provide a safe shelter
                  </h1>
                  <p className="sm:text-[20px] text-[12px] leading-relaxed mb-8">
                    Protect them from malnutrition and abuse on the streets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ---------- 3 - BLOCK -----------  --> */}
        <section className="text-gray-600 body-font ">
          <div className=" sm:mx-24 mx-6 flex sm:px-14 px-10 py-10 mb-10 md:flex-row flex-col  bg-[#faeae2] ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-center ">
              <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold text-gray-900">
                7000+ people are already making a difference every month!
              </h1>
              <p className="sm:text-2xl text-base mb-8">
                You, too, can join our fundraiser and change lives of millions
              </p>
            </div>
            <div className="gap-4 lg:max-w-lg lg:w-full md:w-1/2 w-full w-1/2 sm:mt-4 items-center flex flex-col ">
              <div className="quantity-field">
                <button
                  className="value-button decrease-button"
                  onClick={handleDecrement}
                  title="Azalt"
                >
                  -
                </button>
                <div className="number">{count}</div>
                <button
                  className="value-button increase-button"
                  onClick={handleIncrement}
                  title="Arrtır"
                >
                  +
                </button>
              </div>
              <a href="donate.html">
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Donate per month
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* <!-- ---------- 4 - BLOCK -----------  --> */}
        <section className="text-gray-600 body-font bg-gray-100">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-s text-green-500 tracking-widest font-medium title-font mb-1">
                Give, Impact, Repeat
              </h2>
              <h1 className="sm:text-5xl text-3xl font-medium title-font text-gray-900">
                Why donate every month?
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-white why-donate-card p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVR4nO2V3UtTYRzHH/onehOWYk6R+ZbYu4jI1ljjtNma29qm2bbyH+iioOdSer2JJRFlJhERERE2NSpMEBHb1vA5yebN1h9hV984QkaQ65ync86ewb7wuXzg87n5PYTUVltt3IsUxhKRjbENhWjhcpxU08L5BA3nL+FPEuOkGhZaj9HQehx/JyZ2REAepQH5IsoxJI+KGeFfG6FDaxegjpGtCDDiAiPfIROogpESvhGn7vK+XJSeyw1DG9HxLSG18vI2RV3lB7NhejYbAQ/TuS6t8lDQTd6TDlFv+jz+h6dfOysTIK0G6JnVIPRgKtthboC0EqDSSgB68iTTbk6Ae9lP3ct+GMFkus3YANeSj7qWfDCSx19sxgQ4Fr3DzsVBmMF8xqJ/gP2TN2hf8Gw6FjwwktOfJXzM1JlzRn/HSeCB5w+AEQEDH9zgQZiA/vcu8CBMQN+cEzwIE9CbcoAHYQJOztjBgzABx98OgAdhAo6+6QcPwgQcft0HHoQJ6HnVCx6ECeh+eQI8CBPQ9eIYeBAmoOP5EezE1dlG/GC7uGWhFkY2IZMgV0Dbsx7sxLVUg/Hy8nZEhCvANt2NctydrzND/jrhXevUIfyLO3P7xZRX1jLZCTXcnt0nnrwy66N2qOVWaq9Y8soOPrRBCzff7RFHXlnjg1Zo5cbMbjHkldXfby41TLRAC/UTzUUwcqXi8sosySanJWktHUhaoQZL0lq03Gs6pbzVFMEMkNdjqiKYoPKqIpjg8mUjWJXI/xpkEgcjBcgkD0ZilfaprTZSxfsJXasIe6sOfw0AAAAASUVORK5CYII=" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Real changes
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Your choice to give monthly will make a long-lasting
                      impact
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-white why-donate-card p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/000000/approve-and-update.png"
                        alt="approve-and-update"
                      />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Regular updates
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Learn how you are changing lives through our reports
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-white why-donate-card p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/trust--v1.png"
                        alt="trust--v1"
                      />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Trusted giving
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Every beneficiary you support is under the care of
                      GiveAssured nonprofits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Oldmonthly