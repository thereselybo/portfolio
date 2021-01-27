import Head from "next/head";
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
        <meta property="og:image" content="https://lybo.dev/images/logo.svg" />
        <meta property="og:url" content="https://lybo.dev/" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={desc} />
        {/* REMEMBER TO ADD MORE META TAGS */}
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
