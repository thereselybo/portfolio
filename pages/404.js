import Layout from "../components/layout/Layout";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function FourOhFour() {
  return (
    <Layout>
      <Head>
        <title>404 Error</title>
      </Head>
      <div id="error-page">
        <Container className="text-center">
          <Fade bottom>
            <img src="/images/404.svg" alt="404 error" />
          </Fade>
          <Fade bottom>
            <h1 className="my-2">Woops, something strange happened</h1>
          </Fade>
          <Fade bottom>
            <p className="mx-auto">
              I have no idea what though, I am after all still just a student.
              Feel free to go back and look at something else!
            </p>
          </Fade>
        </Container>
      </div>
    </Layout>
  );
}
