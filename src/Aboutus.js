import React, { useState } from 'react'
import HoToUse from './API/HowToUse'
const Aboutus = () => {
  const [aboutData, setAboutData] = useState(HoToUse);
  return (
    <>
      <section className='common-section our-services'>
        <div className='container mb-5'>
          <div className='row'>
            <div className='col-12 col-lg-5 our-service-leftside-img'>
              <img src='./images/hero3.jpg' alt='aboutusImg' />

            </div>
            {/* 1 Section right side data */}
            <div className='col-12 col-lg-7 our-service-list'>
              <h3 className='mini-title'>
                --Available @ Google And IOS App Store Only
              </h3>
              <h1 className='main-heading'>How to use the App?</h1>
              {aboutData.map((curElem) => {
                const {id, title, info} = curElem;
                return <>
                  <div className='row our-services-info' key={id}>
                    <div className='col-1 our-services-number'>{id}</div>
                    <div className='col-10 our-services-data'>
                      <h2>{title}</h2>
                      <p className='main-hero-para'>{info}</p>

                    </div>
                  </div>
                </>

              })} 
              <button class="btn btn-style" type="learn more">Learn more</button>


            </div>
          </div>
        </div>
      </section>


      {/* 2nd part of Section  */}
      <section className='common-section our-services our-services-rightside'>
        <div className='container mb-5'>
          <div className='row'>
            
            {/* 1 Section right side data */}
            <div className='col-12 col-lg-7 our-service-rightside-content d-flex justify-content-center align-items-start flex-column'>
              <h3 className='mini-title'>
                --Support in any Language
              </h3>
              <h1 className='main-heading'>World Class supportis <br/> Available 24/7</h1>
              {aboutData.map((curElem) => {
                const {id, title, info} = curElem;
                return <>
                  <div className='row our-services-info' key={id}>
                    <div className='col-1 our-services-number'>{id}</div>
                    <div className='col-10 our-services-data'>
                      <h2>{title}</h2>
                      <p className='main-hero-para'>{info}</p>

                    </div>
                  </div>
                </>

              })} 
              <button class="btn btn-style" type="learn more">Learn more</button>


            </div>
            <div className='col-12 col-lg-5 our-service-rightside-img'>
              <img src='./images/hero2.jpg' alt='aboutusImg' />

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus

