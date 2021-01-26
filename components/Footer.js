import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <Container>
      <Fade bottom>
        <Row className="icons">
          <Col>
            <Link href="mailto:therese@lybo.dev">
              <a>
                <FontAwesomeIcon
                  icon={faEnvelopeSquare}
                  className="fontAwesomeIcon"
                />
              </a>
            </Link>
            <Link href="https://github.com/thereselybo">
              <a className="mx-3 mx-md-5">
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className="fontAwesomeIcon"
                />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/thereselybo/">
              <a>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fontAwesomeIcon"
                />
              </a>
            </Link>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default Footer;
