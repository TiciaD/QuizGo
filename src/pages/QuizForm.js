import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function QuizForm() {
  return (
    <div>
      <Container className="register-container">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center mt-2">
              <Card.Body>
                <Card.Title className="text-primary fw-bold fs-1 pt-2">
                  Quiz Creator
                </Card.Title>
                <Container>
                  <Form
                    noValidate
                    // validated={!errors}
                    // onSubmit={handleSubmit}
                  >
                    <Row className="flex-column justify-content-center align-items-center text-primary">
                      <Form.Group
                        as={Col}
                        lg="6"
                        controlId="validationCustomEmail"
                        className="mb-3"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Enter email"
                          //   onChange={(e) => setField("email", e.target.value)}
                          //   isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {/* {errors.email} */}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        lg="6"
                        controlId="validationCustomPassword"
                        className="mb-4"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Enter Password"
                          //   onChange={(e) =>
                          //     setField("password", e.target.value)
                          //   }
                          //   isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {/* {errors.password} */}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="justify-content-center align-items-center">
                      <Col md={6}>
                        <Button
                          variant="outline-primary"
                          type="submit"
                          className="fw-bold border-3 rounded-pill fs-4 px-5"
                        >
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
