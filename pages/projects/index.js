import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Container, Card, Col, Row, Button } from "react-bootstrap";

const baseUrl = "https://api.github.com/users/thereselybo/repos?type=owner";

async function getRepos() {
  try{
    const response = await fetch(baseUrl);
    const json = await response.json();
    console.log(json);
   }
   catch(error) {
    console.log(error);
  }
}

getRepos()

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Container className="projects">
        <h1>Projects</h1>
        <Card className="card-vertical mb-5 d-block d-md-none">
          <Card.Img variant="top" src="/images/shadowball-desktop.jpg" />
          <Card.Body>
            <Card.Title>ShadowBall</Card.Title>
            <Card.Subtitle>
              HTML | CSS | Bootstrap | JavaScript | IxD
            </Card.Subtitle>
            <Card.Text className="mt-3">
              The objective of this project is to provide either NASA or SpaceX
              with a microsite which will contribute to raise awareness about
              space program activity.
            </Card.Text>
            <Link href="https://lybo.dev/ixd/ca-v2/">
              <Button variant="primary" className="reg-btn">
                Se live side
              </Button>
            </Link>
          </Card.Body>
        </Card>

        <Card className="card-horizontal d-none d-md-block">
          <Row>
            <Col className="pr-0">
              <Card.Body className="p-4 d-flex flex-column">
                <Card.Title>ShadowBall</Card.Title>
                <Card.Subtitle>
                  HTML | CSS | Bootstrap | JavaScript | IxD
                </Card.Subtitle>
                <Card.Text className="mt-3">
                  The goal of this assignment is to practice skills acquired
                  from the Interaction Design course, as well as those from
                  HTML, CSS and JavaScript.
                </Card.Text>
                <Link href="https://lybo.dev/ixd/ca-v2/">
                  <Button className="mt-auto reg-btn" variant="primary">
                    Se live side
                  </Button>
                </Link>
              </Card.Body>
            </Col>
            <Col className="pl-0 img-container">
              <Card.Img src="/images/shadowball-desktop.jpg" />
            </Col>
          </Row>
        </Card>
      </Container>
    </Layout>
  );
}