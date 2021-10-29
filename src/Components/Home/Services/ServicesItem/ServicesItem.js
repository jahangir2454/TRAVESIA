import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './ServicesItem.css';

const ServicesItem = ({ services }) => {

    console.log(services)
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="servicesItem">
                              <img src={services.img} alt="" />
                            <h3>{services.name}</h3>
                            <p>{services.description}</p>
                            <div className="d-flex justify-content-md-between px-3">
                                <h4>Price: $ {services.price}</h4>
                                <Rating
                                    initialRating={services.reating}
                                    emptySymbol="far fa-star icon"
                                    fullSymbol="fas fa-star icon"
                                readonly  
                                />
                            </div>
                            <div className="d-flex justify-content-md-center ">
                                 <button className="all-btn mx-2">Add To Cart</button>
                                 <button className="all-btn">View Details</button>
                           </div>
                      </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default ServicesItem;