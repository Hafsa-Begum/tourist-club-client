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
                    <Navbar.Brand href="/home"><img src="https://i.ibb.co/02mVbb3/logo-1.png" alt="" /> <span className='fst-italic'>TOURIST CLUB</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className='nav-link' to="/home"><i className="fs-5 fas fa-home"></i> Home</NavLink>
                        <NavLink className='nav-link' to="/about"><i className=" fs-5 fas fa-address-card"></i> About</NavLink>
                        <NavLink className='nav-link' to="/contact"><i className="fs-5 fas fa-address-book"></i> Contact</NavLink>

                        {
                            user.email ? <div className='d-flex'>
                                <NavLink className='nav-link' to="/admin"><i className="fs-5 fas fa-users-cog"></i> Admin</NavLink>
                                <button onClick={logOut} className="btn btn-warning">Logout <i className="fs-5 fas fa-sign-out-alt"></i></button>
                            </div>
                                :
                                <NavLink className='nav-link' to="/login">Login</NavLink>
                        }
                        {user.email &&
                            <Navbar.Text>
                                <h5 className='ms-4 text-white'>Hi, {user.displayName}</h5>
                            </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;