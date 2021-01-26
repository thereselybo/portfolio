import React, { useEffect } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import kwesforms from "kwesforms";

function ContactForm() {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <Card className="p-5 mb-5">
      <Form
        id="contactForm"
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/ZhIrcoFBexr2xxYoHVt2"
        // add following lines when/if upgrading kwes plan:
        // data-kw-success-message="Thank you for your message!"
        // data-kw-no-reload
      >
        <Row>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label htmlFor="name">Navn</Form.Label>
              <Form.Control
                name="name"
                type="text"
                className="input-narrow"
                data-kw-rules="required|min:2|max:100"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Mailadresse</Form.Label>
              <Form.Control
                name="email"
                type="email"
                className="input-narrow"
                data-kw-rules="required|email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="phone">Telefon</Form.Label>
              <Form.Control
                name="phone"
                type="tel"
                className="input-narrow"
                data-kw-rules="numeric"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label htmlFor="message">Melding</Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                rows={9}
                data-kw-rules="required|min:5|max:500"
              />
            </Form.Group>
            <Button className="mt-2" type="submit">
              Send melding
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default ContactForm;
