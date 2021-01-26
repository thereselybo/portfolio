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
        <title>Kontakt</title>
      </Head>
      <Container className="contact">
        <Fade bottom>
          <h1>Kontakt</h1>
        </Fade>
        <Fade bottom>
          <Row>
            <Col>
              <ContactForm />
            </Col>
          </Row>
        </Fade>
      </Container>
    </Layout>
  );
}

export default index;
