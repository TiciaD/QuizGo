import React, { useEffect, useContext } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  ProgressBar,
  Spinner,
} from "react-bootstrap";
import { Question } from "../components";
import quizContext from "../utilities/quiz-context";
import "./Quiz.css";

export default function Quiz() {
  const { questions, currQuestion, setOptions, handleShuffle } =
    useContext(quizContext);

  useEffect(() => {
    console.log({ QuizQuestions: questions });
    setOptions(
      questions &&
        handleShuffle([
          questions[currQuestion]?.correct_answer,
          ...questions[currQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currQuestion]);

  const current = currQuestion + 1;
  const totalQues = questions ? questions.length : null;

  //   console.log(options);
  return (
    <div className="Quiz-page">
      <Container className="my-container">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center mt-2">
              <Card.Body>
                {questions ? (
                  <>
                    <ProgressBar
                      className="my-bar mx-5 mt-4"
                      variant="primary"
                      now={current * 10}
                      label={`${current}/${totalQues}`}
                    />

                    <Question />
                  </>
                ) : (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
