import React, { useState } from "react";

const Question = ({
  currQuestion,
  setCurrQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      <h1 className="text-primary fw-bold fs-2 pt-4">
        {questions[currQuestion].question}
      </h1>

      {/* {options && } */}
    </div>
  );
};

export default Question;
