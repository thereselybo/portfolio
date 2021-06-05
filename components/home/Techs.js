import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Techs() {
  return (
    <Container className="techs">
      <h2>Techs and Tools</h2>
      <Row className="text-center">
        <Col>
          <Card className="mb-5">
            <ul className="h5">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Sass</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>IxD</li>
              <li>Wordpress/WooCommerce</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe XD</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Techs;
