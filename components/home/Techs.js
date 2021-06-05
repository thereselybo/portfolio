import { Container, Row, Col, Card } from "react-bootstrap";

const Techs = ({ techs }) => {
  return (
    <Container className="techs">
      <h2>Techs and Tools</h2>
      <Row className="text-center">
        <Col>
          <Card className="mb-5">
            <ul className="h5">
              {techs.length &&
                techs.map((tech, i) => <li key={i}>{tech.title}</li>)}
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Techs;
