import React, { useEffect, useState } from 'react';
import Details from './Details';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://warm-reaches-84753.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services);
    return (
        <div className="container" >
            
        <div className="mt-3 text-center">
        <h5 style={{"fontSize":"50px","color":"#E31C25"}} >VIEW OUR SERVICES</h5>
        </div>
        
        <div className="row">
        

       

        {
           

           services.map((service,index)=> <Details key={service._id} service={service}></Details>
                )
            

        }
         </div>
        
    </div>
      
    );
};

export default Services;