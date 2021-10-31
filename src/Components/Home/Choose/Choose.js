import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Choose.css'

const Choose = () => {
    return (
        <div>
            <Container>
                <Row >
                    <Col className="text-center my-4 choose-heading">
                        <h6>What’s so great about Followme?</h6>
                        <h2>Why Choose Us</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="choos-img">
                            <img src="https://demo2.prestabrain.com/followme/wp-content/uploads/2021/06/h2_img-3.jpg" alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="choss-item">
                            <div className="my-2">
                                <h4> Diverse Destinations</h4>
                                <p>Every year middle class American families put off traveling because they’re too busy or too tired or they just don’t have enough money.</p>
                            </div>
                            <div className="my-2">
                                <h4> Fast Booking</h4>
                                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides, others may experience gambling as an addictive and distractive habit.</p>
                            </div>
                            <div className="my-2">
                                <h4>Value for Money</h4>
                                <p>Don’t leave your shopping to the last minute. The more time you have to shop around, the more you can negotiate.</p>
                            </div>
                            <button className="all-btn">Read More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Choose;