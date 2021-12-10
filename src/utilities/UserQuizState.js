import React, { useReducer } from "react";
import axios from "axios";
import {
  ADD_USER_QUES,
  ADD_USER_OPTIONS,
  ADD_ALL_QUES,
  ADD_USER_CAT,
  ADD_USER_DIF,
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

  const setAllQuestions = (arr) => {
    dispatch({
      type: ADD_ALL_QUES,
      payload: arr,
    });
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

    // OR
    // axios
    //     .get(
    //       "https://react-laravel-container-dunnticia63358301.codeanyapp.com/api/quizzes",
    //       {
    //         headers: {
    //           Authorization: "Bearer " + value,
    //         },
    //       }
    //     )
    //     .then(function (response) {
    //       //   console.log(response.data.data.user_data);
    //       setUserData(response.data.data.user_data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
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
        makeQuiz,
      }}
    >
      {props.children}
    </UserQuizContext.Provider>
  );
};

export default UserQuizState;
