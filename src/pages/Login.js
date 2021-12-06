import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import AuthContext from "../utilities/auth-context";
import "./Register.css";

function Login() {
  const [loginForm, setLoginForm] = useState({});
  const [errors, setErrors] = useState({});

  const { token, setToken, login, setAuth, getUserData } =
    useContext(AuthContext);

  const getUser = (email, pass) => {
    const data = {
      username: email,
      password: pass,
      grant_type: "password",
      client_id: 2,
      client_secret: "2V5W1rVqSAOG7mn6s0wQTUxpRMawBVuEDwKtEleI",
      scope: "",
    };
    login(data);
  };

  useEffect(() => {
    let userToken = window.localStorage.getItem("token");
    if (userToken) {
      setToken(userToken);
      getUserData({ token: userToken });
      setAuth(true);
      navigate("/");
    }
  }, [token]);

  const navigate = useNavigate();

  const setField = (field, value) => {
    setLoginForm({
      ...loginForm,
      [field]: value,
    });
    console.log(loginForm);
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { email, password } = loginForm;
    const newErrors = {};

    // email errors
    if (!email || email === "") newErrors.email = "email cannot be blank!";
    else if (email.length > 40) newErrors.email = "email is too long!";
    else if (!email.includes("@") || !email.includes("."))
      newErrors.email = "email must include @ or .!";

    // password errors
    if (!password || password === "")
      newErrors.password = "password cannot be blank!";
    else if (password.length > 40) newErrors.password = "password is too long!";
    else if (password.length < 5) newErrors.password = "password is too short!";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    const { email, password } = loginForm;
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      alert("Submission successful!");
      getUser(email, password);
    }
  };

  return (
    <div className="Register-page">
      <Container className="register-container">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center mt-2">
              {!token ? (
                <Card.Body>
                  <Card.Title className="text-primary fw-bold fs-1 pt-2">
                    Login
                  </Card.Title>
                  <Container>
                    <Form
                      noValidate
                      validated={!errors}
                      onSubmit={handleSubmit}
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
                            onChange={(e) =>
                              setField("password", e.target.value)
                            }
                            isInvalid={!!errors.password}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
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
              ) : (
                <Navigate to="/" />
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
