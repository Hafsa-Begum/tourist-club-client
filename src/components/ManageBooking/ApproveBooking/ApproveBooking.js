import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAllBookings from '../../../hooks/useAllBookings';
import { useForm } from "react-hook-form";

const ApproveBooking = () => {
    const { id } = useParams();
    const [allBookings] = useAllBookings();
    //const [approveBooking, setApproveBooking] = useState({});
    // useEffect( () =>{
    //     fetch(`http://localhost:5000/allBookings/${id}`)
    //     .then(res => res.json())
    //     .then(data => setApproveBooking(data))
    // }, [id])

    const selectedBooking = allBookings.filter(booking => booking._id === id);
    console.log(selectedBooking)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/allBookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Update Successful');
                    reset();
                }
            })
    };
    // useEffect(() => {
    //     fetch(`http://localhost:5000/allBookings/${id}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [id])
    return (
        <div>
            <h1>Approve Booking id {id} name {selectedBooking[0]?.destination}</h1>
            <p>Status: {selectedBooking[0]?.status}</p>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input defaultValue={selectedBooking[0]?.destination} placeholder='Tour Name' {...register("destination")} /> */}
                    <label>{selectedBooking[0]?.destination}</label>
                    <select defaultValue={selectedBooking[0]?.status} {...register("status")} placeholder='Status'>
                        <option value="pending">pending</option>
                        <option value="approved">approved</option>
                        <option value="completed">completed</option>
                    </select>
                    <input type="submit" value="update" />
                </form>
            </div>
        </div>
    );
};

export default ApproveBooking;