import React from 'react';
import './preloader.css';
import preloader from '../../assets/Images/extra/preloader.gif';

const Preloader = () => {
    
  
  return (
    <>
      {/* <!-- ------------ PRELOADER ---------  --> */}
      <div className="preloader">
        <img src={preloader} alt="Loading..." />
      </div>
    </>
  );
};

export default Preloader;
