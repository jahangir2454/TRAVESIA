import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './ManageAllOder.css'


const ManageAllOders = () => {
    const [manage, setManage] = useState([]);
    const [load,setLoad] = useState(false);
    useEffect(() => {
        fetch('https://warm-spire-77307.herokuapp.com/oder')
            .then(res => res.json())
            .then(data => {
                setManage(data)
            })
    }, [load])
    const hendelDelet = id => {
        fetch(`https://warm-spire-77307.herokuapp.com/odered/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('successfully delete');
                    setLoad(true)
                }
            })
    }
    return (
        <div>
            <Container className="mt-md-3">
                <Row className ="d-flex justify-content-center">
                    <Col className="text-center mb-2 manage-heading">
                        <h2>Manage All Oder</h2>
                    </Col>
                </Row>
                <Table  hover variant="light">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Itam Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                   {manage?.map((manag, index) => (
                        <tbody>
                            <tr>
                            <td>{index}</td>
                               <td className="manag-img">
                                  <img src={manag?.service?.img} alt="" />
                               </td>
                               <td>{manag?.service?.name}</td>
                               <td>$ {manag?.service?.price}</td>
                               <td>{manag?.email}</td>
                               <td>{manag?.address}</td>
                               <td>
                                   <i onClick={()=>hendelDelet(manag._id)} className="far fa-trash-alt"></i>
                               </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
           </Container>
        </div>
    );
};

export default ManageAllOders;