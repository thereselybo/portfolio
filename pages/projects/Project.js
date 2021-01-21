import React from "react";
import Link from "next/link";
import { Card, Col, Row, Button } from "react-bootstrap";
import LinkIcons from "./LinkIcons";

function Project(props) {
  return (
    <div>
      {/* MOBILE DISPLAY */}
      <Card className="card-vertical mb-5 d-block d-md-none">
        <Card.Img variant="top" src={props.image} alt="Project image" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>{props.techs}</Card.Subtitle>
          <Card.Text className="mt-3">{props.intro}</Card.Text>
          <LinkIcons
            case_study={props.case_study}
            github_repo={props.github_repo}
            live_project={props.live_project}
          />
          {/* <Link href="https://lybo.dev/ixd/ca-v2/">
              <Button variant="primary" className="reg-btn">
              Se live side
              </Button>
            </Link> */}
        </Card.Body>
      </Card>

      {/* DESKTOP DISPLAY */}
      <Card className="card-horizontal d-none d-md-block">
        <Row>
          <Col className="pr-0">
            <Card.Body className="p-4 d-flex flex-column">
              <Card.Title>{props.title}</Card.Title>
              <Card.Subtitle>{props.techs}</Card.Subtitle>
              <Card.Text className="mt-3">{props.intro}</Card.Text>
              {/* <Link href="https://lybo.dev/ixd/ca-v2/">
                <Button className="mt-auto reg-btn" variant="primary">
                  Se live side
                </Button>
              </Link> */}
            </Card.Body>
          </Col>
          <Col className="pl-0 img-container position-relative">
            <Card.Img src={props.image} />
            <div className="hover-indicator"></div>
            <div className="project-hover">
              <LinkIcons
                case_study={props.case_study}
                github_repo={props.github_repo}
                live_project={props.live_project}
              />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Project;

// {/* MOBILE DISPLAY */}
// <Card className="card-vertical mb-5 d-block d-md-none">
// <Card.Img variant="top" src="/images/shadowball-desktop.jpg" />
// <Card.Body>
//   <Card.Title>ShadowBall</Card.Title>
//   <Card.Subtitle>
//     HTML | CSS | Bootstrap | JavaScript | IxD
//   </Card.Subtitle>
//   <Card.Text className="mt-3">
//     The objective of this project is to provide either NASA or SpaceX
//     with a microsite which will contribute to raise awareness about
//     space program activity.
//   </Card.Text>
//   <LinkIcons />
//   {/* <Link href="https://lybo.dev/ixd/ca-v2/">
//       <Button variant="primary" className="reg-btn">
//       Se live side
//       </Button>
//     </Link> */}
// </Card.Body>
// </Card>

// {/* DESKTOP DISPLAY */}
// <Card className="card-horizontal d-none d-md-block">
// <Row>
//   <Col className="pr-0">
//     <Card.Body className="p-4 d-flex flex-column">
//       <Card.Title>ShadowBall</Card.Title>
//       <Card.Subtitle>
//         HTML | CSS | Bootstrap | JavaScript | IxD
//       </Card.Subtitle>
//       <Card.Text className="mt-3">
//         The goal of this assignment is to practice skills acquired from
//         the Interaction Design course, as well as those from HTML, CSS
//         and JavaScript.
//       </Card.Text>
//       <Link href="https://lybo.dev/ixd/ca-v2/">
//         <Button className="mt-auto reg-btn" variant="primary">
//           Se live side
//         </Button>
//       </Link>
//     </Card.Body>
//   </Col>
//   <Col className="pl-0 img-container position-relative">
//     <Card.Img src="/images/shadowball-desktop.jpg" />
//     <div className="hover-indicator"></div>
//     <div className="project-hover">
//       <LinkIcons />
//     </div>
//   </Col>
// </Row>
// </Card>