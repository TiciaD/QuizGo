import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import authContext from "../utilities/auth-context";
import quizContext from "../utilities/quiz-context";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import bookQuestionMark20Filled from "@iconify/icons-fluent/book-question-mark-20-filled";
import "./QuizFeed.css";

function QuizFeed() {
  const { getAllQuizzes, allQuizzes } = useContext(authContext);
  const { setQuestions } = useContext(quizContext);

  const navigate = useNavigate();

  useEffect(() => {
    getAllQuizzes();
  }, [allQuizzes.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const setUserQuizzes = (index) => {
    setQuestions(allQuizzes[index].questions);
    navigate("/quiz");
  };

  return (
    <Container className="mb-5">
      <Row>
        <Col className="Pick-title text-light display-5 fw-bold mb-5">
          Top Picks
        </Col>
      </Row>
      <Row className="d-flex justify-content-evenly g-5">
        {/* Map over Col */}
        {allQuizzes ? (
          <>
            {allQuizzes
              .filter((item, idx) => idx < 10)
              .map((quiz, i) => {
                return (
                  <Col key={i} md={5}>
                    <Card className="quiz-Card rounded-0">
                      <Container className="quiz-Container">
                        <Row className="justify-content-center mt-2">
                          <Col className="card-title text-light fs-2" xs={10}>
                            <u>{quiz.name}</u>
                            <br />
                            <span className="fs-4">
                              Category: {quiz.categories?.category.type}
                            </span>
                          </Col>
                        </Row>
                        <Row className="mt-2 mb-4">
                          <Col xs={12}>
                            <Icon
                              className="book-icon"
                              icon={bookQuestionMark20Filled}
                              color="#f8f8f8"
                              height="100"
                            />
                          </Col>
                        </Row>
                        <Row className="align-items-center">
                          <Col className="fs-5 text-light" xs={9}>
                            Made By: {quiz.user.username}
                          </Col>
                          <Col xs={3}>
                            <Button
                              variant="outline-light"
                              className="fw-bold border-3 rounded-pill px-3"
                              onClick={() => setUserQuizzes(i)}
                            >
                              Play
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card>
                  </Col>
                );
              })}
          </>
        ) : (
          <Col></Col>
        )}
      </Row>
    </Container>
  );
}

export default QuizFeed;
