import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className='nav-link' to="/home"><i className="fs-5 fas fa-home"></i> Home</NavLink>
                        <NavLink className='nav-link' to="/about"><i className=" fs-5 fas fa-address-card"></i> About</NavLink>
                        <NavLink className='nav-link' to="/contact"><i className="fs-5 fas fa-address-book"></i> Contact</NavLink>

                        {
                            user.email ? <div className='d-flex'>
                                {/* <NavLink className='nav-link' to="/addTour">Add Tour</NavLink>
                                <NavLink className='nav-link' to="/myTours">My Booking</NavLink>
                                <NavLink className='nav-link' to="/manageBooking">Manage Booking</NavLink> */}
                                <NavLink className='nav-link' to="/admin"><i className="fs-5 fas fa-users-cog"></i> Admin</NavLink>
                                <button onClick={logOut} className="btn btn-warning">Logout <i className="fs-5 fas fa-sign-out-alt"></i></button>
                            </div>
                                :
                                <NavLink className='nav-link' to="/login">Login</NavLink>
                        }
                        {user.email &&
                            <Navbar.Text>
                                <h5>{user.displayName}</h5>
                            </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;