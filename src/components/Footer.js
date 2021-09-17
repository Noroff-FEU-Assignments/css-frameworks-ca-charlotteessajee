import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <Container>
          <Row>
            <Col xs={12} md={4} className={styles.icons}>
              <i class="fab fa-youtube"></i>
              <i class="fab fa-vimeo-v"></i>
            </Col>
            <Col xs={6} md={4} className={styles.email}>
              hello@yay.com
            </Col>
            <Col xs={6} md={4} className={styles.copyright}>
              Copyright 2020
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
