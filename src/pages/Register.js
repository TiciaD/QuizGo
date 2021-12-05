import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="Register-page">
      <Container className="register-container">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center mt-2">
              <Card.Body>
                <Card.Title className="text-primary fw-bold fs-1 pt-2">
                  Sign Up!
                </Card.Title>
                <Container>
                  <Form>
                    <Row className="flex-column justify-content-center align-items-center text-primary">
                      <Form.Group
                        as={Col}
                        lg="6"
                        controlId="validationCustomUsername"
                        className="mb-3"
                      >
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            @
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please choose a username.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
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
                        />
                        <Form.Control.Feedback>
                          Looks good!
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
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="justify-content-center align-items-center gy-2">
                      <Col lg={8}>
                        <Button
                          variant="outline-primary"
                          type="submit"
                          className="fw-bold border-3 rounded-pill fs-4 px-5"
                        >
                          Submit
                        </Button>
                      </Col>
                      <Col lg={8}>
                        <Button
                          variant="outline-primary"
                          className="fw-bold border-3 rounded-pill px-4"
                          onClick={() => navigate("/login")}
                        >
                          Already Registered?
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
