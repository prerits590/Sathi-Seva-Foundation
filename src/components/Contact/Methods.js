import axios from "axios";

export const addMessage = async (messageData, authToken) => {
  const apiUrl = "http://localhost:5000/api/admin/contact/addMessage";

  try {
    const response = await axios.post(apiUrl, messageData, {
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
