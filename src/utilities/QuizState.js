import React, { useReducer } from "react";
import axios from "axios";
import {
  ADD_QUESTIONS,
  TOGGLE_BUTTON,
  CATEGORY,
  DIFFICULTY,
  ERROR,
  OPTIONS,
  CURRENT_QUESTION,
} from "./quiz-actions";
import QuizContext from "./quiz-context";
import quizReducer from "./quiz-reducer";

const QuizState = (props) => {
  const initialState = {
    questions: "",
    score: 0,
    toggledItem: "",
    category: "",
    difficulty: "easy",
    error: "",
    currQuestion: 0,
    options: "",
    loading: false,
  };
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // set questions
  const setQuestions = (res) => {
    dispatch({
      type: ADD_QUESTIONS,
      payload: res,
    });
  };

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
    console.log(data.results);
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

  const setError = (bool) => {
    dispatch({
      type: ERROR,
      payload: bool,
    });
  };

  const setCurrentQuestion = () => {
    dispatch({
      type: CURRENT_QUESTION,
    });
  };

  return (
    <QuizContext.Provider
      value={{
        questions: state.questions,
        setQuestions,
        fetchQuestions,
        toggledItem: state.toggledItem,
        setToggle,
        category: state.category,
        setCategory,
        difficulty: state.difficulty,
        setDifficulty,
        error: state.error,
        setError,
        currQuestion: state.currQuestion,
        options: state.options,
        loading: state.loading,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
