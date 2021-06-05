import React, { useState } from "react";

import { Card, Col, Row } from "react-bootstrap";
import LinkIcons from "./LinkIcons";
import Fade from "react-reveal/Fade";

const DesktopCard = ({ project }) => {
  const {
    title,
    techs,
    intro,
    case_study,
    github_repo,
    live_project,
    image_url,
  } = project;

  const [isVisible, setIsVisible] = useState(false);
  const formattedTechs = techs.map((tech, i) => {
    return (
      <span>
        {tech.title} {i < techs.length - 1 ? " | " : ""}
      </span>
    );
  });
  //   project.techs = techs;
  return (
    <Fade bottom>
      <Card
        className="card-horizontal d-none d-md-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <Row>
          <Col className="pr-0">
            <Card.Body className="p-4 d-flex flex-column">
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="project-techs">
                {formattedTechs}
              </Card.Subtitle>
              <Card.Text className="mt-3">{intro}</Card.Text>
            </Card.Body>
          </Col>
          <Col className="pl-0 img-container position-relative">
            <div
              className="project-image h-100"
              style={{ backgroundImage: `url(${image_url})` }}
            >
              <div className="hover-indicator"></div>
              {isVisible && (
                <div
                  className={`project-hover my-auto d-flex align-items-center ${
                    isVisible ? "transition-opacity" : ""
                  }`}
                >
                  <LinkIcons
                    case_study={case_study}
                    github_repo={github_repo}
                    live_project={live_project}
                  />
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </Fade>
  );
};

export default DesktopCard;
