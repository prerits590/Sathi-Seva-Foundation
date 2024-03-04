import { useState } from "react";
import "./TopDonors.css";
export default function TopDonors() {
  const [donorSection, setDonorSection] = useState("top");
  const renderSection = () => {
    if (donorSection == "top") {
      return (
        <>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>{" "}
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>{" "}
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>{" "}
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Martha Sandeep</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;1400
              </span>
            </div>
          </div>
        </>
      );
    } else if (donorSection === "recent") {
      return (
        <>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
          <div className=" sm:col-span-2 col-span-8 flex justify-between px-4 items-center py-4">
            <div className="">
              <span className="text-gray-600 text-lg font-normal">Shagun Mishra</span>
            </div>
            <div className="">
              <span className="text-green-500 font-bold text-lg font-normal">
                &#8377;64000
              </span>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <section className=" sm:px-10 ">
        <div className="">
          <div className=" sm:px-5 px-4 py-6">
            <span className="px-5 sm:px-0 font-semibold text-2xl">
              Our Donors
            </span>
          </div>
          <div className="">
            <div className="px-4 flex sm:justify-start justify-center ">
              <div className="flex border rounded-lg">
                <div className="">
                  <button
                    onClick={() => {
                      setDonorSection("top");
                    }}
                    className={`font-semibold sm:text-md text-sm  px-10 py-2 rounded-lg ${
                      donorSection === "top" ? "top-donor-active" : "top-donor"
                    }`}
                  >
                    Top Donors
                  </button>
                </div>
                <div className="">
                  <button
                    onClick={() => {
                      setDonorSection("recent");
                    }}
                    className={`font-semibold sm:text-md text-sm  px-10 py-2 rounded-lg ${
                      donorSection === "recent"
                        ? "top-donor-active"
                        : "top-donor"
                    }`}
                  >
                    Recent Donors
                  </button>
                </div>
              </div>
            </div>
            <div className="py-4 sm:px-0 px-6">
              <div className="grid grid-cols-8">{renderSection()}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
