import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../images/logo1.png'
import './Footer.css'
const Footer = () => {
return (
<div className="footer-container mt-5">

<Row>
    <Col xs={12} md={3}>
        <div className="contact d-flex justify-content-center align-items-center me-3">
            <div>
                <img src={logo} alt="" />
                <h5>+1800-208-6835</h5>
            </div>
            <div className="tel-icon text-center">
                <i className="fas fa-phone ms-5"></i>
            </div>




        </div>


    </Col>
    <Col xs={12} md={3}>
        <div className="link mx-5">
            <h5>Support & Help</h5>
            <ul>
                <li>Dashboard</li>
                <li>Booking</li>
                <li>About Us</li>
                <li>MUSCLE BUILDER</li>
                <li>Blog</li>
                <li>DB Activity</li>
                <li>Aminities</li>
            </ul>
        </div>

    </Col>
    <Col xs={12} md={3}>
        <div className="link mx-5">
            <h5>Popular Services </h5>
            <ul>
                <li>Our Hotels</li>
                <li>Contact Us</li>
                <li>Mini-Suite</li>
                <li>Luxury Room</li>
                <li>About Us</li>
                <li>Master Suite</li>
                <li>Normal Room</li>
            </ul>
        </div>
    </Col>
    <Col xs={12} md={3}>
        <div className="link mx-5">
            <h5 className="">Address</h5>
            <ul>
                <li>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark : Next To Airport

                   </li>
                   <li> PHONE: +01 1245 2541</li>

            </ul>

        </div>
    </Col>
</Row>
<p style={{"backgroundColor":"#2A2B33","color":"white"}} className="text-center">Copyright 2021 IMRAN HASAN All Rights Reserved.</p>
</div>

);
};

export default Footer;