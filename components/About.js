import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <Container className="about mb-5">
      <Row className="align-items-center">
        <Col
          md={5}
          lg={4}
          className="embed-responsive embed-responsive-1by1 ml-md-2 ml-lg-5 mb-5 mb-md-0 order-md-2"
        >
          <div className="rounded-circle gradient embed-responsive-item">
            <img
              src="/images/profile.png"
              alt="Illustrated self portrait"
              className="portrait mx-auto"
            />
          </div>
        </Col>
        <Col className="order-md-1">
          <h1 className="mb-2">Hei, jeg er Therese</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Frontend-utviklinger under utvikling",
                  "Kaffeavhengig",
                  "Digital hobbyillustratør",
                  "Dyreelsker",
                  "Foodie",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <p>
            Jeg er en 26 år gammel student som bor på Kløfta. Jeg studerer
            frontend-utvikling på Noroff School of Technology and Digital Media
            i Oslo, hvor jeg stortrives med å få utforske og utvikle både
            kreative og tekniske sider ved meg selv.
          </p>
          <p>
            Utenom studier og datatid, har jeg stor glede av å være utendørs,
            drive med matlaging, utvikle grønne fingre, og klappe hunder.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
