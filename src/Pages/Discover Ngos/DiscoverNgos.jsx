import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import "./discoverngo.css";
import Testimonial from "../../components/Testimonial/Testimonial";
import { getAllNgos } from "../Admin Panel/Methods";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BottomNav from "../../components/Bottom Navigation/BottomNav";
const DiscoverNgos = () => {
  const [ngos, setNgos] = useState([]);
  const [ngoCategory, setNgoCategory] = useState("");
  const [filteredNgos, setFilteredNgos] = useState([]);
  const [searchFilteredNgos, setSearchFilteredNgos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    const filteredNgoss = ngos.filter((ngo) => {
      return ngo.ngoName
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setSearchFilteredNgos(filteredNgoss);
  };

  useEffect(() => {
    const getNgos = async () => {
      setLoading(true);
      const ngosData = await getAllNgos();
      setNgos(ngosData);
      setLoading(false);
    };
    getNgos();
  }, []);

  useEffect(() => {
    const filteredByCategory = ngos.filter((ngo) => {
      if (!ngoCategory) {
        return true;
      }
      return ngo.sector === ngoCategory;
    });
    console.log("Filtered NGOs:", filteredByCategory);
    const sortedNgos = [...filteredByCategory].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });

    setFilteredNgos(sortedNgos);
  }, [ngoCategory, ngos]);
  console.log(ngos);

  // Create Ref element.
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["non-profits", "donation", "fundraising", "Education", "NGOs"],

      startDelay: 1000,
      typeSpeed: 100,
      showCursor: false,
      backSpeed: 10,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  console.log(ngoCategory);
  return (
    <>
      {/* <!-- ------------ HEADER SECTION -----------  --> */}
      <section className="fundraiser-header discover-header max-md:p-2">
        <div className="element-ngo max-lg:hidden"></div>
        <div className="element-ngo-2 max-lg:hidden"></div>

        {/* ------- HEADER TEXT -------  */}
        <div className="discover-ngo-header-text max-md:pt-24">
          <p className="font-semibold text-[44px] max-md:text-[30px]">
            Access information about
          </p>
          <div className="h-16">
            <span
              className="text-[44px] max-md:text-[30px] font-semibold "
              ref={el}
            ></span>{" "}
          </div>
          <p className="text-base title-font max-md:px-4 font-medium ">
            Discover 59,000+ NGOs, with daily updates, to gain insights into
            their missions and impact areas.
          </p>
        </div>

        {/* <!-- ------ SEARCH BAR ---  --> */}
        <div className="InputContainer max-md:px-4">
          <div className="wrapper ">
            <div className="searchBar">
              <input
                id="searchQueryInput"
                type="text"
                name="searchQueryInput"
                placeholder="Search"
              />
              <button
                id="searchQuerySubmit"
                type="submit"
                name="searchQuerySubmit"
              >
                <svg style={{ width: "24px" }} viewBox="0 0 24 24">
                  <path
                    fill="#666666"
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="discover-ngo-header-text text-start">
          <p className="font-medium text-base text-gray-600 flex flex-row justify-center pt-10 max-md:pt-8">
            Top Searches : Education, Fundraising, Donate..
          </p>
        </div>
      </section>

      {/* ---------- WORKING SEARCH BAR ----------------  */}
      {/* <div className="border w-full ">
        <div className="border w-full flex justify-center">
          <input
            placeholder="Search NGO..."
            type="text"
            value={searchQuery}
            onChange={(e) => {
              handleSearchChange(e);
            }}
          />
        </div>
        <div className=" p-2">
          <div className="">
            {searchFilteredNgos.length !== ngos.length
              ? searchFilteredNgos.map((ngo) => (
                  <div
                    key={ngo._id}
                    className="py-8 flex flex-wrap md:flex-nowrap"
                  >
                    <div className="md:w-44 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font justify-center flex text-gray-700">
                        <img
                          src={ngo.ngoLogo}
                          alt=""
                          width="50%"
                          className="rounded-full"
                        />
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        {ngo.ngoName}
                      </h2>
                      <p className="leading-relaxed">
                        <ion-icon name="location-outline"></ion-icon>{" "}
                        {ngo.ngoLocation}
                      </p>
                      <p className="leading-relaxed mt-2">{ngo.description}</p>
                      <p>{ngo.sector}</p>
                      <p className="leading-relaxed flex gap-2 items-center">
                        <p>{ngo.ngoAct},</p>
                        <p>{ngo.sector}</p>
                      </p>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div> */}
      {/* ---------- STATS ------------- */}
      <section className="text-gray-600 body-font overflow-x-hidden ">
        <div className="container max-md:px-0 px-5 pt-6 mx-auto">
          <div className="flex justify-center">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full max-md:px-4 px-8 py-6 text-center">
              <h2 className="text-lg sm:text-[35px] text-gray-900 font-medium title-font mb-4">
                36,000+
              </h2>
              <p className="leading-relaxed text-base font-normal mb-4">NGOs</p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full max-md:px-4 px-8 py-6 text-center border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-[35px] text-gray-900 font-medium title-font mb-4">
                30+
              </h2>
              <p className="leading-relaxed text-base font-normal mb-4">Areas of Impact</p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full max-md:px-4 px-8 py-6 text-center border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-[35px] text-gray-900 font-medium title-font mb-4">
                40
              </h2>
              <p className="leading-relaxed text-base font-normal ">
                Information Parameters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EXPLORE NON-PROFIT ----------- */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Explore <span className="text-red-600 font-medium">Non-Profit</span>
            </h1>
          </div>
          <div className="flex flex-col lg:w-[80vw] sm:mx-auto sm:mb-2 -mx-2 bg-[#fae2e2] p-6 rounded-lg">
            <div>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 ">
                Top Sectors
              </h1>
              <p className="border-b-2 border-red-500"></p>

              <br />
            </div>

            <div className="flex max-md:flex-wrap">
              <div className="p-2 sm:w-1/2 w-full sector-card">
                <div className="bg-white rounded flex p-2 h-full items-center">
                  <ion-icon name="school-outline"></ion-icon>
                  <button
                    onClick={() => {
                      setNgoCategory("education");
                    }}
                    className="title-font font-medium"
                  >
                    Education
                  </button>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full sector-card">
                <div className="bg-white rounded flex p-4 h-full items-center">
                  <ion-icon name="leaf-outline"></ion-icon>
                  <button
                    onClick={() => {
                      setNgoCategory("environment");
                    }}
                    className="title-font font-medium"
                  >
                    Environment
                  </button>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full sector-card">
                <div className="bg-white rounded flex p-4 h-full items-center">
                  <ion-icon name="fast-food-outline"></ion-icon>
                  <button
                    onClick={() => {
                      setNgoCategory("nutrition");
                    }}
                    className="title-font font-medium"
                  >
                    Food
                  </button>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full sector-card">
                <div className="bg-white rounded flex p-4 h-full items-center">
                  <ion-icon name="medkit-outline"></ion-icon>
                  <button
                    onClick={() => {
                      setNgoCategory("health");
                    }}
                    className="title-font font-medium"
                  >
                    Health
                  </button>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full sector-card">
                <div className="bg-white rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <button
                    onClick={() => {
                      setNgoCategory("humanRights");
                    }}
                    className="title-font font-medium"
                  >
                    Human Rights
                  </button>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full sector-card">
                <div className="bg-white rounded flex p-4 h-full items-center">
                  <ion-icon name="cash-outline"></ion-icon>
                  <button
                    onClick={() => {
                      setNgoCategory("livelihood");
                    }}
                    className="title-font font-medium"
                  >
                    Livelihood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- MORE SECTOR -------------  */}
      <section className="text-gray-600 body-font max-w-screen-xl overflow-x-hidden mx-auto">
        <div className="container px-5 py-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="border p-4 w-full">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-[20%] w-[60%] md:mb-0 mb-6 flex-shrink-0 items-center justify-center flex flex-col">
                      <Skeleton width={200} height={200} />
                    </div>
                    <div className="md:flex-grow">
                      <Skeleton width={200} height={20} />
                      <Skeleton width={300} height={20} />
                      <Skeleton width={300} height={20} />
                      <Skeleton width={300} height={20} />
                      <Skeleton width={300} height={20} />
                      <Skeleton width={100} height={20} />
                    </div>
                  </div>
                </div>
              ))
            ) : filteredNgos.length === 0 ? (
              <div className=" flex justify-center h-full items-center">
                <span className="font-medium">Nothing to show here...</span>
              </div>
            ) : (
              filteredNgos.map((ngo) => (
                <div
                  key={ngo._id}
                  className="py-8 flex flex-wrap md:flex-nowrap"
                >
                  <div className="md:w-44 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font justify-center flex text-gray-700">
                      <img
                        src={ngo.ngoLogo}
                        alt=""
                        width="50%"
                        className="rounded-full"
                      />
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {ngo.ngoName}
                    </h2>
                    <p className="leading-relaxed font-normal">
                      <ion-icon name="location-outline"></ion-icon>{" "}
                      {ngo.ngoLocation}
                    </p>
                    <p className="leading-relaxed mt-2 font-normal">{ngo.description}</p>
                    <p className="font-normal">{ngo.sector}</p>
                    <p className="leading-relaxed flex gap-2 items-center">
                      <p className="font-normal">{ngo.ngoAct},</p>
                      <p className="font-normal">{ngo.sector}</p>
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ----------- TESTIMONIAL SECTION ----------  */}
      <span>
        <hr />
      </span>
      <Testimonial />

      {/* ------------- BOTTOM NAV ------------  */}
      <BottomNav />
    </>
  );
};

export default DiscoverNgos;
