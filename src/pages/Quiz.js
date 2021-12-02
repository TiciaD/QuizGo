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
  //   const [options, setOptions] = useState("");
  //   const [currQuestion, setCurrQuestion] = useState(0);

  const { questions, currQuestion, setOptions, handleShuffle } =
    useContext(quizContext);

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQuestion]?.correct_answer,
          ...questions[currQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currQuestion]);

  const current = currQuestion + 1;
  const totalQues = questions.length;

  //   console.log(options);
  return (
    <div className="Quiz-page">
      <Container className="mb-5">
        <Row className="justify-content-center mx-auto">
          <Col md={10}>
            <Card className="intro-card rounded-0 d-flex justify-content-center mt-3">
              <Card.Body>
                <ProgressBar
                  className="my-bar mx-5 mt-4"
                  now={current * 10}
                  label={`${current}/${totalQues}`}
                />
                {questions ? (
                  <Question />
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
