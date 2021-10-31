import React, { useEffect, useState } from 'react';



const Details = (props) => {

    const [deletebooking, setDeletebooking] = useState({})
    const [isdelete,setIsdelete]=useState(null)
    



    

    const { img, description, price, _id,index } = props.bk

    useEffect(() => {
        fetch('https://warm-reaches-84753.herokuapp.com/booking')
            .then(res => res.json())
            .then(data =>{ 
                
                setDeletebooking(data)
            
            })
    }, [])
    console.log(deletebooking[index]);

    const handlerelode=()=>{
        window.location.reload(true)
    }

    const handledelete = (id) => {

    

        fetch(`https://warm-reaches-84753.herokuapp.com/deletebooking/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(result => {

                console.log(result);










            })

           




















    }



    return (
        <>
            {/* { alert.deletedCount>0 && <Alert variant="success"> Yor order SuccessFully deleted </Alert>  }   */}
            <div className="col-md-4 g-4">

                <div className="col">
                    <div className="card h-100 text-center">
                        <img src={deletebooking.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{ }</h5>
                            <p className="card-title">{deletebooking.description}</p>
                            <h4 className="card-text">${deletebooking.price}</h4>
                           <>
                           
<button onClick={() => handledelete(deletebooking._id)}  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Delete Your Order
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Are you sure want to delete??</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handlerelode} type="button" class="btn btn-primary">Yes</button>
      </div>
    </div>
  </div>
</div>

                           </>   
                            

                        </div>

                    </div>
                </div>

            </div>
        </>

    );
};

export default Details;






 