import React from 'react';
import './Banner.css'
import logo1 from '../../images/banner/xbanner.png.pagespeed.ic.Fz8_Hc8pX8.jpg';
import logo2 from '../../images/banner/xbanner2.png.pagespeed.ic.RygwS5iHf6.jpg';
import logo3 from '../../images/banner/3.jpg'
import logo4 from '../../images/banner/4.jpg'



const Banner = () => {
    return (
        <div className="">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button  type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={logo1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-block d-md-block">
                    <h5>Booking Our Hotel</h5>

                        <div className="slider-btn res-btn">
                        <button className="btn btn-1">Booking Now</button>
                            <button className="btn btn-2">Booking Now</button>
                        </div>

                    </div>
                </div>
                <div className="carousel-item">
                    <img src={logo2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-block d-md-block">
                        <h5>Life Is Beautifull</h5>
                      

                        <div className="slider-btn res-btn">
                            <button className="btn btn-1">Booking Now</button>
                            <button className="btn btn-2">Booking Now</button>
                        </div>
                    </div>
                </div>


                <div className="carousel-item">
                    <img src={logo3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-block d-md-block">
                    <h5>Booking Our Hotel</h5>
                        <div className="slider-btn res-btn">

                        <button className="btn btn-1">Booking Now</button>
                            <button className="btn btn-2">Booking Now</button>


                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={logo4} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-block d-md-block">
                        <h5>Booking Our Hotel</h5>

                        <div className="slider-btn res-btn">

                        <button className="btn btn-1">Booking Now</button>
                            <button className="btn btn-2">Booking Now</button>

                        </div>
                    </div>
                </div>




            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    </div>
    );
};

export default Banner;