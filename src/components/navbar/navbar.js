import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './navbar.css'

const NavBar = () => {
    return(
        <div className="container-Nav">
                <div className="home-top">
        <h6>Kabupaten Bandung - Soreang</h6>
      </div>  
        <Navbar expand="lg" className='bar'>
        <Container fluid>
        <Navbar.Brand href="/" style={{marginLeft: '30px'}}>DamDam Suit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/Product" style={{marginLeft: '60px'}}>Product </Nav.Link>
            <Nav.Link href="/About" style={{marginLeft: '40px'}}>About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" style={{marginLeft: '40px'}}>
              <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default NavBar