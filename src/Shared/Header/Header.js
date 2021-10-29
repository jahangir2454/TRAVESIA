import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='headerNav'>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand exact to='/home'>
                    <img src='https://i.ibb.co/bdqhfRX/airplane.png' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/addservices'>AddServices</NavLink>
                    <NavLink to='/login'>LogIn</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;