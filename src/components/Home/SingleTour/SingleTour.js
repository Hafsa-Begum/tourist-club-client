import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SingleTour = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [singleTour, setSingleTour] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/tours/${id}`)
            .then(res => res.json())
            .then(data => setSingleTour(data))
    }, [id]);

    const handleBookTour = (singleTour) => {
        singleTour.email = user.email;
        singleTour.status = 'pending';

        fetch('http://localhost:5000/addBooking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleTour)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Wow! Your tour booking is Successful.')
                }
            })

    }
    return (
        <div>
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
                <button onClick={() => handleBookTour(singleTour)} className="btn btn-primary mb-5">Book Your Tour Now</button>
            </div>
        </div>
    );
};

export default SingleTour;