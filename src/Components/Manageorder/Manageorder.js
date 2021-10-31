

import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Manageorder = () => {
const [manageorder, setManageorder] = useState([])
const [deleteCount, setDeleteCount] = useState(false)
const [isapproved, setIsapproved] = useState(false)
const [alert, setAlert] = useState('')







useEffect(() => {
    fetch('https://warm-reaches-84753.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setManageorder(data)

        })
}, [deleteCount, isapproved])

const handledelete = (id) => {
    const procced = window.confirm('Are Youe Sure Want to Delete')

    if (procced) {

        fetch(`https://warm-reaches-84753.herokuapp.com/managealldelete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(result => {
                setDeleteCount(result)




            })


    }



}



const handleupdate = (id) => {
    console.log(id);
    fetch(`https://warm-reaches-84753.herokuapp.com/update/${id}`, {
        method: "put",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ status: "pending" })




    })
        .then(res => res.json())
        .then(result => {
            setIsapproved(result)
            setAlert(result)
            console.log(result)
            if (result.modifiedCount) {
                setTimeout(function() {
                    setAlert('')
                    }, 3000);
            }

        })
}






return (
    <div className="container">
        {manageorder?.length ? <h2 className="text-center text-danger">All Booking List</h2> :
            <h2 className="text-center" >No booking <span style={{ "color": "red" }} >Yet Now!!!</span></h2>

        }
        {

            alert?.modifiedCount&&

            <Alert className="text-center" Alert variant="info">Your booking approved successfully</Alert>
            
            }

<table className="table table-striped">
<thead>
    <tr>
        <th scope="col">id</th>
        <th scope="col">Name</th>
        <th scope="col">Mobile No.</th>
        <th scope="col">Email</th>
        <th scope="col">Price</th>
        <th scope="col">status</th>

        <th scope="col">Delete</th>
    </tr>
</thead>
<tbody>

    {
        manageorder.map(mo => <tr>
            <th scope="row">{mo.bookingid}</th>
            <td>{mo?.name}</td>
            <td>{mo?.number}</td>
            <td>{mo?.email}</td>
            <td><i className="fas fa-dollar-sign mx-2"></i>{mo.price}</td>
            <td>{mo?.status}</td>
            <div>
                <button onClick={() => handledelete(mo._id)} className="btn btn-danger me-3 "><i className="far fa-trash-alt "></i></button>

                <button onClick={() => handleupdate(mo._id)} className="btn btn-danger "><i class="fas fa-check-circle"></i>Approved</button>






            </div>
        </tr>)
    }



    {/* <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
</tr>
<tr>
    <th scope="row">3</th>
    <td colspan="2">Larry the Bird</td>
    <td>@twitter</td>
</tr> */}
</tbody>

</table>

    </div >
);
};

export default Manageorder;