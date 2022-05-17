// import { Component } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/style.css" 

import "bootstrap/dist/css/bootstrap.min.css";

// function setActive(e){
//   console.log(e)
  
// }
const setActive=(e)=>{
  console.log(e);
}
const Header = () => {
  
  return (
    <Navbar bg="primary" variant="dark" className="sticky-top">
      {/* <Container fluid> */}
        <Navbar.Brand className="mx-4">Portfolio</Navbar.Brand>
        <Nav className="mx-2  py-2">
          <Nav.Link className="" as={Link} to="/" onClick={setActive}>
            Home
          </Nav.Link>
          <Nav.Link className="" as={Link} to="/project">
            Project
          </Nav.Link>
          <Nav.Link className="" as={Link} to="/about">
            About
          </Nav.Link>

          <Nav.Link className="" as={Link} to="/resume">
            Resume
          </Nav.Link>
          <Button  className="download-btn" >Download CV</Button>
        </Nav>
      {/* </Container> */}
    </Navbar>
  );
};
export default Header;
