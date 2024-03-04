import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser, fetchUserById, userSignup } from "../Utils/Helper";
import toast from "react-hot-toast";
export const AuthContext = createContext({ currentUser: null });

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [loginFlag, setloginFlag] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const navigate = useNavigate();

  const updateCurrentUserSignup = ({ token, userInfo }) => {
    setCurrentUser(userInfo.email);
    const obj = { type: "jwt", token: token, role: userInfo.role };
    localStorage.setItem("token", JSON.stringify(obj));
    localStorage.setItem("userId", userInfo._id);
    setloginFlag(true);
  };
  const updateCurrentUserLogin = ({ token, userInfo }) => {
    console.log(userInfo);
    setCurrentUser(userInfo.email);
    const obj = { type: "jwt", token: token, role: userInfo.role };
    localStorage.setItem("token", JSON.stringify(obj));
    localStorage.setItem("userId", userInfo._id);
    setloginFlag(true);
    console.log(obj);
  };

  const userLogout = () => {
    setCurrentUser(null);
    setUserData({});
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
    setloginFlag(false);
    // setRequiredRole(null);
    toast.success("Logout Successful!", {
      duration: 3000,
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const obj1 = localStorage.getItem("token");
          const userId = localStorage.getItem("userId");
          const objString = JSON.parse(obj1);
          if (objString.type === "jwt") {
            console.log(userId);
            const response = await fetchUserById(userId);
            if (response) {
              setUserData(response);
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, [currentUser]);
  useEffect(() => {
    const populateUserData = async () => {
      const obj1 = localStorage.getItem("token");
      const objString = JSON.parse(obj1);
      const token = objString ? objString.token : null;
      setUserRole(objString.role);
      const userId = localStorage.getItem("userId");
      if (!currentUser && token) {
        const response = await fetchUserById(userId);
        if (response) {
          setUserData(response);
          setCurrentUser(response.email);
        }
      }
    };
    populateUserData();
  }, [currentUser]);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userData,
        loginFlag,
        userRole,
        userSignup,
        userLogout,
        fetchUser,
        updateCurrentUserSignup,
        updateCurrentUserLogin,
        setUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
