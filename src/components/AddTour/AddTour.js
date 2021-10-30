import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css';

const AddTour = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch('http://localhost:5000/tours', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Successfully Added The Tour')
                }
            })
    };
    return (
        <div>
            <h1 className='my-5'>Add Tour to Database</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Destination" {...register("destination")} />
                <input placeholder="Duration" {...register("duration")} />
                <input placeholder="Fee" {...register("fee")} />
                <textarea placeholder="Description" {...register("description")} />
                <input placeholder="Location" {...register("location")} />
                <input placeholder="Image-URL" {...register("image")} />
                <label>Color</label>
                <select {...register("color")}>
                    <option value="royalblue">royalblue</option>
                    <option value="black">black</option>
                    <option value="darkolivegreen">darkolivegreen</option>
                    <option value="mediumslateblue">mediumslateblue</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTour;