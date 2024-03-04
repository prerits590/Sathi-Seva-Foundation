import headerImg from "../../assets/Images/extra/header-img-more-campains.png";
import BottomNav from "../../components/Bottom Navigation/BottomNav";
import ExploreCampaigns from "../../components/ExploreCampaigns/ExploreCampaigns";

const Allcampains = () => {
  return (
    <>
      {/* ------------- BOTTOM NAV ------------  */}
      <BottomNav />
      
      {/* <!-- ------------ HEADER SECTION -----------  --> */}
      <section className="img-header-bg max-md:pt-6">
        <img src={headerImg} alt="" />
        <hr />
      </section>

      {/* <!-- ----------- OUR CAMPAINS SECTION -----------  --> */}
      <section className="text-gray-600 body-font">
        <div className="mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-2xl text-xl font-bold title-font mb-4 text-[#4461A9] ">
              OUR CAMPAIGNS
            </h1>
            <h1 className="lg:w-2/3 mx-auto text-black font-semibold sm:text-[35px] text-3xl">
              Causes you can support
            </h1>

            <section className="w-full">
              <ExploreCampaigns />
            </section>
          </div>
          {/* <!-- ---------- DONATION SLIDER - BOTH VERSION --------  --> */}
        </div>
      </section>
    </>
  );
};

export default Allcampains;
