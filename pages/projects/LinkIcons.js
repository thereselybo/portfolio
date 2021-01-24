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
  return (
    <Row className="text-center justify-content-center link-icons my-4 mx-auto">
      {/* <Link href={props.case_study}>
        <a className="mx-4">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faSearchPlus} className="fontAwesomeIcon" />
          </div>
        </a>
      </Link> */}
      <Link href={props.github_repo}>
        <a className="mx-4">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faCode} className="fontAwesomeIcon p2" />
          </div>
        </a>
      </Link>
      <Link href={props.live_project}>
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
