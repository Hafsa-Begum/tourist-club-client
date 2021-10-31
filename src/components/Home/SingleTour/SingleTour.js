import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";

const SingleTour = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [singleTour, setSingleTour] = useState({});

    useEffect(() => {
        fetch(`https://boiling-badlands-84811.herokuapp.com/tours/${id}`)
            .then(res => res.json())
            .then(data => setSingleTour(data))
    }, [id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        data.email = user.email;
        data.status = 'pending';

        fetch('https://boiling-badlands-84811.herokuapp.com/addBooking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Wow! Your tour booking is Successful.')
                }
            })

    };

    // const handleBookTour = (singleTour) => {
    //     singleTour.email = user.email;
    //     singleTour.status = 'pending';

    //     fetch('https://boiling-badlands-84811.herokuapp.com/addBooking', {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(singleTour)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.insertedId) {
    //                 alert('Wow! Your tour booking is Successful.')
    //             }
    //         })

    // }
    return (
        <div>
            <div className="row mx-5">
                <div className="col-md-8 col-9 border-end">
                    <h1 className='fs-1 my-3'>Welcome to Our Special <span className='text-warning'>{singleTour.destination}</span></h1>
                    <div className='text-center'><img style={{ height: '500px' }} className='w-50 rounded-3' src={singleTour.image} alt="" />
                    </div>
                    <p className='w-75 mx-auto fs-5 my-3 mx-5'>{singleTour.description}</p>
                    <div style={{ color: singleTour?.color }} className='w-75 mx-auto d-flex justify-content-between align-items-center fs-3'>
                        <p>Tour Duration: {singleTour.duration}</p>
                        <p>Location: {singleTour.location}</p>
                        <p>Starting from $ {singleTour.fee}</p>
                    </div>
                    <div>
                        {/* <button onClick={() => handleBookTour(singleTour)} className="btn btn-primary mb-5 me-5">Book Your Tour Now</button> */}
                        <Link to='/home'>
                            <button className="btn btn-dark mb-5 ms-5">Go Back</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-3">
                    <div>
                        <h2 className='mt-5' >To Place Your Booking Provide Information Below</h2>
                        <div className='w-100'>
                            <form className='w-100' onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name")} />
                                <input defaultValue={user.email} {...register("email")} />
                                <input defaultValue={singleTour?.destination} {...register("destination")} />
                                <input defaultValue={singleTour?.location} {...register("location")} />
                                <input defaultValue={singleTour?.image} {...register("image")} />
                                <input type="date" {...register("date")} />
                                <input {...register("address")} placeholder='Your Address' />
                                <input  {...register("phone no.")} placeholder='Your Phone No.' />
                                <input type="submit" value='Book Now' />
                            </form>

                            {/* <Link to='/myTours'>
                                <button className="btn btn-primary">See My Tour Booking</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTour;