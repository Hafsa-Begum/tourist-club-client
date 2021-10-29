import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AllTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div>
            <h1>Tours we provide</h1>
            <div className="row mx-3">
                {
                    tours.map((tour, index) => <div className='col-md-3 col-sm-6 col-12 my-3'>
                        <div style={{ backgroundColor: tour?.color }} className='rounded-3 pb-4 text-white'>
                            <img style={{ height: '300px' }} className='w-100 rounded-3' src={tour.image} alt="" />
                            <h4 className='py-2'>{tour.destination}</h4>
                            <Link to={`/tours/${tour._id}`}>
                                <button className="btn btn-dark">See Details</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllTours;