import React from "react";
import "./howitworks.css";
import Faq from "../../components/Faq/Faq";

const HowItWorks = () => {
  return (
    <>
      {/* --------- HEADING SECTION ----------- */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-32 mx-auto">
          <div class="flex flex-col text-center w-full ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              How it <span className="text-[#e72129] font-medium">Works</span>
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed font-normal text-base max-md:px-6 px-32">
              Whether you’re an NGO or a donor, all you need to do is follow a
              few simple steps to make a difference
            </p>
          </div>
        </div>
      </section>

      {/* -------------- STEPS FLOWCHART ----------------  */}
      <div class="container px-10">
        <div class="row">
          <div class="col-md-12">
            <div class="road-map-main">
                {/* ------ STEP - 1 -------  */}
              <div class="road-map-wrapper">
                <div class="road-map-circle">
                  <span class="road-map-circle-text flex items-center justify-center text-center">
                    Step 1
                  </span>
                </div>
                <div class="road-map-card">
                  <h4 class="card-head">Start A Campaign</h4>
                  <p class="card-text">
                    An NGO/Individual submits a request to start a campaign. The
                    request is reviewed by the team.
                  </p>

                  <a class="text-white inline-flex font-normal items-center pt-2">
                    Start a campain
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

                {/* ------ STEP - 2 -------  */}
              <div class="road-map-wrapper">
                <div class="road-map-circle">
                  <span class="road-map-circle-text flex items-center justify-center text-center">
                    Step 2
                  </span>
                </div>
                <div class="road-map-card">
                  <h4 class="card-head">Set Up Campaign</h4>
                  <p class="card-text">
                    If approved, the NGO/individual will receive a call from one
                    of our campaign managers within one week to set up the
                    campaign.
                  </p>
                </div>
              </div>

                {/* ------ STEP - 3 -------  */}
              <div class="road-map-wrapper mt-[0.5px]">
                <div class="road-map-circle">
                  <span class="road-map-circle-text flex items-center justify-center text-center">
                    Step 3
                  </span>
                </div>
                <div class="road-map-card">
                  <h4 class="card-head">Campaign Page Liven</h4>
                  <p class="card-text">
                  The fundraiser page is made live, allowing donors to donate towards the products listed as per the NGO/individuals requirements.
                  </p>

                  <a class="text-white font-normal inline-flex items-center pt-2">
                    View campains
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

                {/* ------ STEP - 4 -------  */}
              <div class="road-map-wrapper">
                <div class="road-map-circle">
                  <span class="road-map-circle-text flex items-center justify-center text-center">
                    Step 4
                  </span>
                </div>
                <div class="road-map-card">
                  <h4 class="card-head">Funds Raised</h4>
                  <p class="card-text">
                  Once a considerable amount of products have been donated, the products are dispatched by our team.Products are delivered directly to NGO/Individuals.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ------------------- FAQS ---------------------  */}
      <Faq/>

    </>
  );
};

export default HowItWorks;
