import { useEffect } from "react";
import { useAuth } from "../../ContentAPI/UserContext";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../../Utils/Helper";

const WithAuth = ({ children }) => {
  const { currentUser, requiredRole, userLogout } = useAuth();
  const navigate = useNavigate();
  const tokenObj = localStorage.getItem("token");

  useEffect(() => {
    const checkRoleAndRedirect = async () => {
      try {
        if (!tokenObj) {
          navigate("/login");
        } else {
          const obj1 = localStorage.getItem("token");
          const obj2 = JSON.parse(obj1);
          const { type, token, role } = obj2;
          const decodedToken = await verifyToken(token);
          console.log(role, decodedToken.data.role);

          if (role && decodedToken.data.role !== role) {
            console.log("Unauthorized access");
            userLogout();
          }
        }
      } catch (error) {
        console.error("Error verifying token:", error.message);
        userLogout();
      }
    };

    checkRoleAndRedirect();
  }, [tokenObj, requiredRole, navigate]);

  return <>{children}</>;
};

export default WithAuth;
