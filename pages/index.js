import axios from "axios";
import fs from "fs";
import matter from "gray-matter";
import { BASE_URL, TECHS_ENDPOINT } from "../constants/api";

import Layout from "../components/layout/Layout";
import About from "../components/home/About";
import Techs from "../components/home/Techs";
import Fade from "react-reveal/Fade";
import BlogPosts from "../components/home/BlogPosts";

const Home = ({ posts, techs }) => {
  return (
    <Layout>
      <div id="index">
        <Fade bottom>
          <About />
        </Fade>
        <Fade bottom>
          <Techs techs={techs} />
        </Fade>
        <Fade bottom>
          <BlogPosts posts={posts} />
        </Fade>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
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

  let techs = [];

  const url = `${BASE_URL}${TECHS_ENDPOINT}`;

  try {
    const res = await axios.get(url);
    techs = res.data.techs;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      posts,
      techs,
    },
  };
};
