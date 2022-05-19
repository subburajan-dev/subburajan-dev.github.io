import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {pdflink,LINKEDIN,GITHUB} from "Constants/appConstants";
const setActive=(e)=>{
  console.log(e);
}
const Navigation = (props) => {
  return (
    <Navbar bg="primary" collapseOnSelect variant="dark" expand="sm" className="sticky-top">
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
          <Nav.Link href={LINKEDIN} target="_blank">
            <i className="">LinkedIn</i>
          </Nav.Link>
          <Nav.Link href={GITHUB} target="_blank">github</Nav.Link>
          <Button  className="download-btn" href={pdflink} >Download CV</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
