import React, { useContext } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import quizContext from "../utilities/quiz-context";
import authContext from "../utilities/auth-context";
import "./Result.css";

const Result = () => {
  const { questions, score, setQuestions, setScore, setCurrentQuestion } =
    useContext(quizContext);

  const { token } = useContext(authContext);

  const navigate = useNavigate();

  const handleReset = () => {
    setScore(0);
    setCurrentQuestion(0);
    setQuestions("");
    navigate("/quizsettings");
  };

  return (
    <div className="Result-page">
      <Container className="result-container mb-5">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center mt-3 text-primary">
              <Card.Body>
                <Card.Title className="fw-bold fs-1 pt-4">
                  Quiz Result
                </Card.Title>

                <Col className="fs-2">Your Score:</Col>
                <Col className="fs-2 mb-3 fw-bold">{`${score}/${questions.length}`}</Col>
                {!token && (
                  <>
                    <Col className="fs-3 mx-3 mb-3">
                      Sign Up to save your score, create your own quizzes,
                      access extra categories and more!
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
                  </>
                )}
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
                {token && (
                  <Col className="m-2 pb-3">
                    <Button
                      className="fw-bold border-3 rounded-pill fs-4 px-3"
                      variant="outline-primary"
                      size="lg"
                      onClick={() => navigate("/quizform")}
                    >
                      Create Your Own Quiz!
                    </Button>
                  </Col>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Result;
