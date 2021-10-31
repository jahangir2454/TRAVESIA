import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Travellers.css';

const Travellers = () => {
    return (
        <div className="my-3">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="travels-img">
                             <img src="https://demo2.prestabrain.com/followme/wp-content/uploads/2021/06/h2_shape-3.png" alt="" />
                       </div>
                    </Col>
                    <Col md={8}>
                        <div className="travels-item mt-md-5">
                            <h2>Followme Reviews</h2>
                            <div className="d-flex justify-content-between mb-md-4">
                                <h5>Happy Travellers</h5>
                                <div className="travels-icon">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <div className="travels-planning">
                                <h3>The planning process was excellent.</h3>
                                <h6>Smile <span>20/10/2021</span></h6>
                                <p>"It was a life changing experience and we couldn't be happier to have done it, learned so much, seen so much, and escaped from work for a couple of weeks!" It was a life changing experience and we couldn't be happier to have done it, learned so much, seen so much, and escaped from work for a couple of weeks!"It was a life changing experience and we couldn't be happier to have done it, learned so much, seen so much, and escaped from work for a couple of weeks!"</p>
                            </div>
                            <button className="all-btn">View More</button>
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Travellers;