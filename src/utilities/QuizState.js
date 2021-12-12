import React, { useReducer } from "react";
import axios from "axios";
import {
  ADD_QUESTIONS,
  ADD_SCORE,
  TOGGLE_BUTTON,
  CATEGORY,
  DIFFICULTY,
  TYPE,
  AMOUNT,
  ERROR,
  OPTIONS,
  CURRENT_QUESTION,
} from "./actions";
import QuizContext from "./quiz-context";
import quizReducer from "./quiz-reducer";

const QuizState = (props) => {
  const initialState = {
    questions: [],
    score: 0,
    toggledItem: "",
    category: "",
    difficulty: "easy",
    type: "multiple",
    amount: 5,
    error: "",
    currQuestion: 0,
    options: "",
  };
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // set questions
  const setQuestions = (res) => {
    dispatch({
      type: ADD_QUESTIONS,
      payload: res,
    });
  };

  // fetch quiz questions from opentdb based on state of category, difficulty, type, and amount of questions
  const fetchQuestions = async (category, difficulty, amount, type) => {
    await axios
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}&encode=base64`
      )
      .then(function (res) {
        setQuestions(res.data.results);
        console.log({ Result: res.data.results });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setScore = (int) => {
    dispatch({
      type: ADD_SCORE,
      payload: int,
    });
  };

  // set toggledItem
  const setToggle = (id) => {
    dispatch({
      type: TOGGLE_BUTTON,
      payload: id,
    });
  };

  const setCategory = (value) => {
    dispatch({
      type: CATEGORY,
      payload: value,
    });
  };

  const setDifficulty = (value) => {
    dispatch({
      type: DIFFICULTY,
      payload: value,
    });
  };

  const setType = (value) => {
    dispatch({
      type: TYPE,
      payload: value,
    });
  };

  const setAmount = (value) => {
    dispatch({
      type: AMOUNT,
      payload: value,
    });
  };

  const setError = (bool) => {
    dispatch({
      type: ERROR,
      payload: bool,
    });
  };

  const setCurrentQuestion = (int) => {
    dispatch({
      type: CURRENT_QUESTION,
      payload: int,
    });
  };

  const setOptions = (arr) => {
    dispatch({
      type: OPTIONS,
      payload: arr,
    });
  };

  // takes an array and shuffles order of elements in the array
  const handleShuffle = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };

  const resetQuickPlay = () => {
    setQuestions("");
    setCurrentQuestion(0);
    setScore(0);
    setAmount(5);
    setDifficulty("easy");
    setType("multiple");
  };

  return (
    // Send down props to everything wrapped in QuizState
    <QuizContext.Provider
      value={{
        questions: state.questions,
        setQuestions,
        score: state.score,
        setScore,
        fetchQuestions,
        toggledItem: state.toggledItem,
        setToggle,
        category: state.category,
        setCategory,
        difficulty: state.difficulty,
        setDifficulty,
        type: state.type,
        setType,
        amount: state.amount,
        setAmount,
        error: state.error,
        setError,
        currQuestion: state.currQuestion,
        setCurrentQuestion,
        options: state.options,
        setOptions,
        handleShuffle,
        resetQuickPlay,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
