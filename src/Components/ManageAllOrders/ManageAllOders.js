import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './ManageAllOder.css'


const ManageAllOders = () => {
    const [manage,setManage] = useState([])
    useEffect(() => {
        fetch('https://warm-spire-77307.herokuapp.com/oder')
            .then(res => res.json())
            .then(data => {
                setManage(data)
            })
    }, [])
    const hendelDelet = id => {
        console.log(id)
        fetch(`https://warm-spire-77307.herokuapp.com/odered/${id}`, {
            method:'Delete',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <Container>
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
                                  <img src={manag.service.img} alt="" />
                               </td>
                               <td>{manag.service.name}</td>
                               <td>$ {manag.service.price}</td>
                               <td>{manag.email}</td>
                               <td>{manag.address}</td>
                               <td>
                                   <i onClick={()=>hendelDelet(manag.service._id)} className="far fa-trash-alt"></i>
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