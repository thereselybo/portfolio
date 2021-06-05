import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";

import Layout, { siteTitle } from "../components/layout/Layout";
import About from "../components/home/About";
import Techs from "../components/home/Techs";
import Fade from "react-reveal/Fade";
import BlogPosts from "../components/home/BlogPosts";

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id="index">
        <Fade bottom>
          <About />
        </Fade>
        <Fade bottom>
          <Techs />
        </Fade>
        <Fade bottom>
          <BlogPosts posts={posts} />
        </Fade>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
