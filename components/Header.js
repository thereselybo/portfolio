import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container, Navbar, Nav } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function Header() {
  const router = useRouter();

  return (
    <Fade bottom>
      <Navbar expand="md" className="my-3">
        <Container>
          <Link href="/" className="navbar-brand">
            <img src="/images/logo.png" alt="Logo" width="120px" />
          </Link>
          {/* <Navbar.Brand href="/">
            <img src="/images/logo.png" alt="Logo" width="120px" />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Link href="/">
              <a
                className={`px-0 px-md-3 nav-link ${
                  router.pathname == "/" || "" ? "active" : ""
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={`px-0 px-md-3 nav-link ${
                  router.pathname == "/projects" ? "active" : ""
                }`}
              >
                Projects
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`px-0 px-md-3 nav-link ${
                  router.pathname == "/contact" ? "active" : ""
                }`}
              >
                Contact
              </a>
            </Link>
            {/* <Nav.Link className="px-0 px-md-3" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="px-0 px-md-3 mx-md-3" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="px-0 px-md-3" href="/contact">
              Contact
            </Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fade>
  );
}

export default Header;
