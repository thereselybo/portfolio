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
        <title>Prosjekter</title>
      </Head>
      <Container className="projects">
        <Fade bottom>
          <h1>Prosjekter</h1>
        </Fade>
        <Project
          title="Trinkets"
          techs={["HTML", "SCSS", "Javascript", "Strapi"]}
          intro="Oppgaven er å bygge et e-commerce-prosjekt med en admin for å oppdatere og slette produkter, samt en frontend. Frontenden må være mobil-responsiv, og skal populeres fra et API bygget på egen hånd ved hjelp av et headless CMS. "
          case_study="#"
          github_repo="https://github.com/thereselybo/trinkets"
          live_project="https://trinkets.lybo.dev/"
          image="/images/trinkets-screens.jpg"
        />

        <Project
          title="SpaceX"
          techs={["HTML", "CSS", "Javascript"]}
          intro="Oppgaven er å bygge en mikroside for SpaceX eller NASA for å øke bevissthet rundt aktivitet i verdensrommet. Mikrosiden skal bygges opp av fire mobilresponsive sider, og skal blant annet inneholde en tidslinje over rakettutskytninger, et JavaScript-validert kontaktskjema, og linker til ytterligere informasjon."
          case_study="/post/3-caste-study-spacex"
          github_repo="https://github.com/thereselybo/spacex"
          live_project="https://spacex.lybo.dev/"
          image="/images/spacex-screenshot.jpg"
        />

        <Project
          title="ShadowBall"
          techs={["HTML", "CSS", "Bootstrap", "JavaScript", "IxD"]}
          intro="Oppgaven er å redesigne og rekonstruere en nettside, basert på IxD-prinsipper kombinert med kunnskap fra tidligere fag. Målet er å trene på ferdigheter oppnådd fra Interaksjonsdesign-faget, samt ferdigheter i HTML, CSS og JavaScript."
          case_study="#"
          github_repo="https://github.com/thereselybo/shadowball"
          live_project="https://shadowball.lybo.dev/"
          image="/images/shadowball-desktop.jpg"
        />

        {/* <Project
          title="Flower Power"
          techs={["HTML", "CSS", "Javascript", "CMS"]}
          intro="Oppgaven er å bygge én enkeltstående side som henter produkter fra et Wordpress REST API. Produktoversikten skal være en enkeltstående side, bygd opp av HTML, CSS og JavaScript, og skal inkludere produktnavn, bilder og priser. Hvert produkt skal ha en call-to-action-knapp for å se mer."
          case_study="#"
          github_repo="https://github.com/thereselybo/flower-power"
          live_project="https://lybo.dev/cms/ca/"
          image="/images/flowerpower-screenshot.jpg"
        /> */}

        <Project
          title="Community Science Museum"
          techs={["HTML", "CSS", "Javascript"]}
          intro="Oppgaven er å presentere et mobilresponsivt nettsted inneholdende minst 4-6 sider for et lokalt interaktivt vitenskapsmuseum. Nettstedet skal være informativt og tiltalende for unge elever og deres foreldre."
          case_study="/post/2-caste-study-science-museum"
          github_repo="https://github.com/thereselybo/science-museum"
          live_project="https://sciencemuseum.lybo.dev/"
          image="/images/science-museum-desktop.jpg"
        />

        <Project
          title="Re-Cycle"
          techs={["HTML", "CSS", "Javascript"]}
          intro="Oppgaven er å bygge en mobilresponsiv nettside for et selskap som tilbyr miljøvennlige, guidede sykkelturer. Den bør bestå av minst 4 sider: hjemmeside, om oss, kontakt, og en oversikt over rutene."
          case_study="#"
          github_repo="https://github.com/thereselybo/re-cycle"
          live_project="https://recycle.lybo.dev/"
          image="/images/recycle-collection.jpg"
        />
      </Container>
    </Layout>
  );
}
