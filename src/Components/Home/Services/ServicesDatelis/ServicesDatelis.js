import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServicesDatelis = () => {
    const { id } = useParams()
    const [service,setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    console.log(service.name)
    return (
        <div>
            <h3>this is services datelis</h3>
        </div>
    );
};

export default ServicesDatelis;