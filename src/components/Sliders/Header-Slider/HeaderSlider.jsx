import { useEffect, useState } from "react";
import "./headerSlider.css";

// --------- LAPTOP VERSION IMG --------

// --------- MOBILE VERSION IMG --------
import mob1 from "../../../assets/Images/Sliders/Header-slider-img/Mobile/1.webp";
import mob2 from "../../../assets/Images/Sliders/Header-slider-img/Mobile/2.webp";
import mob3 from "../../../assets/Images/Sliders/Header-slider-img/Mobile/3.webp";
import mob4 from "../../../assets/Images/Sliders/Header-slider-img/Mobile/4.webp";
import { getAllHomeCards } from "../../../Pages/Admin Panel/Methods";
import { Link } from "react-router-dom";
const HeaderSlider = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [homeCards, setHomeCards] = useState([]);
  useEffect(() => {
    const getAllCards = async () => {
      setIsLoading(true);
      const cards = await getAllHomeCards();

      setHomeCards(cards);
      setIsLoading(false);
    };
    getAllCards();
  }, []);
  return (
    <>
      {/* <!-- ------------ LAPTOP VERSION SLIDER ------------  --> */}

      <swiper-container
        class="mySwiper laptop-version pt-20"
        space-between="30"
        centered-slides="true"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
      >
        {homeCards.map((card) => (
          <swiper-slide key={card._id}>
            <Link to={card.campaignLink}>
              <img src={card.img} alt="" />
            </Link>
          </swiper-slide>
        ))}
      </swiper-container>

      {/* <!-- ------------ MOBILE VERSION  SLIDER ------------  --> */}
      <swiper-container
        class="mySwiper mobile-version pt-20"
        space-between="30"
        centered-slides="true"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
      >
        <swiper-slide>
          <img src={mob1} alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src={mob2} alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src={mob3} alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src={mob4} alt="" />
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default HeaderSlider;
