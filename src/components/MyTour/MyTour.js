import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyTour = () => {
    const { user } = useAuth();
    const [myTours, setMyTours] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myTours/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyTours(data))
    }, [user?.email])

    const handleBookingDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel tour booking?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteMyTour/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // if (data.ack) {
                    //     alert('Your booking is cencelled!')
                    // }
                })
        }
    };
    return (
        <div>
            <h1>My Booking Tours</h1>
            <div className="row mx-5">
                {
                    myTours.map(tour => <div key={tour._id} className="col-md-6 col-12">
                        <div style={{ backgroundColor: tour?.color }} className='m-3 rounded-3  text-white'>
                            <img style={{ height: '450px' }} className='w-100 rounded-3' src={tour.image} alt="" />
                            <h2 className='py-3'>Destination: {tour.destination}</h2>
                            <button onClick={() => handleBookingDelete(tour._id)} className="btn btn-danger mb-4">Cancel Booking</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default MyTour;