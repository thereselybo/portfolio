import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function Header() {
  return (
    <Navbar expand="md" className="my-3">
      <Fade bottom>
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/logo.png" alt="Logo" width="120px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="px-0 px-md-3 mx-md-3" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="px-0 px-md-3 mx-md-3" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="px-0 px-md-3 mx-md-3" href="/contact">
              Contact
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Fade>
    </Navbar>
  );
}

export default Header;
