import axios from "axios";

export const updateUserProfile = async (authToken, userId, userForm) => {
  const apiUrl = `https://ssf-backend.vercel.app/api/user/updateProfile/${userId}`;
  try {
    const response = await axios.patch(apiUrl, userForm, {
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
