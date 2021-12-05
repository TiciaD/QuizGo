import React, { useContext } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import quizContext from "../utilities/quiz-context";
import "./Home.css";

function Home() {
  const { isAuth, setAuth } = useContext(quizContext);
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
              (
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
              )
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
