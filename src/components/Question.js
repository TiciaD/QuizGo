import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import quizContext from "../utilities/quiz-context";
import { Container, Row, Col, Button } from "react-bootstrap";

const Question = () => {
  const [selectedItem, setSelected] = useState("");
  const [selectError, setSelectError] = useState("");

  const {
    currQuestion,
    setCurrentQuestion,
    questions,
    options,
    score,
    setScore,
  } = useContext(quizContext);

  const navigate = useNavigate();

  const decode = (data) => {
    return atob(data);
  };

  const question = questions[currQuestion].question;
  const correct = questions[currQuestion].correct_answer;
  const totalQues = questions.length - 1;
  const current = currQuestion + 1;

  const handleSelected = (i) => {
    if (selectedItem === i && selectedItem === correct) {
      return "bg-success";
    } else if (selectedItem === i && selectedItem !== correct) {
      return "bg-danger";
    } else if (i === correct) {
      return "bg-success";
    }
  };

  const handleChecked = (i) => {
    console.log(selectedItem);
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
    setSelectError(false);
  };

  const handleNext = () => {
    if (current > totalQues) {
      navigate("/result");
    } else if (selectedItem) {
      setCurrentQuestion(currQuestion + 1);
      setSelected();
    } else {
      setSelectError(true);
    }
  };
  return (
    <div>
      <h1 className="text-primary fw-bold fs-2 pt-4">
        {console.log(questions[currQuestion].correct_answer)}
        {console.log(decode(question))}
        {decode(question)}
      </h1>
      <Container className="mt-4">
        {selectError && (
          <Row className="justify-content-center">
            <Col
              xs={10}
              md={8}
              lg={5}
              className="mb-4 p-2 fs-5 rounded shadow-sm bg-danger text-white"
            >
              Please select an Answer
            </Col>
          </Row>
        )}
        <Row>
          {options &&
            options.map((i) => (
              <Col md={6} key={i}>
                <Button
                  key={i}
                  className={`mb-2 fw-bold border-3 rounded-pill fs-4 w-100 ${
                    selectedItem && handleSelected(i)
                  }`}
                  variant="outline-primary"
                  //   checked={checked}
                  disabled={selectedItem}
                  //   onChange={(e) => setSelectedItem(e.currentTarget.checked)}
                  onClick={() => handleChecked(i)}
                >
                  {decode(i)}
                  {console.log({ questionsArr: questions.length })}
                </Button>
              </Col>
            ))}
        </Row>
        <Row>
          <Col className="my-3">
            <Button
              className="fw-bold border-3 rounded-pill fs-2 px-5"
              variant="outline-primary"
              size="lg"
              onClick={handleNext}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Question;
