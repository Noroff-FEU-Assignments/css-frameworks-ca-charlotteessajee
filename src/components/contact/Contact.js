import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div className={styles.linearBackground}>
        <Container className={styles.contactContainer}>
          <h1 className={styles.heading}>Submit your details</h1>
          <Row>
            <Col md={6} className="order-md-2">
              <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                  <div className={styles.icons}>
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div>hello@yay.com</div>
                </div>

                <div className={styles.contactInfo}>
                  <div className={styles.icons}>
                    <i class="fas fa-phone"></i>
                  </div>
                  <div>123 456 7890</div>
                </div>

                <div className={styles.contactInfo}>
                  <div className={styles.icons}>
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    123 Some Street <br />
                    Somewhere <br />
                    Some City <br />
                    10000
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6} className="order-md-1">
              <Form className={styles.formContent}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicWebsite">
                  <Form.Label>Website</Form.Label>
                  <Form.Control type="website" placeholder="https://" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    className={styles.formCheck}
                    type="checkbox"
                    label="Allow us to sell your personal details to whomever we want"
                  />
                </Form.Group>
                <Button
                  className={styles.formButton}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contact;
