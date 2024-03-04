import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  addHomeCard,
  addNgo,
  deleteCard,
  deleteNgo,
  getAllActiveCampaigns,
  getAllActiveMonthlyCampaigns,
  getAllCampaigns,
  getAllHomeCards,
  getAllImg,
  getAllMessages,
  getAllNgos,
  getAllUsers,
  monthlyCampaignImg,
  removeCampaign,
  startFundraiser,
  startMonthlyFundraiser,
} from "./Methods";
import { Link } from "react-router-dom";
import Share from "../../components/Share-icon/Share";
import { handleFileChangeMethod } from "./Utils";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminPanel = () => {
  const [selectedCategory, setSelectedCategory] = useState("ngoOnBoarding");
  const [loading, setLoading] = useState(false);
  const [ngos, setNgos] = useState([]);
  const [fundraisers, setfundraisers] = useState([]);
  const [monthlyFundraisers, setMonthlyFundraisers] = useState([]);
  const [fundraisersHistory, setFundraisersHistory] = useState([]);
  const [fundraisersImg, setFundraisersImg] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [homeCards, setHomeCards] = useState([]);
  const [fStory, setFStory] = useState("");

  const [showSuggestions, setShowSuggestions] = useState(false);
  console.log(fStory);
  const renderContent = () => {
    switch (selectedCategory) {
      case "ngoOnBoarding":
        return renderNgoOnBoarding();
      case "donationCreate":
        return renderDonationCreate();
      case "monthlyCampain":
        return renderMonthlyCampain();
      case "updateMonthlyCampain":
        return renderUpdateMonthlyCampain();
      case "listOfNgo":
        return renderListOfNgo();
      case "onGoingCampain":
        return renderOnGoingCampain();
      case "campainHistory":
        return renderCampaignHistory();
      case "monthlyCampReport":
        return renderMonthlyCampReport();
      case "userDashboard":
        return renderUserDashboard();
      case "email":
        return renderEmail();
      case "homeCard":
        return renderHomeCard();

      default:
        return null;
    }
  };
  const obj1 = localStorage.getItem("token");
  const objString = JSON.parse(obj1);
  const token = objString.token;

  const [ngoForm, setNgoForm] = useState({
    ngoName: "",
    ngoLogo: null,
    ngoLocation: "",
    description: "",
    ngoAct: null,
    sector: null,
    form80G: null,
    form12A: null,
  });
  const [donationForm, setDonationForm] = useState({
    ngoName: "",
    cardImg: null,
    title: "",
    amountRaise: null,
    videoLink: "",
    story: "",
  });
  const [monthlyDonationForm, setMonthlyDonationForm] = useState({
    ngoName: "",
    cardImg: null,
    title: "",
    amountRaise: null,
    ngoSector: "",
    description: "",
    about: "",
    sliderImg1: "",
    sliderImg2: "",
    sliderImg3: "",
  });
  const [homeCardForm, setHomeCardForm] = useState({
    campaignLink: "",
    img: null,
  });

  const [campaignImg, setCampaignImg] = useState({
    category: "",
    image: "",
  });
  const handleSuggestionClick = (ngo) => {
    setDonationForm({
      ...donationForm,
      ngoName: ngo.ngoName,
    });
    setShowSuggestions(false);
  };
  console.log(donationForm);
  const handleInputChange = (field, value) => {
    setNgoForm({
      ...ngoForm,
      [field]: value,
    });
  };
  const handleInputChangeHomeCard = (field, value) => {
    setHomeCardForm({
      ...homeCardForm,
      [field]: value,
    });
  };
  console.log(homeCardForm);
  const handleFileChangeHomeCard = async (field, file) => {
    try {
      setLoading(true);
      const result = await handleFileChangeMethod(file, "homeCard");

      if (result.success) {
        setHomeCardForm({
          ...homeCardForm,
          [field]: result.data,
        });
        toast.success("File uploaded successfully!");
      } else {
        console.error("Error uploading file:", result.error);
        toast.error("Error uploading file");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Unexpected error");
    } finally {
      setLoading(false);
    }
  };
  const handleInputChangeCampaign = (field, value) => {
    setDonationForm({
      ...donationForm,
      [field]: value,
    });
    if (value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  const handleInputChangeMonthlyCampaign = (field, value) => {
    setMonthlyDonationForm({
      ...monthlyDonationForm,
      [field]: value,
    });
  };
  const handleInputChangeCampaignImg = (field, value) => {
    setCampaignImg({
      ...campaignImg,
      [field]: value,
    });
  };
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
      ["image"],
    ],
  };

  const handleFileChange = async (field, file) => {
    try {
      setLoading(true);
      const result = await handleFileChangeMethod(file, "ngoDocuments");

      if (result.success) {
        setNgoForm({
          ...ngoForm,
          [field]: result.data,
        });
        toast.success("File uploaded successfully!");
      } else {
        console.error("Error uploading file:", result.error);
        toast.error("Error uploading file");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Unexpected error");
    } finally {
      setLoading(false);
    }
  };
  const handleFileChangeImg = async (field, file) => {
    try {
      setLoading(true);
      const result = await handleFileChangeMethod(file, "campaignImg");

      if (result.success) {
        setCampaignImg({
          ...campaignImg,
          [field]: result.data,
        });
        toast.success("File uploaded successfully!");
      } else {
        console.error("Error uploading file:", result.error);
        toast.error("Error uploading file");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Unexpected error");
    } finally {
      setLoading(false);
    }
  };
  const handleFileChangeCampaign = async (field, file) => {
    try {
      setLoading(true);
      const result = await handleFileChangeMethod(file, "campaignDocuments");

      if (result.success) {
        setDonationForm({
          ...donationForm,
          [field]: result.data,
        });
        toast.success("File uploaded successfully!");
      } else {
        console.error("Error uploading file:", result.error);
        toast.error("Error uploading file");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Unexpected error");
    } finally {
      setLoading(false);
    }
  };
  console.log(allUsers);
  const handleFileChangeMonthlyCampaign = async (field, file) => {
    try {
      setLoading(true);
      const result = await handleFileChangeMethod(
        file,
        "monthlyCampaignDocuments"
      );

      if (result.success) {
        setMonthlyDonationForm({
          ...monthlyDonationForm,
          [field]: result.data,
        });
        toast.success("File uploaded successfully!");
      } else {
        console.error("Error uploading file:", result.error);
        toast.error("Error uploading file");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Unexpected error");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addNgo(ngoForm, token);

      toast.success("NGO added successfully!");
    } catch (error) {
      console.error("Error adding NGO:", error);
      toast.error("Error adding NGO");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitHomeCard = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addHomeCard(token, homeCardForm);

      toast.success("Card added successfully!");
    } catch (error) {
      console.error("Error adding Card:", error);
      toast.error("Error adding Card");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitCampaign = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setDonationForm({
        ...donationForm,
        story: fStory,
      });
      await startFundraiser(donationForm, token);

      toast.success("Fundraiser added successfully!");
    } catch (error) {
      console.error("Error adding Fundraiser:", error);
      toast.error("Error adding Fundraiser");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitCampaignImg = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await monthlyCampaignImg(campaignImg, token);

      toast.success("Fundraiser Image added successfully!");
    } catch (error) {
      console.error("Error adding Fundraiser Image:", error);
      toast.error("Error adding Fundraiser Image");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitMonthlyCampaign = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await startMonthlyFundraiser(monthlyDonationForm, token);

      toast.success("Monthly fundraiser added successfully!");
    } catch (error) {
      console.error("Error adding Fundraiser:", error);
      toast.error("Error adding Fundraiser");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const ngosData = await getAllNgos(token);
        setNgos(ngosData);
        const fundraisersData = await getAllActiveCampaigns();
        setfundraisers(fundraisersData);
        const monthlyFundraisersData = await getAllActiveMonthlyCampaigns();
        setMonthlyFundraisers(monthlyFundraisersData);
        const fundraiserHistory = await getAllCampaigns(token);
        setFundraisersHistory(fundraiserHistory);
        const allUsersData = await getAllUsers(token);
        setAllUsers(allUsersData);
        const getAllCampaignImgs = await getAllImg(token);
        setFundraisersImg(getAllCampaignImgs);
        const allMessages = await getAllMessages(token);
        setMessages(allMessages);
        const allHomeCards = await getAllHomeCards();
        setHomeCards(allHomeCards);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NGOs:", error);
      }
    };
    fetchData();
  }, []);
  console.log(homeCards);
  const sortedNgos = [...ngos].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
  const sortedFundraisers = [...fundraisers].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
  const sortedMonthlyFundraisers = [...monthlyFundraisers].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
  const sortedFundraisersHistory = [...fundraisersHistory].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
  const sortedUsers = [...allUsers].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
  const sortedImgs = [...fundraisersImg].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
  const sortedMessages = [...messages].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });
  const deleteFundraiser = async (fundraiserId) => {
    try {
      await removeCampaign(token, fundraiserId);

      toast.success("Fundraiser deleted successfully!");
    } catch (error) {
      console.error("Error deleting Fundraiser:", error);
      toast.error("Error deleting Fundraiser");
    }
  };
  const deleteHomeCard = async (cardId) => {
    try {
      await deleteCard(token, cardId);

      toast.success("Card deleted successfully!");
    } catch (error) {
      console.error("Error deleting Card:", error);
      toast.error("Error deleting Card");
    }
  };
  const handleDeleteNgo = async (ngoId) => {
    try {
      await deleteNgo(token, ngoId);

      toast.success("NGO deleted successfully!");
    } catch (error) {
      console.error("Error deleting NGO:", error);
      toast.error("Error deleting NGO");
    }
  };
  const renderNgoOnBoarding = () => {
    return (
      <div className="flex w-full mx-auto justify-center">
        {/* --- ENROLL NGO CONTENT -----  */}
        <div className="container-enroll-form">
          <div className="title mb-10">
            Enroll your{" "}
            <span className="text-[#e72129] font-medium font-medium">NGO</span>
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
                <span className="details">NGO logo</span>
                <input
                  type="file"
                  placeholder="logo"
                  required
                  onChange={(e) =>
                    handleFileChange("ngoLogo", e.target.files[0])
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">NGO Location</span>
                <input
                  type="text"
                  placeholder="Madhya Pradesh, India"
                  required
                  onChange={(e) =>
                    handleInputChange("ngoLocation", e.target.value)
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">NGO Description</span>
                <input
                  type="text"
                  placeholder="Our ngo mission is.."
                  required
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </div>

              <div className="input__box">
                <div className="gender">
                  <span className="details mb-4">Choose NGO act available</span>
                  <input
                    type="radio"
                    name="gender"
                    id="radio_1"
                    value="80G"
                    onChange={(e) =>
                      handleInputChange("ngoAct", e.target.value)
                    }
                  />
                  <input
                    type="radio"
                    name="gender"
                    id="radio_2"
                    value="12A"
                    onChange={(e) =>
                      handleInputChange("ngoAct", e.target.value)
                    }
                  />
                  <input
                    type="radio"
                    name="gender"
                    id="radio_3"
                    value="FCRA"
                    onChange={(e) =>
                      handleInputChange("ngoAct", e.target.value)
                    }
                  />

                  <div className="category">
                    <label htmlFor="radio_1">
                      <span className="dot one"></span>
                      <span>80G</span>
                    </label>
                    <label htmlFor="radio_2">
                      <span className="dot two"></span>
                      <span>12A</span>
                    </label>
                    <label htmlFor="radio_3">
                      <span className="dot three"></span>
                      <span>FCRA</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="input__box">
                <div className="ngo-sector">
                  <span className="details">Choose NGO working sector</span>
                  <div>
                    <select
                      name="sector"
                      id="sector"
                      onChange={(e) =>
                        handleInputChange("sector", e.target.value)
                      }
                    >
                      <option value="education" disabled selected>
                        Choose NGO sector
                      </option>
                      <option value="education">Education</option>
                      <option value="health">Health</option>
                      <option value="environment">Environment</option>
                      <option value="food-nutrition">Food & Nutrition</option>
                      <option value="human-rights">Human Rights</option>
                      <option value="livelihood">Livelihood</option>
                    </select>
                  </div>
                </div>
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
                <button
                  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                  onClick={handleSubmit}
                >
                  {loading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  const renderDonationCreate = () => {
    return (
      <div className="flex w-full mx-auto justify-center">
        {/* --- ENROLL NGO CONTENT -----  */}
        <div className="container-enroll-form">
          <div className="title mb-10">
            Create <span className="text-[#e72129] font-medium">Donation</span>
          </div>
          <form action="#">
            <div className="user__details">
              <div className="input__box">
                <span className="details">NGO Name</span>
                <input
                  type="text"
                  placeholder="E.g: Yuva foundation"
                  required
                  value={donationForm.ngoName}
                  onChange={(e) =>
                    handleInputChangeCampaign("ngoName", e.target.value)
                  }
                />
                {showSuggestions && (
                  <div className="suggestions">
                    {ngos
                      .filter((ngo) =>
                        ngo.ngoName
                          .toLowerCase()
                          .includes(donationForm.ngoName.toLowerCase())
                      )
                      .map((ngo) => (
                        <div
                          key={ngo._id}
                          className="suggestion "
                          onClick={() => handleSuggestionClick(ngo)}
                        >
                          <span className="cursor-pointer">{ngo.ngoName}</span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              <div className="input__box">
                <span className="details">Card Image</span>
                <input
                  type="file"
                  placeholder="Card Image"
                  required
                  onChange={(e) =>
                    handleFileChangeCampaign("cardImg", e.target.files[0])
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Donation Title</span>
                <input
                  type="text"
                  placeholder="Celebrate your birthday with..."
                  required
                  onChange={(e) =>
                    handleInputChangeCampaign("title", e.target.value)
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Amount Raised</span>
                <input
                  type="text"
                  placeholder="40,500"
                  required
                  onChange={(e) =>
                    handleInputChangeCampaign("amountRaise", e.target.value)
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Video Link (Optional)</span>
                <input
                  type="text"
                  placeholder="Attach youtube video link.."
                  required
                  onChange={(e) =>
                    handleInputChangeCampaign("videoLink", e.target.value)
                  }
                />
              </div>
              <div>
                <ReactQuill
                  theme="snow"
                  value={fStory}
                  modules={modules}
                  onChange={setFStory}
                />
              </div>
            </div>
            <div className="button">
              <div className="flex justify-center">
                <button
                  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                  onClick={handleSubmitCampaign}
                >
                  {loading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
          {/* <TextEditor /> */}
        </div>
      </div>
    );
  };
  const renderMonthlyCampain = () => {
    return (
      <div className="flex w-full mx-auto justify-center">
        {/* --- ENROLL NGO CONTENT -----  */}
        <div className="container-enroll-form">
          <div className="title mb-10">
            Create{" "}
            <span className="text-[#e72129] font-medium">Monthly Campain</span>
          </div>
          <form action="#">
            <div className="user__details">
              <div className="input__box">
                <span className="details">NGO Name</span>
                <input
                  type="text"
                  placeholder="E.g: Yuva foundation"
                  required
                  onChange={(e) =>
                    handleInputChangeMonthlyCampaign("ngoName", e.target.value)
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Card Image</span>
                <input
                  type="file"
                  placeholder="Card Image"
                  required
                  onChange={(e) =>
                    handleFileChangeMonthlyCampaign(
                      "cardImg",
                      e.target.files[0]
                    )
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Donation Title</span>
                <input
                  type="text"
                  placeholder="Celebrate your birthday with..."
                  required
                  onChange={(e) =>
                    handleInputChangeMonthlyCampaign("title", e.target.value)
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Amount Raised</span>
                <input
                  type="text"
                  placeholder="40,500"
                  required
                  onChange={(e) =>
                    handleInputChangeMonthlyCampaign(
                      "amountRaise",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Description</span>
                <input
                  type="text"
                  placeholder="Write a short description..."
                  required
                  onChange={(e) =>
                    handleInputChangeMonthlyCampaign(
                      "description",
                      e.target.value
                    )
                  }
                />
              </div>{" "}
              <div className="input__box">
                <span className="details">Slider Image 1</span>
                <input
                  type="file"
                  placeholder="Slider Image 1"
                  required
                  onChange={(e) =>
                    handleFileChangeMonthlyCampaign(
                      "sliderImg1",
                      e.target.files[0]
                    )
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Slider Image 2</span>
                <input
                  type="file"
                  placeholder="Slider Image 2"
                  required
                  onChange={(e) =>
                    handleFileChangeMonthlyCampaign(
                      "sliderImg2",
                      e.target.files[0]
                    )
                  }
                />
              </div>
              <div className="input__box">
                <span className="details">Slider Image 3</span>
                <input
                  type="file"
                  placeholder="Slider Image 3"
                  required
                  onChange={(e) =>
                    handleFileChangeMonthlyCampaign(
                      "sliderImg3",
                      e.target.files[0]
                    )
                  }
                />
              </div>
              <div className="input__box">
                <div className="ngo-sector">
                  <span className="details">Choose NGO working sector</span>
                  <div>
                    <select
                      name="sector"
                      id="sector"
                      onChange={(e) =>
                        handleInputChangeMonthlyCampaign(
                          "ngoSector",
                          e.target.value
                        )
                      }
                    >
                      <option value="education" disabled selected>
                        Choose NGO sector
                      </option>
                      <option value="education">Education</option>
                      <option value="health">Health</option>
                      <option value="environment">Environment</option>
                      <option value="food-nutrition">Food & Nutrition</option>
                      <option value="human-rights">Human Rights</option>
                      <option value="livelihood">Livelihood</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="input__box">
                <span className="details">About</span>
                <textarea
                  type="text"
                  className="h-[250px] w-full"
                  placeholder="Write about the campaign..."
                  required
                  onChange={(e) =>
                    handleInputChangeMonthlyCampaign("about", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="button">
              <div className="flex justify-center">
                <button
                  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                  onClick={handleSubmitMonthlyCampaign}
                >
                  {loading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  const renderUpdateMonthlyCampain = () => {
    return (
      <div className="w-full mx-auto justify-center flex">
        {/* --- ENROLL NGO CONTENT -----  */}
        <div className="container-enroll-form">
          <div className="title mb-10">
            Update
            <span className="text-[#e72129] font-medium"> Monthly Campain</span>
          </div>
          <form action="#">
            <div className="user__details">
              <div className="input__box">
                <span className="details">Attach Proof of donation</span>
                <input
                  type="file"
                  required
                  onChange={(e) =>
                    handleFileChangeImg("image", e.target.files[0])
                  }
                />
              </div>

              <div className="input__box">
                <div className="ngo-sector">
                  <span className="details">Choose Monthly campain</span>
                  <div>
                    <select
                      name="sector"
                      id="sector"
                      onChange={(e) =>
                        handleInputChangeCampaignImg("category", e.target.value)
                      }
                    >
                      <option value="education" disabled selected>
                        Choose monthly campaign
                      </option>
                      <option value="education">Education</option>
                      <option value="health">Health</option>
                      <option value="environment">Environment</option>
                      <option value="food-nutrition">Food & Nutrition</option>
                      <option value="human-rights">Human Rights</option>
                      <option value="livelihood">Livelihood</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="button">
              <div className="flex justify-center">
                <button
                  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                  onClick={handleSubmitCampaignImg}
                >
                  {loading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="border grid grid-cols-10 flex items-center justify-center">
          {sortedImgs.map((img) => (
            <div key={img._id} className="col-span-2">
              <img className="w-full" src={img.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  const renderListOfNgo = () => {
    return (
      <div className="">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="border p-4 w-full">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-[20%] w-[60%] md:mb-0 mb-6 flex-shrink-0 items-center justify-center flex flex-col">
                    <Skeleton width={200} height={200} />
                  </div>
                  <div className="md:flex-grow px-4">
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
          : sortedNgos.map((ngo) => (
              <div key={ngo._id} className="border">
                <div className=" p-4">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-[20%]  w-[60%] md:mb-0 mb-6 flex-shrink-0 items-center justify-center flex flex-col">
                      <img
                        alt="logo"
                        className="sm:w-[80%] w-[100%] h-auto object-cover object-center"
                        src={ngo.ngoLogo}
                      />
                    </div>
                    <div className="md:flex-grow">
                      <h3 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        {ngo.ngoName}
                      </h3>

                      <p className="leading-relaxed flex gap-2 items-center">
                        <ion-icon name="location-outline"></ion-icon>
                        <p className="mt-1 font-normal">{ngo.ngoLocation}</p>
                      </p>
                      <p className="leading-relaxed font-normal flex gap-2 items-center">
                        <p className="font-normal">{ngo.ngoAct},</p>
                        <p className="font-normal">{ngo.sector}</p>
                      </p>

                      <p className="leading-relaxed font-normal mt-2">
                        {ngo.description}
                      </p>
                      <p className="flex gap-2 items-center font-normal text-blue-500 ">
                        <a
                          href={ngo.form80G}
                          className="underline text-blue-500"
                        >
                          View 80G,
                        </a>
                        <a
                          href={ngo.form12A}
                          className="underline text-blue-500"
                        >
                          View 12A{" "}
                        </a>
                      </p>

                      <button
                        className="noselect delete-btn mt-4"
                        onClick={() => {
                          handleDeleteNgo(ngo._id);
                        }}
                      >
                        <span className="text">Delete</span>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    );
  };
  const renderOnGoingCampain = () => {
    return (
      <>
        <div className="flex flex-wrap w-full">
          <div className="flex-wrap flex border">
            {loading ? (
              <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className=" w-full rounded-lg">
                    <div className="py-2 px-2 flex justify-center flex-col">
                      <div className=" md:mb-0 mb-4 flex justify-center ">
                        <Skeleton width={300} height={200} />
                      </div>
                      <div className="md:flex-grow px-6   ">
                        <div className=" flex justify-center items-center flex-col">
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                        </div>
                        <div className=" py-4 flex justify-center">
                          <Skeleton width={300} height={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              sortedFundraisers.map((fundraiser) => (
                <div key={fundraiser._id} className="">
                  <div className="py-4 donation-slider-card-3 w-[350px] filterDiv medicine">
                    <div className="h-full flex flex-col items-center text-center">
                      <div className="relative w-full">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                          src={fundraiser.cardImg}
                        />
                        <div className="absolute right-0 bottom-0 px-4">
                          <Share />
                        </div>
                        <div className="top-4 left-0 tax-benift-text ">
                          <p>Tax Benefit Available</p>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <p className="mb-4">{fundraiser.title}</p>
                        <div className="progress-loader">
                          <div className="progress"></div>
                        </div>

                        <p className="text-base text-black ">
                          <ion-icon name="cube-outline"></ion-icon> &nbsp;
                          Target: 0 left out of {fundraiser.amountRaise}{" "}
                        </p>

                        <a href="#demo-modal">
                          <button className="donate-btn">
                            View all details
                          </button>
                        </a>

                        <button
                          className="end-btn"
                          onClick={() => deleteFundraiser(fundraiser._id)}
                        >
                          End Donation
                        </button>

                        {/* ------------- MODAL DIV ( VIEW ALL DETAILS ) ------------- */}
                        <div className="modal-section">
                          <div id="demo-modal" className="modal">
                            <div className="modal__content">
                              <div className="flex flex-col gap-6 p-4">
                                <p className="text-[40px] font-medium text-black  bg-blue-300  border-black border px-4 py-4">
                                  Total Amount raised - ₹31,51,000
                                </p>
                                <p className="text-[40px] font-medium text-black bg-red-300 border-black border px-4 py-4">
                                  Amount received - ₹20,32,000
                                </p>
                                <p className="text-[40px] font-medium text-black bg-yellow-300 border-black border px-4 py-4">
                                  Total Donors - 510
                                </p>
                                <div className="text-[20px] font-medium text-black flex items-start gap-2 flex-col border-black border px-4 py-4">
                                  <div className="font-medium ">
                                    Top Donors -
                                  </div>

                                  <ul className="flex flex-col flex-start px-2  items-start">
                                    <li>1. Prerit Sharma - ₹21,000</li>
                                    <li>2. Piyush Agrawal - ₹15,000</li>
                                    <li>3. Urvashi Jain - ₹12,600</li>
                                  </ul>
                                </div>
                              </div>

                              <a href="#" className="modal__close">
                                &times;
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </>
    );
  };
  const renderCampaignHistory = () => {
    return (
      <>
        <div className="flex flex-wrap w-full">
          <div className="flex-wrap w-full   flex border">
            {loading ? (
              <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className=" w-full rounded-lg">
                    <div className="py-2 px-2 flex justify-center flex-col">
                      <div className=" md:mb-0 mb-4 flex justify-center ">
                        <Skeleton width={300} height={200} />
                      </div>
                      <div className="md:flex-grow px-6   ">
                        <div className=" flex justify-center items-center flex-col">
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                        </div>
                        <div className=" py-4 flex justify-center">
                          <Skeleton width={300} height={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              sortedFundraisersHistory.map((fundraiser) => (
                <div key={fundraiser._id} className="">
                  <div className="py-4 donation-slider-card-1 w-[350px] filterDiv medicine">
                    <div className="h-full flex flex-col items-center text-center">
                      <div className="relative w-full">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                          src={fundraiser.cardImg}
                        />
                        <div className="absolute right-0 bottom-0 px-4">
                          <Share />
                        </div>
                        <div className="top-4 left-0 tax-benift-text ">
                          <p>Tax Benefit Available</p>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <p className="mb-4">{fundraiser.title}</p>
                        <div className="progress-loader">
                          <div className="progress"></div>
                        </div>

                        <p className="text-base text-black ">
                          <ion-icon name="cube-outline"></ion-icon> &nbsp;
                          Target: 0 left out of {fundraiser.amountRaise}{" "}
                        </p>

                        <Link to="/monthly-donate">
                          <button className="donate-btn">
                            View all details
                          </button>
                        </Link>

                        <div className="modal-section">
                          <div id="demo-modal" className="modal">
                            <div className="modal__content">
                              <div className="flex flex-col gap-6 p-4">
                                <p className="text-[40px] font-medium text-black  bg-blue-300  border-black border px-4 py-4">
                                  Total Amount raised - ₹31,51,000
                                </p>
                                <p className="text-[40px] font-medium text-black bg-red-300 border-black border px-4 py-4">
                                  Amount received - ₹20,32,000
                                </p>
                                <p className="text-[40px] font-medium text-black bg-yellow-300 border-black border px-4 py-4">
                                  Total Donors - 510
                                </p>

                                <div className="text-[20px] font-medium text-black flex items-start gap-2 flex-col border-black border px-4 py-4">
                                  <div className="font-medium ">
                                    Top Donors -
                                  </div>

                                  <ul className="flex flex-col flex-start px-2  items-start">
                                    <li>1. Prerit Sharma - ₹21,000</li>
                                    <li>2. Piyush Agrawal - ₹15,000</li>
                                    <li>3. Urvashi Jain - ₹12,600</li>
                                  </ul>
                                </div>
                              </div>

                              <a href="#" className="modal__close">
                                &times;
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="modal__close">
                      &times;
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </>
    );
  };
  const renderMonthlyCampReport = () => {
    return (
      <>
        <div className="flex flex-wrap w-full">
          <div className="flex-wrap flex border">
            {loading ? (
              <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className=" w-full rounded-lg">
                    <div className="py-2 px-2 flex justify-center flex-col">
                      <div className=" md:mb-0 mb-4 flex justify-center ">
                        <Skeleton width={300} height={200} />
                      </div>
                      <div className="md:flex-grow px-6   ">
                        <div className=" flex justify-center items-center flex-col">
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                          <Skeleton width={300} height={20} />
                        </div>
                        <div className=" py-4 flex justify-center">
                          <Skeleton width={300} height={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              sortedMonthlyFundraisers.map((fundraiser) => (
                <div key={fundraiser._id} className="">
                  <div className="py-4 donation-slider-card-1 w-[350px] filterDiv medicine">
                    <div className="h-full flex flex-col items-center text-center">
                      <div className="relative w-full">
                        <img
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                          src={fundraiser.cardImg}
                        />
                        <div className="absolute right-0 bottom-0 px-4">
                          <Share />
                        </div>
                        <div className="top-4 left-0 tax-benift-text ">
                          <p>Tax Benefit Available</p>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <p className="mb-4">{fundraiser.title}</p>
                        <div className="progress-loader">
                          <div className="progress"></div>
                        </div>

                        <p className="text-base text-black ">
                          <ion-icon name="cube-outline"></ion-icon> &nbsp;
                          Target: 0 left out of {fundraiser.amountRaise}{" "}
                        </p>

                        <Link to="/monthly-donate">
                          <button className="donate-btn">
                            View all details
                          </button>
                        </Link>

                        <button
                          className="end-btn"
                          onClick={() => deleteFundraiser(fundraiser._id)}
                        >
                          End Donation
                        </button>

                        <div className="modal-section">
                          <div id="demo-modal" className="modal">
                            <div className="modal__content">
                              <div className="flex flex-col gap-6 p-4">
                                <p className="text-[40px] font-medium text-black  bg-blue-300  border-black border px-4 py-4">
                                  Total Amount raised - ₹31,51,000
                                </p>
                                <p className="text-[40px] font-medium text-black bg-red-300 border-black border px-4 py-4">
                                  Amount received - ₹20,32,000
                                </p>
                                <p className="text-[40px] font-medium text-black bg-yellow-300 border-black border px-4 py-4">
                                  Total Donors - 510
                                </p>

                                <div className="text-[20px] font-medium text-black flex items-start gap-2 flex-col border-black border px-4 py-4">
                                  <div className="font-medium ">
                                    Top Donors -
                                  </div>

                                  <ul className="flex flex-col flex-start px-2  items-start">
                                    <li>1. Prerit Sharma - ₹21,000</li>
                                    <li>2. Piyush Agrawal - ₹15,000</li>
                                    <li>3. Urvashi Jain - ₹12,600</li>
                                  </ul>
                                </div>
                              </div>

                              <a href="#" className="modal__close">
                                &times;
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="modal__close">
                      &times;
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </>
    );
  };
  const renderUserDashboard = () => {
    return (
      <div className="max-w-screen-lg mx-auto overflow-x-auto font-normal">
        <table className="border-collapse border">
          <thead className="bg-red-500 text-white">
            <tr className="text-sm ">
              <th className="border border-black px-4 py-2 font-bold">
                User ID
              </th>
              <th className="border border-black px-4 py-2 font-bold">Name</th>
              <th className="border border-black px-4 py-2 font-bold">Email</th>
              <th className="border border-black px-4 py-2 font-bold">
                Address
              </th>
              <th className="border border-black px-4 py-2 font-bold">State</th>
              <th className="border border-black px-4 py-2 font-bold">
                Pincode
              </th>
              <th className="border border-black px-4 py-2 font-bold">
                isUpdated
              </th>
              <th className="border border-black px-4 py-2 font-bold">
                isGoogleAuth
              </th>
              <th className="border border-black px-4 py-2 font-bold">Role</th>
            </tr>
          </thead>
          <tbody className="bg-red-100 text-xs">
            {sortedUsers.map((user) => (
              <tr key={user._id} className="text-sm">
                <td className="border border-black px-4 py-2 font-normal">
                  {user._id}
                </td>
                <td className="border border-black px-4 py-2 font-normal">
                  {user.name}
                </td>
                <td className="border border-black px-4 py-2 font-normal">
                  {user.email}
                </td>
                <td className="border border-black px-4 py-2 font-normal">
                  {user.address}
                </td>
                <td className="border border-black px-4 py-2 font-normal">
                  {user.state}
                </td>
                <td className="border border-black px-4 py-2 font-normal">
                  {user.pincode}
                </td>
                <td className="border border-black px-4 py-2 font-normal">
                  {user.isUpdated ? "true" : "false"}
                </td>
                <td className="border border-black px-4 py-2 font-normal">
                  {user.isGoogleAuth ? "true" : "false"}
                </td>
                <td className="border border-black px-4 py-2 font-normal">
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  // const renderEmail = () => {
  //   return (
  //     <div>
  //       <div className="p-4">
  //         {loading
  //           ? Array.from({ length: 5 }).map((_, index) => (
  //               <div key={index} className=" p-4 w-full">
  //                 <div className="py-8 flex flex-wrap md:flex-nowrap">
  //                   <div className="md:flex-grow px-4">
  //                     <div className="">
  //                       <Skeleton width={100} height={20} />
  //                       <Skeleton width={150} height={20} />
  //                       <Skeleton width={150} height={20} />
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))
  //           : sortedMessages.map((message) => (
  //               <div
  //                 key={message._id}
  //                 className="py-8 flex flex-wrap md:flex-nowrap border px-4 my-2"
  //               >
  //                 <div className="md:flex-grow">
  //                   <h3 className="text-2xl font-medium text-gray-900 title-font mb-2">
  //                     {message.name}
  //                   </h3>

  //                   <p className="leading-relaxed flex gap-2 items-center">
  //                     <ion-icon name="mail"></ion-icon>
  //                     <p className="mt-1">{message.email}</p>
  //                   </p>
  //                   <p className="leading-relaxed flex gap-2 items-center">
  //                     <ion-icon name="chatbox-ellipses"></ion-icon>
  //                     <p className="mt-1">{message.message}</p>
  //                   </p>
  //                 </div>
  //               </div>
  //             ))}
  //       </div>
  //     </div>
  //   );
  // };
  const renderHomeCard = () => {
    return (
      <div className="px-4 py-2">
        <form action="#">
          <div className="user__details">
            <div className="input__box">
              <span className="details font-semibold text-2xl">
                Campaign Link
              </span>
              <input
                type="text"
                placeholder="E.g: https://example.com"
                required
                onChange={(e) =>
                  handleInputChangeHomeCard("campaignLink", e.target.value)
                }
              />
            </div>
          </div>
          <div className="input__box font-normal">
            <span className="details font-normal">Card Image</span> &nbsp;
            <input
              type="file"
              placeholder="logo"
              required
              onChange={(e) =>
                handleFileChangeHomeCard("img", e.target.files[0])
              }
            />
          </div>
          <div className="button">
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                onClick={handleSubmitHomeCard}
              >
                {loading ? "Uploading..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
        <div className="border">
          {homeCards.map((card) => (
            <div key={card._id} className="border">
              <div className=" p-4">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-[20%]  w-[60%] md:mb-0 mb-6 flex-shrink-0 items-center justify-center flex flex-col">
                    <img
                      alt="logo"
                      className="sm:w-[80%] w-[100%] h-auto object-cover object-center"
                      src={card.img}
                    />
                  </div>
                  <div className="md:flex-grow">
                    <h3 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      <a href={card.campaignLink}>{card.campaignLink}</a>
                    </h3>

                    <button
                      className="noselect delete-btn mt-4"
                      onClick={() => {
                        deleteHomeCard(card._id);
                      }}
                    >
                      <span className="text">Delete</span>
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="pt-14">
        {/* <div className="flex text-center w-full mx-auto justify-center bg-[#ebedee] pt-10">
          <h1 className="text-[30px] font-medium">Admin Panel </h1>
        </div> */}
        <div className="cat-underline bg-[#ebedee] pt-6 "></div>

        <div className="flex max-md:flex-wrap  ">
          <div className="w-[35vw] h-[100vh] overflow-y-scroll">
            <div className="bg-white pl-2 my-2 rounded-2xl sticky top-24 border ">
              <div className="lg:px-3 md:px-1 px-0  py-2 category-list  mx-auto">
                <ul className="flex flex-col mx-auto max-md:items-center ">
                  <li className="py-4 ">
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div className=" ">
                        <div>
                          <button
                            onClick={() => {
                              setSelectedCategory("ngoOnBoarding");
                            }}
                            className={
                              selectedCategory === "ngoOnBoarding"
                                ? "active-btn"
                                : ""
                            }
                          >
                            Ngo onboarding
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="cat-underline pt-2 "></div>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("donationCreate");
                          }}
                          className={
                            selectedCategory === "donationCreate"
                              ? "active-btn"
                              : ""
                          }
                        >
                          Create Fundraiser
                        </button>
                      </div>
                    </div>
                  </li>
                  <div className="cat-underline pt-2 "></div>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("monthlyCampain");
                          }}
                          className={
                            selectedCategory === "monthlyCampain"
                              ? "active-btn"
                              : ""
                          }
                        >
                          Create monthly campain
                        </button>
                      </div>
                    </div>
                  </li>
                  <div className="cat-underline pt-2 "></div>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("updateMonthlyCampain");
                          }}
                          className={
                            selectedCategory === "updateMonthlyCampain"
                              ? "active-btn"
                              : ""
                          }
                        >
                          Update monthly campain
                        </button>
                      </div>
                    </div>
                  </li>
                  <div className="cat-underline pt-2 "></div>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("listOfNgo");
                          }}
                          className={
                            selectedCategory === "listOfNgo" ? "active-btn" : ""
                          }
                        >
                          List Of Ngos
                        </button>
                      </div>
                    </div>
                  </li>

                  <div className="cat-underline pt-2 "></div>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-[24px] truncate">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("onGoingCampain");
                          }}
                          className={
                            selectedCategory === "onGoingCampain"
                              ? "active-btn"
                              : ""
                          }
                        >
                          Ongoing Campaigns
                        </button>
                      </div>
                    </div>
                  </li>
                  <div className="cat-underline pt-2 "></div>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("campainHistory");
                          }}
                          className={
                            selectedCategory === "campainHistory"
                              ? "active-btn"
                              : ""
                          }
                        >
                          Campains History
                        </button>
                      </div>
                    </div>
                  </li>
                  <div className="cat-underline pt-2 "></div>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("monthlyCampReport");
                          }}
                          className={
                            selectedCategory === "monthlyCampReport"
                              ? "active-btn"
                              : ""
                          }
                        >
                          Monthly Campains Report
                        </button>
                      </div>
                    </div>
                  </li>
                  <div className="cat-underline pt-2 "></div>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("userDashboard");
                          }}
                          className={
                            selectedCategory === "userDashboard"
                              ? "active-btn"
                              : ""
                          }
                        >
                          User Dashboard
                        </button>
                      </div>
                    </div>
                  </li>

                  <div className="cat-underline pt-2 "></div>
                  <li className="py-4">
                    {" "}
                    <div className="flex items-center md:text-sm lg:text-lg text-2xl truncate">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedCategory("homeCard");
                          }}
                          className={
                            selectedCategory === "homeCard" ? "active-btn" : ""
                          }
                        >
                          Home Card
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-9 md:col-span-8 pt-10 -red-500 flex space-between w-full h-[100vh] items-center overflow-y-scroll">
            <div className="w-full pt-4 w-full h-[100vh]">
              <div className="">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminPanel;
