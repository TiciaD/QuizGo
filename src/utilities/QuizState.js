import React, { useReducer } from "react";
import axios from "axios";
import {
  ADD_QUESTIONS,
  AUTHORIZE,
  ADD_SCORE,
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
    isAuth: false,
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

  const setAuth = (bool) => {
    dispatch({
      type: AUTHORIZE,
      payload: bool,
    });
  };

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple&encode=base64`
    );
    setQuestions(data.results);
    console.log(data.results);
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

  return (
    // Send down props to everything wrapped in QuizState
    <QuizContext.Provider
      value={{
        questions: state.questions,
        isAuth: state.isAuth,
        setAuth,
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
        error: state.error,
        setError,
        currQuestion: state.currQuestion,
        setCurrentQuestion,
        options: state.options,
        setOptions,
        handleShuffle,
        loading: state.loading,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
