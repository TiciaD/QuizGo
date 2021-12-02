import React, { useContext } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import quizContext from "../utilities/quiz-context";
import "./Result.css";

const Result = () => {
  const { questions, score, setScore, setCurrentQuestion } =
    useContext(quizContext);
  const navigate = useNavigate();

  const handleReset = () => {
    setScore(0);
    setCurrentQuestion(0);
    navigate("/quizsettings");
  };

  return (
    <div>
      <div className="Result-page">
        <Container className="mb-5">
          <Row className="justify-content-center mx-auto">
            <Col md={10}>
              <Card className="intro-card rounded-0 d-flex justify-content-center mt-3">
                <Card.Body>
                  <Card.Title className="text-primary fw-bold fs-1 pt-4">
                    Quiz Result
                  </Card.Title>

                  <Col className="fs-2">Your Score:</Col>
                  <Col className="fs-2 mb-3 fw-bold">{`${score}/${questions.length}`}</Col>
                  <Col className="fs-3 mx-3 mb-3">
                    Sign Up to save your score, create your own quizzes, access
                    extra categories and more!
                  </Col>
                  <Col className="m-2">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-2 px-5"
                      variant="outline-primary"
                      size="lg"
                      onClick={() => navigate("/register")}
                    >
                      SignUp
                    </Button>
                  </Col>
                  <Col className="m-2 pb-3">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-4 px-3"
                      variant="outline-primary"
                      size="lg"
                      onClick={handleReset}
                    >
                      Play Again
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Result;