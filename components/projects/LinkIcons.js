import Link from "next/link";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faCode,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

const LinkIcons = (links) => {
  const { case_study, github_repo, live_project } = links;

  return (
    <Row className="text-center justify-content-center link-icons my-4 mx-auto">
      {case_study && (
        <Link href={case_study}>
          <a className="mx-4">
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faSearchPlus}
                className="fontAwesomeIcon"
              />
            </div>
          </a>
        </Link>
      )}
      {github_repo && (
        <Link href={github_repo}>
          <a className="mx-4">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faCode} className="fontAwesomeIcon p2" />
            </div>
          </a>
        </Link>
      )}
      {live_project && (
        <Link href={live_project}>
          <a className="mx-4">
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="fontAwesomeIcon"
              />
            </div>
          </a>
        </Link>
      )}
    </Row>
  );
};

export default LinkIcons;
