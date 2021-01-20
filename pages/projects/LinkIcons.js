import React from "react";
import Link from "next/link";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faCode,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

function LinkIcons() {
  return (
    <Row className="text-center justify-content-center link-icons">
      {/* <Col className="text-center"> */}
      <Link href="#">
        <a className="mx-4">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faSearchPlus} className="fontAwesomeIcon" />
          </div>
        </a>
      </Link>
      <Link href="https://github.com/thereselybo/shadowball">
        <a className="mx-4">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faCode} className="fontAwesomeIcon p2" />
          </div>
        </a>
      </Link>
      <Link href="http://lybo.dev/ixd/ca-v2">
        <a className="mx-4">
          <div className="icon-wrapper">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="fontAwesomeIcon"
            />
          </div>
        </a>
      </Link>
      {/* </Col> */}
    </Row>
  );
}

export default LinkIcons;
