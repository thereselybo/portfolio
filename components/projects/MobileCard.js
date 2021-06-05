import { Card } from "react-bootstrap";
import LinkIcons from "./LinkIcons";
import Fade from "react-reveal/Fade";

const MobileCard = ({ project }) => {
  const { image, title, techs, intro, case_study, github_repo, live_project } =
    project;
  return (
    <Fade bottom>
      <Card className="card-vertical mb-5 d-block d-md-none">
        <Card.Img variant="top" src={image} alt="Project image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="project-techs">{techs}</Card.Subtitle>
          <Card.Text className="mt-3">{intro}</Card.Text>
          <LinkIcons
            case_study={case_study}
            github_repo={github_repo}
            live_project={live_project}
          />
        </Card.Body>
      </Card>
    </Fade>
  );
};

export default MobileCard;
