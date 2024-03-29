import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyTour = () => {
    const { user } = useAuth();
    const [myTours, setMyTours] = useState([]);

    useEffect(() => {
        fetch(`https://boiling-badlands-84811.herokuapp.com/myTours/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyTours(data))
    }, [user?.email])

    const handleBookingDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel tour booking?');
        if (proceed) {
            fetch(`https://boiling-badlands-84811.herokuapp.com/deleteMyTour/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Your booking is cancelled.')
                        window.location.reload();
                        // const remaining = myTours.filter(tour => tour._id !== id);
                        // setMyTours(remaining);
                    }
                })
        }
    };
    return (
        <div>
            <h1>My Booking Tours {myTours.length}</h1>
            <div className="row mx-5">
                {
                    myTours.map(tour => <div key={tour._id} className="col-md-6 col-12">
                        <div className='m-3 rounded-3 bg-light'>
                            <img style={{ height: '450px' }} className='w-100 rounded-3' src={tour?.image} alt="" />
                            <h2 className='py-3'>Tour Name: {tour?.destination}</h2>
                            <p className=''>Booking: {tour?.status}</p>
                            <button onClick={() => handleBookingDelete(tour._id)} className="btn btn-danger mb-4">Cancel Booking</button>
                        </div>
                    </div>)
                }

            </div>
            <Link to='/home'>
                <button className="btn btn-dark mb-3">Go Home</button>
            </Link>
        </div>
    );
};

export default MyTour;