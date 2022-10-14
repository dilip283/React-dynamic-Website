import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
                            <h1 className='display-2'>
                                Online Payment made <br /> Easy For you.
                            </h1>
                            <p className='main-hero-para'>
                                lorem ipsum, dolor sit lorem ipsum, dolor sit lorem ipsum, dolor sit
                                lorem ipsum, dolor sitlorem ipsum, dolor sit, lorem ipsum, dolor sit
                                lorem ipsum, dolor sitlorem ipsum, dolor sit lorem ipsum, dolor sit,
                                lorem ipsum, dolor sit
                            </p>
                            
                            <h3>Get early access for you</h3>
                            <div className='input-group mt-3'>
                                <input type='text' className='rounded-pill w-75 p-2 me-3 border form-control-text' placeholder="Enter your email"></input>
                                <div className='input-group-text btn-style get-it-now'>Get it Now</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images'>
                            <img src='./images/hero1.jpg'
                                alt='heroimg'
                                className='img-fluid'
                            />
                            <img src='./images/hero4.jpg'
                                alt='heroimg4'
                                className='img-fluid main-hero-img2'
                            />
                        </div>
                    </div>
                    
                </section>
            </header>
        </>
    )
}

export default Header
