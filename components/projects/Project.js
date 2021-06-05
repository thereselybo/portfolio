import DesktopCard from "./DesktopCard";
import MobileCard from "./MobileCard";

const Project = ({ project }) => {
  return (
    <div className="project">
      <MobileCard project={project} />
      <DesktopCard project={project} />
    </div>
  );
};

export default Project;
