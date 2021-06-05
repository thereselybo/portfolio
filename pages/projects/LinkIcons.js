import React from "react";
import Link from "next/link";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faCode,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

function LinkIcons(props) {
  let github = props.github_repo ? props.github_repo : "";
  let live = props.live_project ? props.live_project : "";
  return (
    <Row className="text-center justify-content-center link-icons my-4 mx-auto">
      <Link href={github}>
        <a className="mx-4">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faCode} className="fontAwesomeIcon p2" />
          </div>
        </a>
      </Link>
      <Link href={live}>
        <a className="mx-4">
          <div className="icon-wrapper">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="fontAwesomeIcon"
            />
          </div>
        </a>
      </Link>
    </Row>
  );
}

export default LinkIcons;
