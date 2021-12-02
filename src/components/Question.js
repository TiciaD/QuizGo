import React, { useState, useContext } from "react";
import quizContext from "../utilities/quiz-context";
import { Container, Row, Col, ToggleButton } from "react-bootstrap";

const Question = () => {
  //   const [selected, setSelected] = useState("");
  //   const [error, setError] = useState("");
  const [checkedItem, setChecked] = useState("");

  const {
    currQuestion,
    // setCurrQuestion,
    questions,
    options,
    // correct,
    // score,
    // setScore,
    setQuestions,
  } = useContext(quizContext);

  // const handleChecked =(i) => {
  //   if(checkedItem === i && checkedItem === correct) {
  //         return 'bg-success';
  //   }
  // }
  return (
    <div>
      <h1 className="text-primary fw-bold fs-2 pt-4">
        {console.log(questions[0])}
        {questions[currQuestion].question}
      </h1>
      <Container className="mt-5">
        <Row>
          {options &&
            options.map((i) => (
              <Col md={6} key={i}>
                <ToggleButton
                  key={i}
                  className="mb-2 fw-bold border-3 rounded-pill fs-4 w-100"
                  id={"toggle-check-" + (i + 100)}
                  type="checkbox"
                  variant="outline-primary"
                  //   checked={checked}
                  value="1"
                  //   onChange={(e) => setSelected(e.currentTarget.checked)}
                >
                  {i}
                </ToggleButton>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Question;
