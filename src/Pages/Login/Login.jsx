import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import ScrollToTopOnPageChange from "../../components/Scroll to top/ScrollToTop";
import { useAuth } from "../../ContentAPI/UserContext";
import { useNavigate } from "react-router-dom";
import { userLogin, userSignupGoogle } from "../../Utils/Helper";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { userData, updateCurrentUserLogin, loginFlag } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userLogin(email, password);

      if (response.errorMessage) {
        toast.error(response.errorMessage);
      } else {
        updateCurrentUserLogin(response);
      }
    } catch (error) {
      toast.error("An error occurred while processing your request.");
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    if (loginFlag) {
      toast.success("Login Successful!", {
        duration: 3000,
      });
      navigate("/");
    }
  }, [loginFlag, navigate]);
  console.log("User Data------->>>>>>>>", userData);

  return (
    <>
      <ScrollToTopOnPageChange />

      <div className="signup-container">
        <div className="card">
          <div className="card_title">
            <h1>Login</h1>
          </div>
          <div className="form">
            <form action="/register" method="post">
              <div>
                {" "}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  className="font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  className="font-medium"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button className="signupbtn mb-2 font-medium" onClick={handleSubmit}>
                  Login
                </button>
              </div>
              <br />
              <div>
                <span className="font-normal">
                  Don't have an account? <Link to="/signup" className="font-normal">Sign up</Link>
                </span>
              </div>
            </form>

            <p>
              <br />
              <b>
                <hr className="text-black" />
              </b>
              <br />
            </p>

            <div className="w-full flex items-center justify-center">
              <GoogleLogin
                theme="filled_blue"
                size="large"
                className="w-full"
                onSuccess={async (credentialResponse) => {
                  console.log("credentialResponse", credentialResponse);
                  const decoded = jwtDecode(credentialResponse.credential);

                  if (decoded) {
                    const response = await userSignupGoogle(
                      decoded.name,
                      decoded.email,
                      decoded.photoURL
                    );
                    console.log(response);
                    if (response) {
                      updateCurrentUserLogin(response.data);

                      navigate("/");
                    }
                  }
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
