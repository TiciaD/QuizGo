import React, { useState, useContext } from "react";
import quizContext from "../utilities/quiz-context";

const Question = () => {
  //   const [selected, setSelected] = useState("");
  //   const [error, setError] = useState("");

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
  return (
    <div>
      <h1 className="text-primary fw-bold fs-2 pt-4">
        {console.log(questions)}
        {questions[currQuestion].question}
      </h1>

      {/* {options && } */}
    </div>
  );
};

export default Question;
