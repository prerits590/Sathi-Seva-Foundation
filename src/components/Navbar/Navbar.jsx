import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/Images/extra/logo.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../ContentAPI/UserContext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { userLogout, currentUser, userRole, userData } = useAuth();
  const [loginFlag, setLoginFlag] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
    setIsOpen(!isOpen);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    userLogout();
  };

  useEffect(() => {
    if (currentUser) {
      setLoginFlag(true);
    } else {
      setLoginFlag(false);
    }
  }, [currentUser]);

  const handleProfile = () => {
    setToggleProfile((prev) => !prev);
  };
  // console.log(currentUser);

  // ------------ HIDING NAVBAR ON SCROLL DOWN ------------
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // const cls = visible ? "visible" : "hidden";

  return (
    <>
      {/* <!-- ------------ NAVBAR ---------  --> */}
      <section className={visible ? "visible" : "hidden"}>
        <div className={`nav-wrapper ${isOpen ? "open" : ""}`}>
          <nav>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo Image" />
              </Link>
            </div>
            <div
              className={`hamburger rounded-full overflow-hidden z-4000 ${
                isClicked ? "toggle" : "hamburger"
              }`}
              onClick={handleToggle}
            >
              {currentUser && !isClicked ? (
                <img
                  src={userData.profilePic}
                  alt="some user image"
                  className="w-[3rem] h-[3rem] rounded-full z-2 object-center object-cover"
                />
              ) : (
                <>
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </>
              )}
            </div>
            <ul className={`nav-links text-white ${isOpen ? "open" : ""}`}>
              {userRole === "admin" ? (
                <li>
                  <a href="/admin-panel" className="hover-effect-link">
                    Admin panel
                  </a>
                </li>
              ) : (
                ""
              )}
              <li>
                <a href="/allfundraiser" className="hover-effect-link">
                  Explore campains
                </a>
              </li>
              <li>
                <a href="/csr" className="hover-effect-link">
                  CSR
                </a>
              </li>
              <li>
                <a href="/discover-ngo" className="hover-effect-link">
                  Discover NGOs
                </a>
              </li>
              <li>
                <a href="/allcampains" className="hover-effect-link">
                  Monthly Campains
                </a>
              </li>
              <li>
                <a href="/about" className="hover-effect-link">
                  About
                </a>
              </li>
              {currentUser && (
                <li className="block sm:hidden">
                  <a href="/profile" className="hover-effect-link">
                    Profile
                  </a>
                </li>
              )}
              <li className="block sm:hidden">
                {loginFlag ? (
                  <button onClick={handleLogout} className="login-button">
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="login-button">Login</button>
                  </Link>
                )}
              </li>
              <li>
                <a href="">
                  <button className="start-button">Start a Fundraiser</button>
                </a>
              </li>
              {!currentUser ? (
                <Link className="hidden sm:block" to="/login">
                  <div className="nav-nav">
                    <div onClick={handleProfile} className="profile">
                      <div className="img-box">
                        {currentUser ? (
                          <img
                            src={userData.profilePic}
                            alt="some user image"
                            className=""
                          />
                        ) : (
                          <div className="w-full text-5xl flex items-center sm:text-black text-white">
                            <ion-icon name="reorder-three-outline"></ion-icon>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <li className="bg-transparent hidden sm:block">
                  <div className="nav-nav">
                    <div onClick={handleProfile} className="profile">
                      <div className="img-box">
                        {currentUser ? (
                          <img
                            src={userData.profilePic}
                            alt="some user image"
                            className=""
                          />
                        ) : (
                          <div className="w-full text-5xl flex items-center sm:text-black text-white">
                            <ion-icon name="reorder-three-outline"></ion-icon>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`menu ${toggleProfile ? "active" : ""}`}>
                      <ul>
                        <li>
                          <a href="/profile">
                            <i className="ph-bold ph-user"></i>&nbsp;Profile
                          </a>
                        </li>
                        {loginFlag && (
                          <li className="">
                            <a onClick={handleLogout} className="" href="#">
                              <i className="ph-bold ph-envelope-simple"></i>
                              &nbsp;Logout
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
