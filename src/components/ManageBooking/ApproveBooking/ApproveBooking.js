import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const ApproveBooking = () => {
    const { id } = useParams();
    // const [allBookings] = useAllBookings();
    const [approveBooking, setApproveBooking] = useState({});
    useEffect(() => {
        fetch(`https://boiling-badlands-84811.herokuapp.com/allBookings/${id}`)
            .then(res => res.json())
            .then(data => setApproveBooking(data))
    }, [id])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://boiling-badlands-84811.herokuapp.com/allBookings/${id}`;
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

    return (
        <div>
            <h1 className='my-5'>Approve <span className='text-primary'>{approveBooking?.destination}</span> Booking</h1>
            {/* <p>Status: {approveBooking?.status}</p> */}
            <div className='mb-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <label>{approveBooking?.destination}</label> */}
                    <br />
                    <select className='fs-3' defaultValue={approveBooking?.status} {...register("status")} placeholder='Status'>
                        <option value="pending">pending</option>
                        <option value="approved">approved</option>
                        <option value="completed">completed</option>
                    </select> <br />
                    <input className='fs-3' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default ApproveBooking;