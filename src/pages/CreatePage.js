import React, { useContext, useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userQuizContext from "../utilities/user-quiz-context";
import "./Quiz.css";

export default function CreatePage() {
  const [error, setError] = useState(false);
  const { quizName, setQuizName } = useContext(userQuizContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quizName) {
      setError(false);
      navigate("/quizform");
    } else {
      setError(true);
    }
  };

  return (
    <div className="Quiz-page">
      <Container className="my-container">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center mt-2 mx-3">
              <Card.Title className="text-primary fs-1 fw-bold mt-5 pt-3">
                Enter a Name for your Quiz
              </Card.Title>
              <Card.Body>
                <Form>
                  <Row className="d-flex flex-column g-3 align-items-center">
                    {error && (
                      <Col
                        md={6}
                        className="px-1 py-1 fs-5 rounded bg-danger shadow-sm text-white mb-2"
                      >
                        Please Enter a Quiz Name!
                      </Col>
                    )}
                    <Col md={8} className="mb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Quiz Name"
                        onChange={(e) => setQuizName(e.target.value)}
                      />
                    </Col>
                    <Col xs="auto">
                      <Button
                        type="submit"
                        className="fw-bold border-3 rounded-pill fs-3 px-5"
                        variant="outline-primary"
                        onClick={handleSubmit}
                      >
                        Set Quiz Name
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
