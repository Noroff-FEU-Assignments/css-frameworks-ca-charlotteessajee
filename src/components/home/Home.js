import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Slider from "./Slider";
import styles from "./Home.module.css";
import { TabContainer } from "react-bootstrap";

function Home() {
  return (
    <div className={styles.linearBackground}>
      <Slider />
      <Container>
        <h1 className={styles.heading}>We do YAY things</h1>
        <p className={styles.paragraph}>
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
          rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
          finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
          consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
          euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </p>

        <div className={styles.accordionContainer}>
          <Accordion defaultActiveKey="0" className="d-md-none">
            <Card>
              <Card.Header className={styles.accordionHeading}>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className={styles.subHeading}
                >
                  First
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className={styles.accordionBody}>
                  <img
                    className={styles.image}
                    src={window.location.origin + "/Tab images/tab-1.jpg"}
                    alt="oldschool television"
                  />
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <p className={styles.share}>
                    Share <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className={styles.accordionHeading}>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  className={styles.subHeading}
                >
                  Second
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className={styles.accordionBody}>
                  <img
                    className={styles.image}
                    src={window.location.origin + "/Tab images/tab-2.jpg"}
                    alt="wall of pictures"
                  />
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <p className={styles.share}>
                    Share <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className={styles.accordionHeading}>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="2"
                  className={styles.subHeading}
                >
                  Third
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className={styles.accordionBody}>
                  <img
                    className={styles.image}
                    src={window.location.origin + "/Tab images/tab-3.jpg"}
                    alt="window with crack"
                  />
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <p className={styles.share}>
                    Share <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div className="d-none d-md-block">
          <div className={styles.tabsContainer}>
            <Tabs
              defaultActiveKey="first"
              id="uncontrolled-tab-example"
              className="mb-3"
              className={styles.tabNav}
            >
              <Tab eventKey="first" title="First">
                <div className={styles.tabContainer}>
                  <Col md={4}>
                    <img
                      className={styles.image}
                      src={window.location.origin + "/Tab images/tab-1.jpg"}
                      alt="oldschool television"
                    />
                  </Col>
                  <Col md={8}>
                    <p>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </p>
                    <p className={styles.share}>
                      Share <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                    </p>
                  </Col>
                </div>
              </Tab>

              <Tab eventKey="second" title="Second">
                <div className={styles.tabContainer}>
                  <Col md={4}>
                    <img
                      className={styles.image}
                      src={window.location.origin + "/Tab images/tab-2.jpg"}
                      alt="wall of pictures"
                    />
                  </Col>
                  <Col md={8}>
                    <p>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </p>
                    <p className={styles.share}>
                      Share <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                    </p>
                  </Col>
                </div>
              </Tab>
              <Tab eventKey="third" title="Third">
                <div className={styles.tabContainer}>
                  <Col md={4}>
                    <img
                      className={styles.image}
                      src={window.location.origin + "/Tab images/tab-3.jpg"}
                      alt="window with crack"
                    />
                  </Col>
                  <Col md={8}>
                    <p>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.
                    </p>
                    <p className={styles.share}>
                      Share <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                    </p>
                  </Col>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
