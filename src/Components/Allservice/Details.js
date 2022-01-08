import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Details.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease'
});
// 
const Details = (props) => {
    const{name,description,img,price,_id,index,rating}=props.service
    return (
          <div data-aos="zoom-in" className="col-md-4 g-4">
              
  <div className="col">
    <div className=" h-100 ">
      <div className="card-container">
       <div className="box">
         <div className="img-box">
         <img src={img} className="card-img-top" alt="..."/>
         </div>
       </div>
      </div>
      


      <div className="card-body">
        <h5 className="card-title">Name:{name}</h5>
        <p className="card-title">{description.slice(0,100)}</p>
        <h4 className="card-text">${price}</h4>
        <p>Ratings:{rating} <span style={{"color":"orange"}}><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></span> </p>
       <Link to={`/order/${_id}`}> <button   className="btn btn-danger">Booking Now</button></Link>
      </div>
      
    </div>
  </div>
  
</div>
        
  
    );
};

export default Details;