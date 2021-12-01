import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  ProgressBar,
} from "react-bootstrap";
import { Question } from "../components";
import "./Quiz.css";

export default function Quiz({ questions, score, setScore, setQuestions }) {
  const [options, setOptions] = useState("");
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {
    console.log(questions);
    // setOptions(
    //   questions && [
    //     questions[currQuestion]?.correct_answer,
    //     ...questions[currQuestion]?.incorrect_answers,
    //   ]
    // );
    setOptions(
      questions &&
        handleShuffle([
          questions[currQuestion]?.correct_answer,
          ...questions[currQuestion]?.incorrect_answers,
        ])
    );
  }, [questions]);

  console.log(options);

  const handleShuffle = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="Quiz-page">
      <Container className="mb-5">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center my-3">
              <Card.Body>
                <ProgressBar
                  className="my-bar mx-5 mt-4"
                  now={10}
                  label={"1/10"}
                />
                <Question
                  currQuestion={currQuestion}
                  setCurrQuestion={setCurrQuestion}
                  questions={questions}
                  options={options}
                  correct={questions[currQuestion]?.correct_answer}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
