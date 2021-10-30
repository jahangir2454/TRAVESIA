import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './UpdateOder.css'

const UpdateOder = () => {
    const { id } = useParams();
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/oders/${id}`)
            .then(res => res.json())
            .then(data => {
            setUser(data)
        })
    }, [])
    
    const hendeladdress = e => {
        const newAddress = e.target.value;
        const updateAddress = { address: newAddress, number: user.number, email: user.email };
        setUser(updateAddress)
    }
    const hendelNumber = e => {
        const newNumber = e.target.value;
        const updateNumber = { address: user.address, number: newNumber, email: user.email };
        setUser(updateNumber)
    }
    const hendelEmail = e => {
        const newEmail = e.target.value;
        const updateEmail = { address: user.address, number: user.number, email: newEmail };
        setUser(updateEmail)
    }
     const hendelSubmit = e => {
         e.preventDefault();
         fetch(`http://localhost:5000/oders/${id}`, {
             method: 'PUT',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(user)
         })
         .then(res=>res.json())
             .then(data => {
                 if (data.modifiedCount > 0) {
                     alert('successfully Update')
                     
             }
         })
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="update-user">
                            <div className="user-update">
                                <h3>Update your address</h3>
                                 <h5>{user?.address}</h5>
                            </div>
                            <div className="user-update">
                                <h3>Update your Number</h3>
                                <h5>{user?.number}</h5>
                            </div>
                            <div className="user-update">
                                <h3>Update your Email</h3>
                                <h5>{user?.email}</h5>
                            </div>
                       </div>
                    </Col>
                    <Col md={6}>
                        <div className='updaet-userForm'>
                            <form onSubmit={hendelSubmit}>
                                <input type="text" onChange={hendeladdress} value={user?.address} />
                           <input type="text" onChange={hendelNumber} value={user?.number}/>
                           <input type="text" onChange={hendelEmail} value={user?.email}/>
                            <button className="all-btn" type="submit">Update</button>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateOder;