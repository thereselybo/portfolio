import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/contact/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Contact =() => {
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
      </Container>
    </Layout>
  );
}

export default Contact;
