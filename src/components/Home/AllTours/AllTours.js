import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllTours.css';

const AllTours = () => {
    const [tours, setTours] = useState([]);
    const [isShowSpinner, setIsShowSpinner] = useState(true)

    useEffect(() => {
        fetch('https://boiling-badlands-84811.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => {
                setTours(data)
                setIsShowSpinner(false)
            })
    }, [])
    return (
        <div>
            <h1 style={{ color: 'mediumslateblue' }} className='my-5'>Our Tours</h1>
            {isShowSpinner && <Spinner animation="border" variant="danger" />}
            <div className="row mx-3">
                {
                    tours.map((tour, index) => <div key={tour._id} className='col-md-3 col-sm-6 col-12 my-3'>
                        <div style={{
                            backgroundColor: "rgba(146, 139, 187, 0.4)",
                            cursor: "pointer"
                        }} className='rounded-3 pb-4'>
                            <div id="img-container">
                                <img id="image" style={{ height: '300px' }} className='w-100 rounded-3' src={tour.image} alt="" />
                            </div>
                            <h4 className='py-2'>{tour.destination}</h4>
                            <p style={{ color: 'blue' }} className='mx-2'>{tour.description.slice(0, 100)}</p>
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