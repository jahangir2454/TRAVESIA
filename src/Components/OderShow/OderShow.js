import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './OderShow.css';

const OderShow = (props) => {
    
    const {address,email,number} = props.oders;
    const { name, price, img, reating, description } = props.oders.service
    const hendeldelet = id => {
        const sure = window.confirm('Are you sure you want to delete this item')
        if (sure) {
            fetch(`http://localhost:5000/oder/${id}`, {
            method:'Delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('successfully delete')
                }
            })
        }
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <div className="servicesItem">
                              <img src={img} alt="" />
                            <h3>{name}</h3>
                            
                            <div className="d-flex justify-content-md-between px-3">
                                <h4>Price: $ {price}</h4>
                                <Rating
                                    initialRating={reating}
                                    emptySymbol="far fa-star icon"
                                    fullSymbol="fas fa-star icon"
                                readonly  
                                />
                            </div>
                            <p>{email}</p>
                            <p>Number: {number}</p>
                            <p>Address: {address}</p>
                            <div className=" d-flex justify-content-around">   
                                 <Link to={`/update/${props.oders._id}`}><button className="all-btn">Update</button></Link>
                                 <button onClick={()=>hendeldelet(props.oders._id)} className="all-btn">Delete</button>
                           </div>
                      </div>
                    </Col>
                </Row>
            </Container>
       </div>
    );
};

export default OderShow;