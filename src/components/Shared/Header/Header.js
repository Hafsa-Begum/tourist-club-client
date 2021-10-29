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
                        <NavLink className='nav-link' to="/home">Home</NavLink>
                        <NavLink className='nav-link' to="/addEvents">Add Events</NavLink>
                        {/* <NavLink className='nav-link' to="/myEvents">My Events</NavLink> */}

                        <NavLink className='nav-link' to="/register"><button className="btn btn-light">Register</button></NavLink>

                        {
                            user.email ? <div className='d-flex'>
                                <NavLink className='nav-link' to="/admin">Admin</NavLink>
                                <button onClick={logOut} className="btn btn-warning">Logout</button>
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