import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css'

const Header = () => {
    const { user,signout} = useAuth();
    return (
        <div className='headerNav'>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand  to='/home'>
                    <img src='https://i.ibb.co/bdqhfRX/airplane.png' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <NavLink to='/home'>Home</NavLink>
                    {user.email&&<NavLink to='/addservices'>AddServices</NavLink>}
                    {user.email&&<NavLink to='/manage'>Manage All Oders</NavLink>}
                    {user.email&&<NavLink to='/myoder'>MyOder</NavLink>}
                    {user.email ? <NavLink onClick={signout} to='/login'>Logout</NavLink> :
                    <NavLink to='/login'>Login</NavLink>
                            }
                          {user.email&&  <div className='user-img'>
                               {user.photoURL ? <img src={user.photoURL} alt="" />:
                                <img src="https://i.ibb.co/SRBFxpM/man.png" alt="" />}
                            </div>}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;