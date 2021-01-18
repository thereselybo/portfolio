import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import ContactForm from "./ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

function index() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Container className="contact">
        <h1>Contact</h1>
        <Row>
          <Col>
            <ContactForm />
          </Col>
        </Row>
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
