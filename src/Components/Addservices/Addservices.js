import React from 'react';
import { useForm } from "react-hook-form";

const Addservices = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://warm-reaches-84753.herokuapp.com/addservices', {
            method: "post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => console.log(result))


    };
    return (
        <div>
            <h2 className="text-center mt-3">Please Add <span style={{ "color": "red" }}>a Service</span></h2>
            <div className="container w-50">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="">Name</label>
                    <input className="form-control mt-3" {...register("name")} />
                    <label className="" htmlFor="">Price</label>
                    <input className="form-control mt-3" type="number."{...register("price")} />
                    <label className="" htmlFor="">Description</label>

                    <textarea className="form-control mt-3"  {...register("description")} />

                    <label className="" htmlFor="">Img url</label>

                    <input className="form-control mt-3" {...register("img", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input style={{ "backgroundColor": "#BB2D3B", "color": "white" }} className="btn  w-100 mt-3" type="submit" value="Add Service" />
                </form>
            </div>
        </div>
    );
};

export default Addservices;