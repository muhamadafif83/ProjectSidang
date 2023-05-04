import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="container-Nav">
      <div className="home-top">
        <h6>Kabupaten Bandung - Soreang</h6>
      </div>
      <Navbar expand="lg" className="bar">
        <Container fluid>
          <Navbar.Brand href="/" style={{ marginLeft: "30px" }}>
            DamDam Suit
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ marginLeft: "60px" }}>
                Home{" "}
              </Nav.Link>
              <Nav.Link href="/Product" style={{ marginLeft: "40px" }}>
                Product
              </Nav.Link>
              <Nav.Link href="/About" style={{ marginLeft: "40px" }}>
                Contact us
              </Nav.Link>
              <Nav.Link href="/Blog" style={{ marginLeft: "40px" }}>
                Blog{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
