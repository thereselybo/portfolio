import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export const siteTitle = "Therese Lybo - Student frontend-utvikling";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="description"
          content="Personalig nettside for Therese Lybo. Prosjekter, kontaktinformasjon og annet rart"
        />
        <meta
          property="og:image"
          content="https://lybo.dev/design2/ma3/images/profile.png"
        />
        <meta property="og:url" content="https://lybo.dev/" />
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
