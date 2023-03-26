import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import dataProduct from './dataProduct';
import './listProduct.css'
import ModalComponent from '../modalProduct.js';
import React, { useState } from 'react';

const Productlist = () => {
    const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);
    return(
        <div className="listProduct">
        <div className="clothing-card">
        {dataProduct.map((card) => (
                    <Card key={card.id} style={{ width: '18rem' }} className= 'listCard'>
                        <Card.Img variant="top" src={card.img} />
                        <Card.Body>
                             <Card.Title>{card.title}</Card.Title>
                            <hr/>   
                            <Card.Text>{card.size}</Card.Text>
                            <Card.Text>{card.desc}</Card.Text>
                            <>
                            <Button variant="primary" onClick={handleShow} className='button-pilihan'><a href={card.ahref} className='a-pilhan'>Lean More</a></Button>
                            <ModalComponent 
                                show={showModal} 
                                handleClose={handleClose}  
                                title="Contact us here" 
                                content="Isi modal di sini" 
                            />
                            </>
                        </Card.Body>
                    </Card>
        ))}
        </div>
        </div>
    )}

    export default Productlist