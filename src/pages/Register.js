import React, { useState } from "react";
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
  const [registerForm, setRegisterForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const setField = (field, value) => {
    setRegisterForm({
      ...registerForm,
      [field]: value,
    });
    console.log(registerForm);
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { username, email, password } = registerForm;
    const newErrors = {};

    // username errors
    if (!username || username === "")
      newErrors.username = "username cannot be blank!";
    else if (username.length > 30) newErrors.username = "username is too long!";
    else if (username.length < 5) newErrors.username = "username is too short!";

    // email errors
    if (!email || email === "") newErrors.email = "email cannot be blank!";
    else if (email.length > 40) newErrors.email = "email is too long!";
    else if (!email.includes("@") || !email.includes(".com"))
      newErrors.email = "email must include @ or .com!";

    // password errors
    if (!password || password === "")
      newErrors.password = "password cannot be blank!";
    else if (password.length > 40) newErrors.password = "password is too long!";
    else if (password.length < 8) newErrors.password = "password is too short!";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      alert("Submission successful!");
    }
  };
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
                  <Form noValidate validated={!errors} onSubmit={handleSubmit}>
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
                            onChange={(e) =>
                              setField("username", e.target.value)
                            }
                            isInvalid={!!errors.username}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.username}
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
                          onChange={(e) => setField("email", e.target.value)}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
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
                          onChange={(e) => setField("password", e.target.value)}
                          isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
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
