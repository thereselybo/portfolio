import fs from "fs";
import path from "path";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown/with-html";
import Layout from "../../components/layout/Layout";
import { Container, Card } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Fade from "react-reveal/Fade";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const Post = ({ content }) => {
  return (
    <Layout title="Blog">
      <article>
        <Container className="blog">
          <Fade bottom>
            <Card className="p-4">
              <ReactMarkdown
                escapeHtml={false}
                source={content}
                renderers={{ code: CodeBlock }}
              />
            </Card>
          </Fade>
        </Container>
      </article>
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const files = fs.readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/posts", slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: `${content}`,
      frontmatter,
    },
  };
};
