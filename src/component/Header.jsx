import { Component } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component
{
render(){
    return (
    <Navbar bg="primary" variant="dark" >
        <Container>
        <Navbar.Brand className="">Portfolio</Navbar.Brand>
        <Nav className="me-auto">   
        <Nav.Link className="" href="#home">Home</Nav.Link>
        <Nav.Link className="" href="#project">Project</Nav.Link>
        <Nav.Link className="" href="#about">About</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    )
    }
}
export default Header;
