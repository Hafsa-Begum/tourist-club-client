import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div id='features'>
            <h1 className='my-5'>Why you choose us?</h1>
            <div className="row mx-5 mb-5">
                <div className="col-md-4 col-sm-6 col-12 pt-3 rounded-3 feature">
                    <div className='mx-5'>
                        <i class="fs-1 text-primary fas fa-map-marker-alt"></i>
                        <h4 className='mt-4'>Reliable Booking System</h4>
                        <p>Your booking system! We offer a booking, scheduling help.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 pt-3 rounded-3 feature">
                    <div className='mx-5'>
                        <i class="fs-1 text-primary fas fa-car-side"></i>
                        <h4 className='mt-4'>Get Travel Insurance</h4>
                        <p>Travel insurance is intended to cover medical expenses, trip cancellation.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 pt-3 rounded-3 feature">
                    <div className='mx-5'>
                        <i class="fs-1 text-primary fas fa-globe-asia"></i>
                        <h4 className='mt-4'>World Class Service</h4>
                        <p>We all want it. If we run a business, we all want to give the impression.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;