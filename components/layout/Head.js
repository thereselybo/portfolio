import NextHead from "next/head";

const Head = ({ pageTitle = "" }) => {
  const title = `${pageTitle} ${
    pageTitle ? " | " : ""
  } Therese Lybo - Front-end Development Student`;

  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta
        name="description"
        content="Personal website for Therese Lybo. Contains projects, blog posts and contact information"
      />
      <meta property="og:image" content="https://lybo.dev/images/logo.svg" />
      <meta property="og:url" content="https://lybo.dev" />
    </NextHead>
  );
};

export default Head;
