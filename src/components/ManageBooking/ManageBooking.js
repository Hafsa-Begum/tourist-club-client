import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageBooking = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [control, setConrol] = useState(false);


    useEffect(() => {
        fetch('https://boiling-badlands-84811.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [control]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? Data will be permanently DELETED!');
        if (proceed) {
            fetch(`https://boiling-badlands-84811.herokuapp.com/allBookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted');
                        setConrol(!control);
                        // const remainingBooking = allBookings.filter(booking => booking._id !== id)
                        // setAllBookings(remainingBooking);
                    }
                    else {
                        setConrol(false);
                    }

                })
        }
    }

    return (
        <div>
            <h1 className='my-5'>Manage All booking: {allBookings.length}</h1>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr className='row mx-2'>
                        <th className='col-md-1'>#</th>
                        <th className='col-md-1'>Booked By</th>
                        <th className='col-md-2'>Email</th>
                        <th className='col-md-1'>Phone No.</th>
                        <th className='col-md-1'>Address</th>
                        <th className='col-md-2'>Tour Name</th>
                        <th className='col-md-1'>Date</th>
                        {/* <th className='col-md-1'>Location</th> */}
                        <th className='col-md-1'>Status</th>
                        <th className='col-md-2'>Action</th>
                    </tr>
                </thead>
                {allBookings?.map((tour, index) => (
                    <tbody key={tour._id}>
                        <tr className='row mx-2'>
                            <td className='col-md-1'>{index}</td>
                            <td className='col-md-1'>{tour?.name}</td>
                            <td className='col-md-2'>{tour?.email}</td>
                            <td className='col-md-1'>{tour?.phone}</td>
                            <td className='col-md-1'>{tour?.address}</td>
                            <td className='col-md-2'>{tour?.destination}</td>
                            <td className='col-md-1'>{tour?.date}</td>
                            {/* <td className='col-md-1'>{tour?.location}</td> */}
                            <td className='col-md-1'>{tour?.status}</td>
                            <td className='col-md-2'>
                                <Link to={`/manageBooking/${tour._id}`}>
                                    <button className="btn bg-primary p-2 mb-2"><i class="fas fa-clipboard-check"></i> Approve</button>
                                </Link> <br />
                                <button onClick={() => handleDelete(tour?._id)} className="btn bg-danger p-2"><i className="fas fa-trash-alt"></i> Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageBooking;