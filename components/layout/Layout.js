import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export const siteTitle = "Therese Lybo - Front-end Development Student";

const Layout=({ children })=> {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="description"
          content="Personal website for Therese Lybo. Contains projects, blog posts and contact information"
        />
        <meta
          property="og:image"
          content="https://lybo.dev/design2/ma3/images/profile.png"
        />
        <meta property="og:url" content="https://lybo.dev/design2/ma3/" />
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

export default Layout