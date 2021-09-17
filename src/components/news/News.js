import React from "react";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./News.module.css";

function News() {
  return (
    <>
      <div className={styles.linearBackground}>
        <Container>
          <h1 className={styles.heading}>News</h1>
          <Pagination className={styles.pagination}>
            <Pagination.Item className={styles.pageNavActive} active>
              {1}
            </Pagination.Item>
            <Pagination.Item className={styles.pageNav}>{2}</Pagination.Item>
            <Pagination.Item className={styles.pageNav}>{3}</Pagination.Item>
            <Pagination.Item className={styles.pageNav}>{4}</Pagination.Item>
          </Pagination>

          <Row>
            <Col className={styles.card} md={3}>
              <Card className={styles.cardContainer}>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="News images/news-1.jpg"
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Nunc porttitor vel
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Nunc malesuada eget est fringilla dapibus.
                  </Card.Text>
                  <Button variant="primary" className={styles.button}>
                    More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className={styles.card} md={3}>
              <Card className={styles.cardContainer}>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="News images/news-2.jpg"
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Nunc porttitor vel
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Nunc malesuada eget est fringilla dapibus.
                  </Card.Text>
                  <Button variant="primary" className={styles.button}>
                    More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className={styles.card} md={3}>
              <Card className={styles.cardContainer}>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="News images/news-3.jpg"
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Nunc porttitor vel
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Nunc malesuada eget est fringilla dapibus.
                  </Card.Text>
                  <Button variant="primary" className={styles.button}>
                    More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className={styles.card} md={3}>
              <Card className={styles.cardContainer}>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="News images/news-4.jpg"
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Nunc porttitor vel
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Nunc malesuada eget est fringilla dapibus.
                  </Card.Text>
                  <Button variant="primary" className={styles.button}>
                    More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col className={styles.card} md={3}>
              <Card className={styles.cardContainer}>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="News images/news-5.jpg"
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Nunc porttitor vel
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Nunc malesuada eget est fringilla dapibus.
                  </Card.Text>
                  <Button variant="primary" className={styles.button}>
                    More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className={styles.card} md={3}>
              <Card className={styles.cardContainer}>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="News images/news-6.jpg"
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Nunc porttitor vel
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Nunc malesuada eget est fringilla dapibus.
                  </Card.Text>
                  <Button variant="primary" className={styles.button}>
                    More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className={styles.card} md={3}>
              <Card className={styles.cardContainer}>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="News images/news-7.jpg"
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Nunc porttitor vel
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Nunc malesuada eget est fringilla dapibus.
                  </Card.Text>
                  <Button variant="primary" className={styles.button}>
                    More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className={styles.card} md={3}>
              <Card className={styles.cardContainer}>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="News images/news-8.jpg"
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Nunc porttitor vel
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Nunc malesuada eget est fringilla dapibus.
                  </Card.Text>
                  <Button variant="primary" className={styles.button}>
                    More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className={styles.paginationBottom}>
            <Pagination className={styles.pagination}>
              <Pagination.Item className={styles.pageNavActive} active>
                {1}
              </Pagination.Item>
              <Pagination.Item className={styles.pageNav}>{2}</Pagination.Item>
              <Pagination.Item className={styles.pageNav}>{3}</Pagination.Item>
              <Pagination.Item className={styles.pageNav}>{4}</Pagination.Item>
            </Pagination>
          </div>
        </Container>
      </div>
    </>
  );
}

export default News;
