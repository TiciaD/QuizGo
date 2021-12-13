import React, { useReducer } from "react";
import {
  ADD_USER_QUES,
  ADD_USER_OPTIONS,
  ADD_ALL_QUES,
  ADD_USER_CAT,
  ADD_USER_DIF,
  ADD_NAME,
  RESET_ALL_QUES,
} from "./actions";
import axiosHelper from "./axiosHelper";
import UserQuizContext from "./user-quiz-context";
import userQuizReducer from "./user-quiz-reducer";

const UserQuizState = (props) => {
  const initialState = {
    allQuestions: [],
    userQuestions: "",
    userCategory: 1,
    userDifficulty: 1,
    userType: "multiple",
    quizName: "",
  };
  const [state, dispatch] = useReducer(userQuizReducer, initialState);

  // set questions
  const setUserQuestions = (res) => {
    dispatch({
      type: ADD_USER_QUES,
      payload: res,
    });
  };

  const setUserCategory = (value) => {
    dispatch({
      type: ADD_USER_CAT,
      payload: value,
    });
  };

  const setUserDifficulty = (value) => {
    dispatch({
      type: ADD_USER_DIF,
      payload: value,
    });
  };

  const setQuizName = (value) => {
    dispatch({
      type: ADD_NAME,
      payload: value,
    });
  };

  const setUserOptions = (res) => {
    dispatch({
      type: ADD_USER_OPTIONS,
      payload: res,
    });
  };

  const setAllQuestions = (arr) => {
    dispatch({
      type: ADD_ALL_QUES,
      payload: arr,
    });
  };

  const resetAll = () => {
    dispatch({
      type: RESET_ALL_QUES,
    });
    setUserQuestions("");
    setUserDifficulty(1);
    setUserCategory(1);
    setQuizName("");
  };

  const saveQuiz = (res) => {
    console.log({ response: res.config.data });
    console.log({ JSONresponse: JSON.parse(res.config.data) });
  };
  const sendQuiz = (userData, token) => {
    axiosHelper({
      data: userData,
      method: "post",
      url: "/api/quizzes",
      successMethod: saveQuiz,
      token: token,
    });
  };

  const makeQuiz = (
    allQuestions,
    userDifficulty,
    userCategory,
    name,
    token
  ) => {
    const data = {
      name: name,
      questions: allQuestions,
      category: userCategory,
      difficulty: userDifficulty,
    };
    sendQuiz(data, token);
  };

  const handleReset = (userQuestions, allQuestions) => {
    setAllQuestions(userQuestions);
    console.log({ QuestionsArr: allQuestions });

    // clear question field
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    // axios POST, send question to database
    console.log(userQuestions);

    // reset user questions state
    setUserQuestions("");
    console.log(userQuestions);
  };

  return (
    // Send down props to everything wrapped in UserQuizState
    <UserQuizContext.Provider
      value={{
        allQuestions: state.allQuestions,
        setAllQuestions,
        userQuestions: state.userQuestions,
        setUserQuestions,
        userCategory: state.userCategory,
        setUserCategory,
        userDifficulty: state.userDifficulty,
        setUserDifficulty,
        userOptions: state.userOptions,
        setUserOptions,
        quizName: state.quizName,
        setQuizName,
        makeQuiz,
        handleReset,
        resetAll,
      }}
    >
      {props.children}
    </UserQuizContext.Provider>
  );
};

export default UserQuizState;
