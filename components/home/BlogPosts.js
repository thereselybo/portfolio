import Link from "next/link";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

const BlogPosts = ({ posts }) => {
  return (
    <Container>
      <h2>Blog posts</h2>
      <Row className="mb-5 blog-posts">
        {posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <Col xs={12} md={4} key={title}>
            <Card className="mb-3">
              <Card.Body>
                <Link href={"/post/[slug]"} as={`/post/${slug}`} passHref>
                  <Card.Title>{title}</Card.Title>
                </Link>
                <Card.Subtitle>{date}</Card.Subtitle>
                <Card.Text className="mt-3">{description}</Card.Text>
                <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                  <Button className="reg-btn">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BlogPosts;
