import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import ContactForm from "./ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function index() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Container className="contact">
        <Fade bottom>
          <h1>Contact</h1>
        </Fade>
        <Fade bottom>
          <Row>
            <Col>
              <ContactForm />
            </Col>
          </Row>
        </Fade>
        {/* <Row className="icons">
          <Col xs={4}>
            <Link href="mailto:therese@lybo.dev">
              <a>
                <FontAwesomeIcon
                  icon={faEnvelopeSquare}
                  className="fontAwesomeIcon"
                />
              </a>
            </Link>
          </Col>
          <Col xs={4}>
            <Link href="https://github.com/thereselybo">
              <a>
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className="fontAwesomeIcon"
                />
              </a>
            </Link>
          </Col>
          <Col xs={4}>
            <Link href="https://www.linkedin.com/in/thereselybo/">
              <a>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fontAwesomeIcon"
                />
              </a>
            </Link>
          </Col>
        </Row> */}
      </Container>
    </Layout>
  );
}

export default index;
