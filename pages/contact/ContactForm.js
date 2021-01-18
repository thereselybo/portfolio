import React from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";

// The following commented out code is still a work in progress:
// import ValidateForm from "./ValidateForm";

// const contactForm = document.querySelector("#contactForm");
// contactForm.onSubmit = (e) => {
//     e.preventDefault();
//     ValidateForm();
//   }

function ContactForm() {

  return (
    <Card className="p-5 mb-5">
      <Form
        id="contactForm"
      >
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" className="input-narrow" required />
              <Form.Control.Feedback type="invalid" id="nameError">
                Please enter your name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" className="input-narrow" required />
              <Form.Control.Feedback type="invalid" id="emailError">
                Please enter your email address
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" className="input-narrow" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={9} required />
              <Form.Control.Feedback type="invalid" id="messageError">
                Please enter your message
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="mt-2" type="submit">Send message</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default ContactForm;
