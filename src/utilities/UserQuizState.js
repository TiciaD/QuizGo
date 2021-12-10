import React, { useReducer } from "react";
import axios from "axios";
import {
  ADD_USER_QUES,
  ADD_USER_OPTIONS,
  ADD_CORRECT,
  ADD_USER_CAT,
  ADD_USER_DIF,
} from "./actions";
import UserQuizContext from "./user-quiz-context";
import userQuizReducer from "./user-quiz-reducer";

const UserQuizState = (props) => {
  const initialState = {
    userQuestions: "",
    userCategory: "",
    userDifficulty: "easy",
    userType: "multiple",
    error: "",
    currQuestion: 0,
    userOptions: "",
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

  const setUserOptions = (res) => {
    dispatch({
      type: ADD_USER_OPTIONS,
      payload: res,
    });
  };

  // fetch quiz questions from opentdb based on state of category, difficulty, type, and amount of questions
  //   const fetchQuestions = async (category, difficulty, amount, type) => {
  //     await axios
  //       .get(
  //         `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}&encode=base64`
  //       )
  //       .then(function (res) {
  //         setQuestions(res.data.results);
  //         console.log({ Result: res.data.results });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   };

  return (
    // Send down props to everything wrapped in UserQuizState
    <UserQuizContext.Provider
      value={{
        userQuestions: state.userQuestions,
        setUserQuestions,
        userCategory: state.userCategory,
        setUserCategory,
        userDifficulty: state.userDifficulty,
        setUserDifficulty,
        userOptions: state.userOptions,
        setUserOptions,
      }}
    >
      {props.children}
    </UserQuizContext.Provider>
  );
};

export default UserQuizState;
