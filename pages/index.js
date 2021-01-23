import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/Layout";
import About from "../components/About";
import Techs from "../components/Techs";

import fs from "fs";
import matter from "gray-matter";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

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
          <Container>
            <h2>Blog posts</h2>
            <Row className="mb-5 blog-posts">
              {posts.map(
                ({ frontmatter: { title, description, date }, slug }) => (
                  <Col xs={12} md={4} key={title}>
                    <Card className="mb-3">
                      <Card.Body>
                        <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                          <a>
                            <Card.Title>{title}</Card.Title>
                          </a>
                        </Link>
                        <Card.Subtitle>{date}</Card.Subtitle>
                        <Card.Text className="mt-3">{description}</Card.Text>
                        <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                          <Button className="reg-btn">Read more</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </Container>
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
