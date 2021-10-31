import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('https://warm-spire-77307.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert('successfully add')
                    reset()
                }
            })
    };
    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col className="text-center add-services mt-md-3">
                        <h2>Add A Services</h2>
                    </Col>
                </Row>
                <Row className='justify-content-center mb-2'>
                    <Col md={6}>
                        <div className='addItem'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Name" {...register("name")} />
                            <input placeholder="Country" {...register("country")} />
                            <input placeholder="Reating" type="number" {...register("reating")} />
                            <input placeholder="Price" type="number" {...register("price")} />
                            <input placeholder="img Url" {...register("img")} />
                            <textarea placeholder="Description" {...register("description")} />
                            <input type="submit" />
                        </form>
                       </div>
                    </Col>
                </Row>
             </Container>
        </div>
    );
};

export default AddServices;