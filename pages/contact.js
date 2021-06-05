import React from "react";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/contact/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <Layout title="Contact">
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
};

export default Contact;
