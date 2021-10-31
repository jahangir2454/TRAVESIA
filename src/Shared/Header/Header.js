import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css'

const Header = () => {
    const { user,signout} = useAuth();
    return (
        <div className='headerNav sticky-top'>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand className="travesia"  to='/home'>
                   <h2>TRAVE<span>SIA</span></h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <NavLink to='/home'>Home</NavLink>
                    {user.email&&<NavLink to='/myoder'>MyOder</NavLink>}
                    {user.email&&<NavLink to='/manage'>Manage All Oders</NavLink>}
                    {user.email&&<NavLink to='/addservices'>AddServices</NavLink>}
                    {user.email ? <NavLink  className="login" onClick={signout} to='/login'>Logout</NavLink> :
                    <NavLink className="login" to='/login'>Login</NavLink>
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