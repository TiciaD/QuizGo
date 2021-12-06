import React, { useContext, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import quizContext from "../utilities/quiz-context";
import authContext from "../utilities/auth-context";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";

function Home() {
  const { setQuestions, setScore, setCurrentQuestion } =
    useContext(quizContext);

  const { token, setToken, getUserData, userData } = useContext(authContext);

  useEffect(() => {
    getUserData();
    setQuestions("");
    setCurrentQuestion(0);
    setScore(0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="Home-page">
      <Container className="mt-5">
        <Row>
          <Col className="my-title mb-5">QuizGo</Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row className="justify-content-center mx-auto">
          <Col md={8}>
            <Card className="intro-card rounded-0 d-flex justify-content-center align-items-center">
              {!token ? (
                <>
                  <Col md={12} className="mt-5 pt-5">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-1 px-5"
                      variant="outline-primary"
                      size="lg"
                      as={Link}
                      to="quizsettings/"
                    >
                      QuickPlay
                    </Button>
                  </Col>
                  <Col className="my-5">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-1 px-5"
                      variant="outline-primary"
                      size="lg"
                      as={Link}
                      to="/register"
                    >
                      SignUp
                    </Button>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={12} className="mt-4 fs-1 text-primary">
                    Welcome {userData.username}!
                  </Col>
                  <Col md={12} className="mt-3">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-1 px-5"
                      variant="outline-primary"
                      size="lg"
                      as={Link}
                      to="quizsettings/"
                    >
                      QuickPlay
                    </Button>
                  </Col>
                  <Col md={12} className="mt-3">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-1 px-5"
                      variant="outline-primary"
                      size="lg"
                      as={Link}
                      to="quizform/"
                    >
                      Create a Quiz
                    </Button>
                  </Col>
                  <Col md={12} className="mt-3 mb-5">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-1 px-5"
                      variant="outline-primary"
                      size="lg"
                      as={Link}
                      to="profile/"
                    >
                      My Quizzes
                    </Button>
                  </Col>
                </>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
