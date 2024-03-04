import axios from "axios";

export const userSignup = async (username, email, password) => {
  const apiUrl = "https://ssf-backend.vercel.app/api/user/signup";
  const postData = {
    name: username,
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(apiUrl, postData);
    console.log(response.data.userInfo);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
export const userLogin = async (email, password) => {
  const apiUrl = "https://ssf-backend.vercel.app/api/user/login";
  const postData = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(apiUrl, postData);

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error.message;
  }
};
export const fetchUser = async (email) => {
  const apiUrl = "https://ssf-backend.vercel.app/api/user/fetchUser";

  try {
    const response = await axios.get(apiUrl, {
      params: { email },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
export const fetchUserById = async (userId) => {
  const apiUrl = "https://ssf-backend.vercel.app/api/user/fetchUserById";

  try {
    const response = await axios.get(apiUrl, {
      params: { userId },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const userSignupGoogle = async (name, email, photoURL) => {
  const apiUrl =
    "https://ssf-backend.vercel.app/api/user/userLoginGoogle";
  const postData = {
    name,
    email,
    photoURL,
  };

  try {
    const response = await axios.post(apiUrl, postData);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};
export const verifyToken = async (token) => {
  try {
    const response = await fetch(
      "https://ssf-backend.vercel.app/api/adminManagement/verifyToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Token verification failed");
    }

    const data = await response.json();
    return data; // Additional information from the token, e.g., user role
  } catch (error) {
    console.error("Error verifying token:", error.message);
    throw error;
  }
};
