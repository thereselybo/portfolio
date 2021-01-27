import Head from "next/head";

import ReactGA from "react-ga";
import auth from "./auth.ts"; // Sample authentication provider

import Header from "./Header";
import Footer from "./Footer";

export const siteTitle = "Therese Lybo - Student frontend-utvikling";
export const desc =
  "Personlig nettside for Therese Lybo. Prosjekter, kontaktinformasjon og annet rart";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content={desc} />
        <meta
          name="image"
          property="og:image"
          content="https://lybo.dev/images/profile-gradient.png"
        />
        <meta property="og:url" content="https://lybo.dev/" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={desc} />
        {/* REMEMBER TO ADD MORE META TAGS */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-168222250-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "<UA-168222250-1>");
    `,
          }}
        ></script>
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
