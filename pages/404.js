import Layout from "../components/Layout";
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
            <img src="./images/404.svg" alt="404 error" />
          </Fade>
          <Fade bottom>
            <h1 className="my-2">Oisann, noe rart skjedde</h1>
          </Fade>
          <Fade bottom>
            <p className="mx-auto">
              Har ikke peiling på hva, er tross alt fremdeles student. Gå gjerne
              tilbake og se på noe annet!
            </p>
          </Fade>
        </Container>
      </div>
    </Layout>
  );
}
