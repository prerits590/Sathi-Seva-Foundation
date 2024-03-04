import React from 'react'
import './faq.css'

// ---------- ANIMATION  ------------ 

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Faq = () => {
  return (
    <>
    <div className="accordion">
    <h1 className='pb-10 max-md:pt-10  font-medium' data-aos="zoom-in"
      data-aos-duration="800" data-aos-delay="0">Frequently Asked Questions</h1>
    <div className="accordion-item" data-aos="fade-up"
      data-aos-duration="800" data-aos-delay="0" >
        <input type="checkbox" id="accordion1"/>
        <label for="accordion1" className="accordion-item-title"><span className="icon"></span> What is Sathi Sewa Foundation and what does it do?</label>
        <div className="accordion-item-desc">Sathi Sewa Foundation, a non-profit organization, passionately champions local NGOs by elevating their fundraising efforts nationally and internationally. Our mission blends technology support, fostering CSR collaborations, and empowering NGOs to implement impactful initiatives. Together, we create positive change!</div>
    </div>

    <div className="accordion-item" data-aos="fade-up"
      data-aos-duration="800" data-aos-delay="0">
        <input type="checkbox" id="accordion2"/>
        <label for="accordion2" className="accordion-item-title"><span className="icon"></span> How can I contribute to Sathi Sewa Foundation?</label>
        <div className="accordion-item-desc">Contributing to Sathi Sewa Foundation is easy and can be done in multiple ways. You can make a one-time donation through our secure online platform or set up a recurring donation to provide ongoing support. Additionally, we welcome volunteers who are passionate about our cause.</div>
    </div>

    <div className="accordion-item" data-aos="fade-up"
      data-aos-duration="800" data-aos-delay="0">
        <input type="checkbox" id="accordion3"/>
        <label for="accordion3" className="accordion-item-title"><span className="icon"></span>Where does the money donated to Sathi Sewa Foundation go?</label>
        <div className="accordion-item-desc">At Sathi Sewa Foundation, funds directly reach the initiating NGO for their impactful campaigns. Monthly donations go straight to the people in need. Experience the joy of direct and meaningful impact.</div>
    </div>

    <div className="accordion-item" data-aos="fade-up"
      data-aos-duration="800" data-aos-delay="0">
        <input type="checkbox" id="accordion4"/>
        <label for="accordion4" className="accordion-item-title"><span className="icon"></span>How can I partner with Sathi Sewa Foundation to raise donations?</label>
        <div className="accordion-item-desc">Fill the NGO onboarding form - <a className='text-blue-500' href="">Click here</a>, and our team will reach out to you within the next 24 hours for donation partnership</div>
    </div>

    {/* <div className="accordion-item mb-10">
        <input type="checkbox" id="accordion5"/>
        <label for="accordion5" className="accordion-item-title"><span className="icon"></span>Can I organize a fundraising event for Sathi Sewa Foundation?</label>
        <div className="accordion-item-desc">Absolutely! We welcome and appreciate the initiative of individuals or groups organizing fundraising events on our behalf. Visit our "Fundraise for Us" page to find guidelines, resources, and information on how to get started.</div>
    </div> */}

</div>
    </>
  )
}

export default Faq