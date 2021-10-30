import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllTours = () => {
    const [tours, setTours] = useState([]);
    const [isShowSpinner, setIsShowSpinner] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => {
                setTours(data)
                setIsShowSpinner(false)
            })
    }, [])
    return (
        <div>
            <h1>Tours we provide</h1>
            {isShowSpinner && <Spinner animation="border" variant="danger" />}
            <div className="row mx-3">
                {
                    tours.map((tour, index) => <div key={tour._id} className='col-md-3 col-sm-6 col-12 my-3'>
                        <div style={{ backgroundColor: tour?.color }} className='rounded-3 pb-4'>
                            <img style={{ height: '300px' }} className='w-100 rounded-3' src={tour.image} alt="" />
                            <h4 className='py-2'>{tour.destination}</h4>
                            <p className='text-white mx-2'>{tour.description.slice(0, 100)}</p>
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