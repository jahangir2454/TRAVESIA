import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import OderShow from '../OderShow/OderShow';

import './MyOder.css'

const MyOder = () => {
    const [oder, setOder] = useState([])
    const {user} = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/oder/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOder(data)
            })
    }, [oder])

    return (
        <div>
            <Container>
                <div className="myoder my-4">
            {
                oder.map(oders=><OderShow oders={oders}></OderShow>)
            }
            </div>
          </Container>
        </div>
    );
};

export default MyOder; 