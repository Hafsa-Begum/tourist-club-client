import React, { useState } from 'react';
import AddTour from '../AddTour/AddTour';
import ManageBooking from '../ManageBooking/ManageBooking';
import MyTour from '../MyTour/MyTour';
import './Admin.css';

const Admin = () => {
    const [control, setControl] = useState('allBookings')
    return (
        <div className='admin-dashboard'>
            <div className='row'>
                <div className='col-md-3 h-100 bg-light text-dark'>
                    <div className='admin-area'>
                        <h3 className='mb-3 mt-3'>Dashboard</h3>
                        <div className='admin-menu'>
                            <li onClick={() => setControl('allBookings')} className='mb-3'><i className="fs-5 text-primary fas fa-user-cog"></i> Manage All Booking</li>
                            <li onClick={() => setControl('myBooking')} className='mb-3' ><i className="fs-5 text-primary fas fa-asterisk"></i> My Booking</li>
                            <li onClick={() => setControl('addTour')} ><i className="fs-5 text-primary fas fa-folder-plus"></i> Add New Tour</li>
                        </div>
                    </div>
                </div>
                <div className='col-md-9 text-center'>
                    {control === 'allBookings' && <ManageBooking></ManageBooking>}
                    {control === 'myBooking' && <MyTour></MyTour>}
                    {control === 'addTour' && <AddTour></AddTour>}
                </div>

            </div>
        </div>
    );
};

export default Admin;