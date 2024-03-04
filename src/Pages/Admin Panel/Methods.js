import axios from "axios";

export const addNgo = async (ngoData, authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/ngo/onboardNgo";

  try {
    const response = await axios.post(apiUrl, ngoData, {
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
export const getAllNgos = async (authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/ngo/getAllNgos";
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

export const startFundraiser = async (donationData, authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/fundraiser/startFundraiser";

  try {
    const response = await axios.post(apiUrl, donationData, {
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
export const getAllCampaigns = async (authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/fundraiser/getAllCampaigns";
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
export const getAllActiveCampaigns = async () => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/fundraiser/getActiveCampaigns";
  try {
    const response = await axios.get(apiUrl);

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

export const deleteNgo = async (authToken, ngoId) => {
  const apiUrl = `https://ssf-backend.vercel.app/api/admin/ngo/deleteNgo/${ngoId}`;
  try {
    const response = await axios.delete(apiUrl, {
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

export const removeCampaign = async (authToken, campaignId) => {
  const apiUrl = `https://ssf-backend.vercel.app/api/admin/fundraiser/removeCampaign/${campaignId}`;
  try {
    const response = await axios.patch(apiUrl, null, {
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
export const getAllUsers = async (authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/adminGen/getAllUsers";
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

export const startMonthlyFundraiser = async (donationData, authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/monthlyFundraiser/startMonthlyFundraiser";

  try {
    const response = await axios.post(apiUrl, donationData, {
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
export const getAllActiveMonthlyCampaigns = async () => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/monthlyFundraiser/getActiveMonthlyCampaigns";
  try {
    const response = await axios.get(apiUrl);

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
export const monthlyCampaignImg = async (campaignImg, authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/fundraiserImg/monthlyCampaignImg";

  try {
    const response = await axios.post(apiUrl, campaignImg, {
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
export const getAllImg = async (authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/fundraiserImg/getAllImg";

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
export const getAllMessages = async (authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/contact/getAllMessages";

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
export const getMonthlyCampaignById = async (campaignId) => {
  const apiUrl = `https://ssf-backend.vercel.app/api/admin/monthlyFundraiser/getMonthlyCampaignById/${campaignId}`;
  try {
    const response = await axios.get(apiUrl);

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
export const addHomeCard = async (authToken, homeCardForm) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/homeCard/addHomeCard";

  try {
    const response = await axios.post(apiUrl, homeCardForm, {
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
export const getAllHomeCards = async (authToken) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/admin/homeCard/getAllHomeCards";

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
export const deleteCard = async (authToken, cardId) => {
  const apiUrl = `https://ssf-backend.vercel.app/api/admin/homeCard/deleteCard/${cardId}`;
  try {
    const response = await axios.delete(apiUrl, {
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
