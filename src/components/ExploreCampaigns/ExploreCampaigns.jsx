import CampaignsLg from "./CampaignsLg";
import CampaignsSm from "./CampaignsSm";
export default function ExploreCampaigns() {
  return (
    <>
      <section className="sm:hidden block">
        <CampaignsSm />
      </section>
      <section className="sm:block ">
        <CampaignsLg />
      </section>
    </>
  );
}
