// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import './controlslider.css';

const Controlslider = () => {

    return (
    <>
      {/* <!-- CONTROL BUTTONS - LAPTOP VERSION --> */}
      <div className='laptop-version mt-10 max-w-screen-xl overflow-x-hidden mx-auto' >
      <Swiper className="mySwiper overflow-hidden" 
          autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
          
          slidesPerView={7}
        spaceBetween={30}            
        
        modules={[Autoplay]}
        >
          
          {/* <!-- ---------- 1 ---------  --> */}
          <SwiperSlide>
            <button className="donation-slider-filter-btn active" onClick="filterSelection('all')"><ion-icon name="gift" ></ion-icon> All</button>                     
          </SwiperSlide>

          {/* <!-- ---------- 2 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('hunger')"><ion-icon name="fast-food"></ion-icon> Hunger</button>                     
          </SwiperSlide>                  

          {/* <!-- ---------- 3 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('animal')"><ion-icon name="paw"></ion-icon> Animals</button>                     
          </SwiperSlide>

          {/* <!-- ---------- 4 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('children')"><ion-icon name="accessibility"></ion-icon>Children</button>                    
          </SwiperSlide>                  

          {/* <!-- ---------- 5 ---------  --> */}

          <SwiperSlide>
          <button className="donation-slider-filter-btn" onClick="filterSelection('education')"><ion-icon name="school"></ion-icon> Education</button>
          </SwiperSlide>                    

          {/* <!-- ---------- 6 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('medicine')"><ion-icon name="medkit"></ion-icon> Emergency</button>
          </SwiperSlide>

          {/* <!-- ---------- 7 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('children')"><ion-icon name="walk"></ion-icon>Disability</button>                    
          </SwiperSlide>                  



      
          </Swiper>
      </div>

      {/* <!-- CONTROL BUTTONS - MOBILE VERSION --> */}
        
        <div  className="donation-slider-filter-mobile" id="myBtnContainerMobile">                    
          <Swiper className="mySwiper overflow-hidden" 
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          
          slidesPerView={3}
        spaceBetween={40}            
        
        modules={[Autoplay]}
        >
          
          {/* <!-- ---------- 1 ---------  --> */}
          <SwiperSlide>
            <button className="donation-slider-filter-btn active" onClick="filterSelection('all')"><ion-icon name="gift"></ion-icon> All</button>                     
          </SwiperSlide>

          {/* <!-- ---------- 2 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('hunger')"><ion-icon name="fast-food"></ion-icon> Hunger</button>                     
          </SwiperSlide>                  

          {/* <!-- ---------- 3 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('animal')"><ion-icon name="paw"></ion-icon> Animals</button>                     
          </SwiperSlide>

          {/* <!-- ---------- 4 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('children')"><ion-icon name="accessibility"></ion-icon>Children</button>                    
          </SwiperSlide>                  

          {/* <!-- ---------- 5 ---------  --> */}

          <SwiperSlide>
          <button className="donation-slider-filter-btn" onClick="filterSelection('education')"><ion-icon name="school"></ion-icon> Education</button>
          </SwiperSlide>                    

          {/* <!-- ---------- 6 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('medicine')"><ion-icon name="medkit"></ion-icon> Medicine</button>
          </SwiperSlide>

          {/* <!-- ---------- 7 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('children')"><ion-icon name="walk"></ion-icon>Disability</button>                    
          </SwiperSlide>                  

          {/* <!-- ---------- 8 ---------  --> */}

          <SwiperSlide>
          <button className="donation-slider-filter-btn" onClick="filterSelection('education')"><ion-icon name="fitness"></ion-icon> Emergency</button>
          </SwiperSlide>                    

          {/* <!-- ---------- 9 ---------  --> */}

          <SwiperSlide>
            <button className="donation-slider-filter-btn" onClick="filterSelection('medicine')"><ion-icon name="home"></ion-icon> Temple</button>
          </SwiperSlide>

      
          </Swiper>
         </div>

    </>
  );
};

export default Controlslider;
