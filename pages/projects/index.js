import React from "react";
import Head from "next/head";
// import Link from "next/link";
import Layout from "../../components/Layout";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
// import LinkIcons from "./LinkIcons";
import projectHover from "./projectHover";
import Project from "./Project";

const baseUrl = "https://api.github.com/users/thereselybo/repos?type=owner";

// async function getRepos() {
//   try {
//     const response = await fetch(baseUrl);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getRepos();

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Container className="projects">
        <h1>Projects</h1>
        <Project
          title="ShadowBall"
          techs="HTML, CSS, Bootstrap, JavaScript, IxD"
          intro="The objective of this project is to provide either NASA or SpaceX
      with a microsite which will contribute to raise awareness about
      space program activity."
          case_study="#"
          github_repo="https://github.com/thereselybo/shadowball"
          live_project="http://lybo.dev/ixd/ca-v2"
          image="/images/shadowball-desktop.jpg"
        />
      </Container>
    </Layout>
  );
}

// projectHover();
