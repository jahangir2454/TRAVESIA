import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="footer-about">
                            <h2>About Us</h2>
                            <p>The systematic study of travel literature emerged as a field of scholarly inquiry in the mid-1990s, with its own conferences, organizations, journals, monographs,</p>
                            <div className="footer-icon">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-google"></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-about">
                            <h2>Quick Links</h2>
                            <p>About Us</p>
                            <p>Tours</p>
                            <p>Gallery</p>
                            <p>Contact Us</p>
                        </div>
                    </Col>
                    <Col md={3}>
                         <div className="footer-about">
                            <h2>Contact Info</h2>
                            <p><span><i className="fas fa-location-arrow"></i></span> 3481 Rabana Place, 2090</p>
                            <p><span><i className="fas fa-phone-alt"></i></span> +880 17980XXXXX</p>
                            <p><span><i className="far fa-envelope"></i></span> info@example.com</p>
                            <p><span><i className="fas fa-fax"></i></span> Fax : 02 9635 0247</p>
                        </div>
                    </Col>
                    <Col md={3}>
                         <div className="footer-about">
                            <h2>Contact Info</h2>
                            <div className=" d-flex justify-content-between monday">
                                <p>Monday-Friday:</p>
                                <p>9am - 5pm.</p>
                            </div>
                            <div className=" d-flex justify-content-between monday">
                                <p>Saturday</p>
                                <p>10am - 2pm.</p>
                            </div>
                            <div className=" d-flex justify-content-between monday">
                                <p>Sunday:</p>
                                <p>Closed</p>
                            </div>
                            <InputGroup className="mt-3 footer-contact">
                                <InputGroup.Text id="basic-addon1"><i className="fas fa-location-arrow"></i></InputGroup.Text>
                                <FormControl
                                placeholder="Search"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Footer;