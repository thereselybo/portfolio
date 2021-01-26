import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container, Navbar } from "react-bootstrap";
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Link href="/">
              <a
                className={`px-0 px-md-3 nav-link ${
                  router.pathname == "/" || "" ? "active" : ""
                }`}
              >
                Hjem
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={`px-0 px-md-3 nav-link ${
                  router.pathname == "/projects" ? "active" : ""
                }`}
              >
                Prosjekter
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`px-0 px-md-3 nav-link ${
                  router.pathname == "/contact" ? "active" : ""
                }`}
              >
                Kontakt
              </a>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fade>
  );
}

export default Header;
