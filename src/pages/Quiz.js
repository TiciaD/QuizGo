import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./Quiz.css";

export default function Quiz({ questions, score, setScore, setQuestions }) {
  const [options, setOptions] = useState("");
  const [currQuestion, setcurrQuestion] = useState("");

  useEffect(() => {
    console.log(questions);
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
          <Col md={10} className="align-items-center">
            <Card className="intro-card rounded-0 d-flex justify-content-center align-items-center my-3">
              <Card.Body>
                <Card.Title className="text-primary fw-bold fs-1 pt-4">
                  Select Category
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
