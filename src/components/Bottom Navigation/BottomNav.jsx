import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./bottomnav.css";

const BottomNav = () => {
  var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
  navItems.forEach(function (e, i) {
    e.addEventListener("click", function (e) {
      navItems.forEach(function (e2, i2) {
        e2.classList.remove("mobile-bottom-nav__item--active");
      });
      this.classList.add("mobile-bottom-nav__item--active");
    });
  });
 

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


  return (
    <>
      <section className={visible ? "visible" : "hidden"}>
        <div className="bottom-nav-container flex sm:hidden block">
          <Link class="nav-item" to="/">
            <div className="flex flex-col items-center">
              <ion-icon name="home-outline"></ion-icon>
              <p>Home</p>
            </div>
          </Link>

          <Link class="nav-item" to="/allcampains">
            <div className="flex flex-col items-center">
              <ion-icon name="calendar-outline"></ion-icon>
              <p>Monthly</p>
            </div>
          </Link>

          <Link class="nav-item" to="/allfundraiser">
            <div className="flex flex-col items-center">
              <ion-icon name="gift-outline"></ion-icon>
              <p>Fundraiser</p>
            </div>
          </Link>

          <Link class="nav-item" to="/discover-ngo">
            <div className="flex flex-col items-center">
              <ion-icon name="navigate-outline"></ion-icon>
              <p>NGO</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BottomNav;
