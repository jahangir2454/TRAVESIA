import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='banner-img'>
                <img src="https://i.ibb.co/MSHpqVB/woman-faces-a-beautiful-mountain-sunset-P9-GXE8-X-2.jpg" alt="" />
            </div>
            <div className="banner-item ">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div>
                                <h1>LET’S YOUR <span>JOURNEY BEGINS</span></h1>
                                <p>As your click-through-rate rises, your website's time-on-site will likely. increase as well. This is how long your website visitors are staying.</p>
                                <button className='all-btn'>Book A Tour</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;