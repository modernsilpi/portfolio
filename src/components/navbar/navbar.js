import React from "react";
import {
  Navbar,
  Nav
} from "react-bootstrap";
import './navbar.css';

function Navbar1() {
  return (
    <div style={{paddingBottom: "50px"}}>
      <Navbar className="navbar" bg="dark" variant="dark" fixed="top" expand="lg" centered>
        {/* <Navbar.Brand href="#home">Hemanth</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Work</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar1;
