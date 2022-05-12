// import { Component } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="">Portfolio</Navbar.Brand>
        <Nav className="me-auto  py-2">
          <Nav.Link className="" as={Link} to="/">
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
          <Button href="" target="__blank" >Download CV</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
