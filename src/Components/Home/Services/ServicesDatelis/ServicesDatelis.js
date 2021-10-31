import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import './ServicesDatelis.css'

const ServicesDatelis = () => {
    const { id } = useParams()
    const { user } = useAuth();
    const history = useHistory()
    const [service, setService] = useState([])
    const [oder,setOder] = useState([])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    useEffect(() => {
        fetch(`https://warm-spire-77307.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
   
    const onSubmit = data => {
        console.log(data)
        data.service = service
        fetch(`https://warm-spire-77307.herokuapp.com/Oder/${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                history.push('/myoder')
                
        })
        
        
    };
    return (
        <div>
            <Container>
                <Row className='justify-content-center my-3'>
                    <Col className="text-center" md={6}>
                    <div>
                        <h2>{service.name}</h2>
                    </div>
                </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className='serviceDatelis-img'>
                             <img src={service.img} alt="" />
                       </div>
                    </Col>
                    <Col md={6}>
                        <div className='bookNow'>
                           <form onSubmit={handleSubmit(onSubmit)}>            
                                <input  defaultValue={user.email} {...register("email",{ required: true })} />
                                <input placeholder="Name" {...register("name")} />
                                <input type="number" placeholder="Phone Number" {...register("number")} />
                                <textarea placeholder="Address" {...register("address")} />
                                <input type="submit" />
                            </form>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesDatelis;






