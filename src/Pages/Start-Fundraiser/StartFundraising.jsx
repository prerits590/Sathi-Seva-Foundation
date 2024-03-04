import { useEffect, useState } from "react";
import "./startfundraising.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../libs/firebase";
import { addNgo } from "../Admin Panel/Methods";
// import { storage } from "../../libs/firebase";

const StartFundraising = () => {
  const [selectedCategory, setSelectedCategory] = useState("enrollNgo");
  const obj1 = localStorage.getItem("token");
  const objString = JSON.parse(obj1);
  const token = objString.token;

  const [ngoForm, setNgoForm] = useState({
    ngoName: "",
    contactPersonName: "",
    email: "",
    number: "",
    form80G: null,
    form12A: null,
  });
  const handleInputChange = (field, value) => {
    setNgoForm({
      ...ngoForm,
      [field]: value,
    });
  };

  const handleFileChange = async (field, file) => {
    try {
      if (!file) {
        return;
      }

      const storageRef = ref(storage, `ngoDocuments/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload progress:", progress);
      });

      await uploadTask;

      const downloadURL = await getDownloadURL(storageRef);

      setNgoForm({
        ...ngoForm,
        [field]: downloadURL,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "enrollNgo":
        return renderEnrollNgo();
      case "startFundraiser":
        return renderStartFundraiser();
      case "complete":
        return renderComplete();
      default:
        return null;
    }
  };
  console.log(token);
  const handleSubmit = (e) => {
    e.preventDefault();
    addNgo(ngoForm, token);
  };

  //   ---------- CONTENT ------------

  const renderEnrollNgo = () => {
    return (
      <div className="flex w-full mx-auto justify-center">
        {/* --- ENROLL NGO CONTENT -----  */}
        <div className="container-enroll-form">
          <div className="title mb-10">
            Enroll your <span className="text-[#e72129]">NGO</span>
          </div>
          <form action="#">
            <div className="user__details">
              <div className="input__box">
                <span className="details">NGO Name</span>
                <input
                  type="text"
                  placeholder="E.g: Yuva foundation"
                  required
                  onChange={(e) => handleInputChange("ngoName", e.target.value)}
                />
              </div>
              <div className="input__box">
                <span className="details">Contact person name</span>
                <input
                  type="text"
                  placeholder="Prerit Sharma"
                  required
                  onChange={(e) =>
                    handleInputChange("contactPersonName", e.target.value)
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="preritsharmaji@gmail.com"
                  required
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="input__box">
                <span className="details">Mobile Number</span>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="+91 012-345-6789"
                  required
                  onChange={(e) => handleInputChange("number", e.target.value)}
                />
              </div>
              <div className="input__box">
                <span className="details">Upload your 80G</span>
                <input
                  type="file"
                  required
                  onChange={(e) =>
                    handleFileChange("form80G", e.target.files[0])
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Upload your 12A</span>
                <input
                  type="file"
                  required
                  onChange={(e) =>
                    handleFileChange("form12A", e.target.files[0])
                  }
                />
              </div>
            </div>

            <div className="button">
              <div className="flex justify-center">
                <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Previous
                </button>
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Next
                </button>
                <button
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  const renderStartFundraiser = () => {
    return (
      <div className="flex w-full mx-auto justify-center">
        {/* --- ENROLL NGO CONTENT -----  */}
        <div className="container-enroll-form">
          <div className="title mb-10">
            Start <span className="text-[#e72129]">Fundraising</span>
          </div>
          <form action="#">
            <div className="user__details">
              <div className="input__box">
                <span className="details">Title</span>
                <input
                  type="text"
                  placeholder="Help children, donate now.."
                  required
                />
              </div>
              <div className="input__box">
                <span className="details">Amount Raised</span>
                <input type="number" placeholder="₹40,250" required />
              </div>

              <div className="input__box">
                <span className="details">Attach video link (Optional)</span>
                <input type="link" placeholder="Add youtube link" />
              </div>
              <div className="input__box">
                <span className="details">Story related Img 1</span>
                <input type="file" />
              </div>
              <div className="input__box">
                <span className="details">Story related Img 2</span>
                <input type="file" />
              </div>
            </div>

            <div className="button">
              <div className="flex justify-center">
                <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Previous
                </button>
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  // const renderComplete = () => {
  //   return (
  //     <div className="flex w-full mx-auto justify-center">
  //       {/* --- HOVER CARD 1 -----  */}
  //       <div>Hello complete</div>
  //     </div>
  //   );
  // };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex flex-wrap mb-20 w-full justify-center">
            <li
              onClick={() => {
                setSelectedCategory("enrollNgo");
              }}
              className={
                selectedCategory === "enrollNgo"
                  ? "active + px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200  tracking-wider"
                  : "px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200  tracking-wider"
              }
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              STEP 1
            </li>

            <li
              onClick={() => {
                setSelectedCategory("startFundraiser");
              }}
              className={
                selectedCategory === "startFundraiser"
                  ? "active + sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200  tracking-wider"
                  : "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200  tracking-wider"
              }
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              STEP 2
            </li>

            {/* <li              
              onClick={() => {
                setSelectedCategory("complete");
              }}
              className={selectedCategory === "complete" ? "active + sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200  tracking-wider" : "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200  tracking-wider"}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
               strokeLinejoin="round"
              strokeWidth="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
              STEP 3
            </li>
             */}
          </div>

          {/* ---------- RENDER CONTENT ----------  */}
          <div className="w-full ">
            <div className="">{renderContent()}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartFundraising;
