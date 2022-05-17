
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/style.css" 

import "bootstrap/dist/css/bootstrap.min.css";

// function setActive(e){
//   console.log(e)
  
// }
const setActive=(e)=>{
  console.log(e);
}
const Navigation = () => {
  
  return (
    <Navbar bg="primary" collapseOnSelect variant="dark" expand="sm" className="fixed-top">
      <Container >
        <Navbar.Brand className="mx-4">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
