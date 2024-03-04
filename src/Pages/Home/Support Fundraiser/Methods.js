import axios from "axios";

export const getCampaignById = async (authToken, campaignId) => {
  const apiUrl = `https://ssf-backend.vercel.app/api/admin/fundraiser/getCampaignById/${campaignId}`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Unexpected status code:", response.status);
      throw new Error("Unexpected status code");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
