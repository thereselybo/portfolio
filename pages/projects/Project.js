import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import LinkIcons from "./LinkIcons";
import Fade from "react-reveal/Fade";

function Project(props) {
  const [isVisible, setIsVisible] = useState(false);
  const techs = React.Children.map(props.techs, (tech, index) => {
    return (
      <span>
        {tech} {index < props.techs.length - 1 ? " | " : ""}
      </span>
    );
  });

  return (
    <div className="project">
      {/* MOBILE DISPLAY */}
      <Fade bottom>
        <Card className="card-vertical mb-5 d-block d-md-none">
          <Card.Img variant="top" src={props.image} alt="Project image" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="project-techs">{techs}</Card.Subtitle>
            <Card.Text className="mt-3">{props.intro}</Card.Text>
            <LinkIcons
              case_study={props.case_study}
              github_repo={props.github_repo}
              live_project={props.live_project}
            />
          </Card.Body>
        </Card>
      </Fade>

      {/* DESKTOP DISPLAY */}
      <Fade bottom>
        <Card
          className="card-horizontal d-none d-md-block"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <Row>
            <Col className="pr-0">
              <Card.Body className="p-4 d-flex flex-column">
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="project-techs">{techs}</Card.Subtitle>
                <Card.Text className="mt-3">{props.intro}</Card.Text>
              </Card.Body>
            </Col>
            <Col className="pl-0 img-container position-relative">
              <div
                className="project-image h-100"
                style={{ backgroundImage: `url(${props.image})` }}
              >
                <div className="hover-indicator"></div>
                {isVisible && (
                  <div
                    className={`project-hover my-auto d-flex align-items-center ${
                      isVisible ? "transition-opacity" : ""
                    }`}
                  >
                    <LinkIcons
                      case_study={props.case_study}
                      github_repo={props.github_repo}
                      live_project={props.live_project}
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Card>
      </Fade>
    </div>
  );
}

export default Project;
