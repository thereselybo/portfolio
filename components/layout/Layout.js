import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head pageTitle={title} />
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
