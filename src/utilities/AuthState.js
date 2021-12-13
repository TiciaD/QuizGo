import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./auth-context";
import authReducer from "./auth-reducer";
import axiosHelper from "./axiosHelper";
import { USER_QUIZZES, TOKEN, USER_DATA, ALL_QUIZZES } from "./actions";

const AuthState = (props) => {
  const initialState = {
    userQuizzes: [],
    token: "",
    userData: {},
    allQuizzes: [],
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setToken = (value) => {
    dispatch({
      type: TOKEN,
      payload: value,
    });
  };

  const setUserData = (data) => {
    console.log(data);
    dispatch({
      type: USER_DATA,
      payload: data,
    });
  };

  const setUserQuizzes = (data) => {
    console.log({ setQuiz: data });
    dispatch({
      type: USER_QUIZZES,
      payload: data,
    });
  };

  const setAllQuizzes = (data) => {
    console.log({ setAllQuiz: data });
    dispatch({
      type: ALL_QUIZZES,
      payload: data,
    });
  };

  const saveToken = (res) => {
    const newToken = res.data.access_token || res.data.data.token;
    console.log({ token: newToken });
    setToken(newToken);
    window.localStorage.setItem("token", newToken);
  };

  const destroyToken = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const login = (userData) => {
    axiosHelper({
      data: userData,
      method: "post",
      url: "/oauth/token",
      successMethod: saveToken,
    });
  };

  const register = (userData) => {
    axiosHelper({
      data: userData,
      method: "post",
      url: "/register",
      successMethod: saveToken,
    });
  };

  const handleShuffle = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };

  const getUserData = async () => {
    if ("token" in localStorage) {
      const value = localStorage.getItem("token");
      setToken(value);

      await axios
        .get(
          "https://react-laravel-container-dunnticia63358301.codeanyapp.com/api/user",
          {
            headers: {
              Authorization: "Bearer " + value,
            },
          }
        )
        .then(function (response) {
          let user = response.data.data.user_data;
          setUserData(response.data.data.user_data);
          window.localStorage.setItem("User", JSON.stringify(user));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const getUserQuizzes = async () => {
    if ("token" in localStorage) {
      const value = localStorage.getItem("token");
      setToken(value);

      await axios
        .get(
          "https://react-laravel-container-dunnticia63358301.codeanyapp.com/api/quizzes",
          {
            headers: {
              Authorization: "Bearer " + value,
            },
          }
        )
        .then(function (response) {
          console.log({ QuizResponse: response.data.data });
          setUserQuizzes(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const getAllQuizzes = async () => {
    if ("token" in localStorage) {
      const value = localStorage.getItem("token");
      setToken(value);

      await axios
        .get(
          "https://react-laravel-container-dunnticia63358301.codeanyapp.com/api/allquizzes",
          {
            headers: {
              Authorization: "Bearer " + value,
            },
          }
        )
        .then(function (response) {
          console.log({ QuizResponse: response.data.data });
          setAllQuizzes(handleShuffle(response.data.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        setToken,
        userData: state.userData,
        setUserData,
        userQuizzes: state.userQuizzes,
        setUserQuizzes,
        getUserQuizzes,
        saveToken,
        login,
        register,
        destroyToken,
        getUserData,
        allQuizzes: state.allQuizzes,
        getAllQuizzes,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
