import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';




const Mybooking = () => {
    const { user } = useAuth()
    const [show, setShow] = useState(false);
    const [booking, setBoooking] = useState([])

    const [deleteCount, setDeleteCount] = useState(false)

    const email = user?.email
    useEffect(() => {
        fetch(`https://warm-reaches-84753.herokuapp.com/mybooking/${email}`)
            .then(res => res.json())
            .then(data => setBoooking(data))


    }, [deleteCount])




    const handledelete = (id) => {

     const proceed = window.confirm('are sure want to delete???')
      if(proceed){
          
        fetch(`https://warm-reaches-84753.herokuapp.com/deletebooking/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(result => {

                setDeleteCount(result)

                console.log(result);

            }
            )

      }



    }
   





    return (

        <div className="container" >



            

            <div className="mt-3 text-center">

                {

                    booking.length ? <h5 style={{ "fontSize": "50px", "color": "#E31C25" }} >View Your Orders</h5> :
                        <h2>No Orders yet <span style={{ "color": "red" }}>Please Order!!</span></h2>


                }


            </div>

            <div className="row">

                {
                    booking.map((bk, index) => <>
                        {/* { alert.deletedCount>0 && <Alert variant="success"> Yor order SuccessFully deleted </Alert>  }   */}
    <div className="col-md-4 g-4">

        <div className="col">
            <div className="card h-100 text-center">
                <img src={bk.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Booking by:{bk?.name}</h5>
                    <p className="card-title">{bk.description?.slice(0, 100)}</p>
                    <h4 className="card-text"><i className="fas fa-dollar-sign"></i>{bk.price}</h4>
                    <p className="fw-bolder">Order Status:{bk?.status}</p>
                    <button onClick={()=>handledelete(bk._id) } className="btn btn-danger w-50" >delete </button>
                      
                        

    
                    <>

                   
                    


                    </>


                                    </div>

                                </div>
                            </div>

                        </div>


                        
                    </>





                    )
                }




            </div>

        </div>














    );
};

export default Mybooking;










// onClick={handlerelode} 