import Router from "next/router";
import NProgress from "nprogress";
import "../sass/styles.scss";

//Binding events.
import "../sass/styles.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
