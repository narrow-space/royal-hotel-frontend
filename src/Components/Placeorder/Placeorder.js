import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm,} from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { Alert } from 'react-bootstrap';
import Body from '../Body/Body';

const Placeorder = () => {
    const { orderid } = useParams()
    const [service, setService] = useState([])
    const [foundservice, setFoundService] = useState({})
    const {user}=useAuth();
    const [alert,setAlert]=useState('')


    useEffect(() => {

        fetch('https://warm-reaches-84753.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setService(data)
               


            })

    }, [])

    useEffect(() => {
        const s = service.find(sr => sr._id == orderid)
        setFoundService(s)
    }, [service])
    // console.log(foundservice);

    const { register, handleSubmit,reset ,  formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email=user?.email
        data.price=foundservice?.price;
        data.img=foundservice?.img;
        data.description=foundservice?.description;
        data.bookingid=foundservice._id;
        data.status="pending"
        console.log(data)

       fetch('https://warm-reaches-84753.herokuapp.com/addorder',{
           method:'post',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
          
       })
       .then(res=>res.json())
       .then(data=> { 
           console.log(data);
          

        setAlert(data)
        if(data.insertedId){
         
            setTimeout(function() {
                setAlert('')
                }, 700);
        }
       
           
        
        reset()
    
    })
      
      
    };

    


   


    return (
        <>
        <div className="row mt-5">
            <div className="col-md-2">

            </div>

            <div className="col-md-4">
                <div className="container card border border-3">
                  <div className="mt-3">
                      
                  <img className="img-fluid img-thumnail" src={foundservice?.img} alt="" />
                  </div>
                  <h5 className="mt-3 fw-bolder" >Name:{foundservice?.name}</h5>
                    <p className="mt-3">{foundservice?.description?.slice(0,200)}</p>
                    <h5 className="fw-bolder"><i className="fas fa-dollar-sign"></i>:{foundservice?.price}</h5>
                    <p className="fw-bolder">Ratings:<i style={{"color":"orange"}} className="fas fa-star fw-bold"></i>
                    <i style={{"color":"orange"}} className="fas fa-star fw-bold"></i>
                    <i style={{"color":"orange"}} className="fas fa-star-half-alt fw-bold"></i>
                    
                    
                    
                    
                    {foundservice?.rating}</p>

                </div>
            </div>
            <div className="col-md-6 ">
              <h2 className="mx-5">Place Order  <span className="text-danger "> Your Booking </span></h2>
                <div className="w-50 mx-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        { alert.insertedId &&
                <Alert variant="success" >Data Added Successfully</Alert>

            }
                        <input className="form-control my-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        {/* <input className="form-control my-3" {...register("email")} placeholder="email" /> */}
                        <input className="form-control my-3" type="number"  {...register("number")} placeholder="Number" />
                        <input className="form-control my-3" {...register("adress")} placeholder="adress" />

                        {/* <input value={user?.email}  className="form-control my-3" {...register("bookingid")} placeholder="email" /> */}

                        <input  className="btn btn-primary w-100" type="submit" value="Place Order Your booking " />
                        
                    </form>

                </div>
            </div>

           
        </div>

        
        </>
        
    );
};

export default Placeorder;