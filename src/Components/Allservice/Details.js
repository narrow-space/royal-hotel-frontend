import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = (props) => {
    const{name,description,img,price,_id,index}=props.service
    return (
          <div className="col-md-4 g-4">
              
  <div className="col">
    <div className="card h-100 text-center">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-title">{}</p>
        <h4 className="card-text">${price}</h4>
       <Link to={`/order/${_id}`}> <button   className="btn btn-warning">Booking Now</button></Link>
      </div>
      
    </div>
  </div>
  
</div>
        
  
    );
};

export default Details;