import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import ScrollToTopOnPageChange from "../../components/Scroll to top/ScrollToTop";
import { useAuth } from "../../ContentAPI/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const {
    userSignup,
    userData,
    currentUser,
    updateCurrentUserSignup,
    loginFlag,
  } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userSignup(username, email, password);

      if (response.errorMessage) {
        toast.error(response.errorMessage);
      } else {
        updateCurrentUserSignup(response);
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
  console.log(userData);
  return (
    <>
      <ScrollToTopOnPageChange />

      <div className="signup-container">
        <div className="card">
          <div className="card_title">
            <h1>Create Account</h1>
          </div>
          <div className="form">
            <form action="/register" method="post">
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Name"
                  className="font-medium"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
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
                <button
                  className="signupbtn mb-2 font-medium"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
              <br />
              <div>
                <span className="font-normal">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium">
                    Login
                  </Link>
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

            {/* <button className="signupwithgoogle">
              <img
                width="30px"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
              Sign Up with Google
            </button> */}

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
          {/* <!-- <div className="card_terms">
                  <input type="checkbox" name="" id="terms"> <span>I have read and agree to the <a href="">Terms of Service</a></span>
              </div> --> */}
        </div>
      </div>
    </>
  );
};

export default Signup;
