import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import LinkIcons from "./LinkIcons";
import Fade from "react-reveal/Fade";
import DesktopCard from "./DesktopCard";
import MobileCard from "./MobileCard";

const Project = (project) => {
  // const { title, techs, intro, case_study, github_repo, live_project, image } =
  //   project;
  // console.log(project);
  // const [isVisible, setIsVisible] = useState(false);
  // const techs = React.Children.map(project.techs, (tech, index) => {
  //   return (
  //     <span>
  //       {tech} {index < project.techs.length - 1 ? " | " : ""}
  //     </span>
  //   );
  // });

  return (
    <div className="project">
      {/* MOBILE DISPLAY */}
      <MobileCard project={project} />

      {/* DESKTOP DISPLAY */}
      <DesktopCard project={project} />
    </div>
  );
};

export default Project;
