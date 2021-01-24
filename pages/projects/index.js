import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import Project from "./Project.js";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Container className="projects">
        <Fade bottom>
          <h1>Projects</h1>
        </Fade>
        <Project
          title="SpaceX"
          techs={["HTML", "CSS", "Javascript"]}
          intro="The objective of this project is to provide either NASA or SpaceX with a microsite which will contribute to raise awareness about space program activity. The microsite is to be made up of at least four responsive pages, among other things consisting of a timeline to display launches, a JavaScript validated contact form and links to provide more information."
          case_study="/post/3-caste-study-spacex"
          github_repo="https://github.com/thereselybo/shadowball"
          live_project="http://lybo.dev/ixd/ca-v2"
          image="/images/spacex-screenshot.jpg"
        />

        <Project
          title="ShadowBall"
          techs={["HTML", "CSS", "Bootstrap", "JavaScript", "IxD"]}
          intro="The object is to redesign and rebuild a website based on IxD principals combined with knowledge from previous courses The goal of this assignment is to practice skills acquired from the Interaction Design course, as well as those from HTML, CSS and JavaScript."
          case_study="#"
          github_repo="https://github.com/thereselybo/shadowball"
          live_project="http://lybo.dev/ixd/ca-v2"
          image="/images/shadowball-desktop.jpg"
        />

        <Project
          title="Flower Power"
          techs={["HTML", "CSS", "Javascript", "CMS"]}
          intro="The goal of this project is to use the WordPress REST API to create a website displaying a list of products. The products page should be a standalone site, written using HTML, CSS and JavaScript, and include a list of all the: product names, images and prices. Each product should have a call-to-action button to 'View More'."
          case_study="#"
          github_repo="https://github.com/thereselybo/flower-power"
          live_project="https://lybo.dev/cms/ca/"
          image="/images/flowerpower-screenshot.jpg"
        />

        <Project
          title="Community Science Museum"
          techs={["HTML", "CSS", "Javascript"]}
          intro="For this project the object is to present a responsive website consisting of at least 4-6 pages for a local interactive science museum. The website is to attract primary and middle school children as well as families with young children."
          case_study="/post/2-caste-study-science-museum"
          github_repo="https://github.com/thereselybo/science-museum"
          live_project="https://lybo.dev/semproj1-v2/"
          image="/images/science-museum-desktop.jpg"
        />

        <Project
          title="Re-Cycle"
          techs={["HTML", "CSS", "Javascript"]}
          intro="The goal is to build a responsive website for a company that offer eco-friendly, guided cycling tours of a town. It should have 4 pages: home page, about us, contact us, and the list of routes/tours."
          case_study="#"
          github_repo="https://github.com/thereselybo/re-cycle"
          live_project="https://lybo.dev/htmlcss/ca-v2/"
          image="/images/recycle-collection.jpg"
        />
      </Container>
    </Layout>
  );
}
