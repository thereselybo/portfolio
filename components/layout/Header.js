import { useRouter } from "next/router";

import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Header = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Fade bottom>
      <Navbar variant="custom" expand="md" className="my-3">
        <Container>
          <Link href="/" className="navbar-brand">
            <img src="/images/logo.png" alt="Logo" width="120px" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar"
          >
            <Nav activeKey={path}>
              <Link href="/" passHref>
                <Nav.Link className="px-0 px-md-3">Home</Nav.Link>
              </Link>
              <Link href="/projects" passHref>
                <Nav.Link className="px-0 px-md-3">Projects</Nav.Link>
              </Link>
              <Link href="/contact" passHref>
                <Nav.Link className="px-0 px-md-3">Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fade>
  );
};

export default Header;
