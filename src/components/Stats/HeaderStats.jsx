import React from 'react'
import stats1 from '../../assets/Images/Stats/Header-stats-img/1.png'
import stats2 from '../../assets/Images/Stats/Header-stats-img/2.png'
import stats3 from '../../assets/Images/Stats/Header-stats-img/3.png'
import stats4 from '../../assets/Images/Stats/Header-stats-img/4.png'

const HeaderStats = () => {
  return (
    <>
          <section className="text-gray-600 body-font">
                <div className="container px-5 pt-24 mx-auto">
                  <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2 ">
                      <img className=" mx-auto" src={stats1} alt="" width="100px"/>
                      <h2 className="title-font font-semibold sm:text-4xl text-2xl text-[#e72129]">₹5 Lakhs +</h2>
                      <p className="leading-relaxed">Worth Donation</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                      <img className=" mx-auto" src={stats2} alt=""/>
                      <h2 className="title-font font-semibold sm:text-4xl text-[24px] text-[#e72129] ">5K+</h2>
                      <p className="leading-relaxed">Lives Impacted</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                      <img className=" mx-auto" src={stats3} alt=""/>
                      <h2 className="title-font font-semibold sm:text-4xl text-[24px] text-[#e72129] ">2,000+</h2>
                      <p className="leading-relaxed">Unique Donors</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                      <img className="mx-auto" src={stats4} alt=""/>
                      <h2 className="title-font font-semibold sm:text-4xl text-[24px] text-[#e72129] ">10+</h2>
                      <p className="leading-relaxed">Successful Campains</p>
                    </div>
                  </div>
                </div>
              </section>
    </>
  )
}

export default HeaderStats