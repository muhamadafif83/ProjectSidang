import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navbar';
import Productlist from './listProduct/listProduct';
import './product.css'
import data from './productData';
import React, { useState } from 'react';
import ModalComponent from './modalProduct';

const Product = () => {
      const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);
  
    return(
        <div className="container-product">
            <>
            <NavBar/>
            </>
        <div className="content-Product">
            <div className="Product-text">
            <h4>New Arrivals!</h4>
            </div>
            <div className="product-card">
            {data.map((card) => (
                        <Card key={card.id} style={{ width: '18rem' }} className= 'productCard'>
                            <Card.Img variant="top" src={card.img} />
                            <Card.Body className='cardBody'>
                                <Card.Title>{card.title}</Card.Title>
                                <hr/>
                                <Card.Text>{card.size}</Card.Text>
                                <Card.Text>{card.desc}</Card.Text>
                                <Button variant="primary" onClick={handleShow} className='button-pilihan'><a href={card.ahref} className='a-pilhan'>Lean More</a></Button>
                                <ModalComponent 
                                show={showModal} 
                                handleClose= {handleClose} 
                                title="Contact us here" 
                                content="Isi modal di sini" 
                            />
                            </Card.Body>
                        </Card>
            ))}
            </div>
            <>
            <div className="clothing-text">
        <h4>Clothing</h4>
        </div>
            <Productlist />
            <Productlist />
            </>
        </div>
            <>
            <Footer/>
            </>
        </div>
    )
}

export default Product  