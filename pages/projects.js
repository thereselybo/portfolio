import axios from "axios";

import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Card, Container } from "react-bootstrap";
import Project from "../components/projects/Project.js";
import Fade from "react-reveal/Fade";
import { BASE_URL, PROJECTS_ENDPOINT } from "../constants/api";

const Projects = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Container className="projects">
        <Fade bottom>
          <h1>Projects</h1>
        </Fade>
        {projects.length ? (
          projects.map((project, i) => <Project project={project} key={i} />)
        ) : (
          <Card>
            <Card.Body>
              <Card.Title>Sorry, no projects</Card.Title>
            </Card.Body>
          </Card>
        )}
      </Container>
    </Layout>
  );
};

export default Projects;

export const getStaticProps = async () => {
  let projects = [];

  const url = `${BASE_URL}${PROJECTS_ENDPOINT}`;

  try {
    const res = await axios.get(url);
    projects = res.data;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      projects,
    },
  };
};
