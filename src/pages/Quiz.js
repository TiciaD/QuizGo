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
    if (questions) {
      if (questions[currQuestion].question.question) {
        setOptions(
          handleShuffle(
            questions[currQuestion].question.possible_answers.split("|")
          )
        );
      } else {
        setOptions(
          handleShuffle([
            questions[currQuestion]?.correct_answer,
            ...questions[currQuestion]?.incorrect_answers,
          ])
        );
      }
    }
  }, [questions, currQuestion]); // eslint-disable-line react-hooks/exhaustive-deps

  const current = currQuestion + 1;
  const totalQues = questions ? questions.length : null;

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
                      now={current * (100 / totalQues)}
                      label={`${current}/${totalQues}`}
                    />

                    <Question />
                  </>
                ) : (
                  <div>
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">
                        Loading Question...
                      </span>
                    </Spinner>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
