import React,{useState,useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'
import ServicesItem from './ServicesItem/ServicesItem';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://warm-spire-77307.herokuapp.com/services')
            .then(res => res.json())
            .then(data=>setService(data))
    }, [])
    return (
        <div>
            <Container>
                <Row className='justify-content-center text-center services-header my-3'>
                    <Col md={6}>
                        <h2>Services</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia, ut eligendi debitis suscipit hic cum pariatur at sapiente consequuntur?</p>
                    </Col>
                </Row>
                <div className="service my-3">
                    {
                        service.map(ser=><ServicesItem key= {ser._id} services={ser}></ServicesItem>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;