import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const About = () => {
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
          <h1 className="mb-2">Hi, I'm Therese</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Front-end development student",
                  "Coffee addict",
                  "Digital hobby illustrator",
                  "Animal lover",
                  "Foodie",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <p>
            I am a 26 years old student living at Kløfta, Norway. I'm studying
            Frontend Development at Noroff School of Technology and Digital
            Media in Oslo, where I'm currently enjoying exploring both the
            creative and technical sides of myself.
          </p>
          <p>
            When I'm not in front of my computer, I can be found outdoors,
            working my way through a bowl of pasta, immersed in a plant, or
            petting any nearby dog.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
