import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./auth-context";
import authReducer from "./auth-reducer";
import axiosHelper from "./axiosHelper";
import { AUTHORIZE, TOKEN, USER_DATA } from "./actions";

const AuthState = (props) => {
  const initialState = { isAuth: false, token: "", userData: {} };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setAuth = (bool) => {
    dispatch({
      type: AUTHORIZE,
      payload: bool,
    });
  };

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

  const saveToken = (res) => {
    const newToken = res.data.access_token || res.data.data.token;
    console.log({ token: newToken });
    setToken(newToken);
    window.localStorage.setItem("token", newToken);
  };

  const login = (userData) => {
    axiosHelper({
      data: userData,
      method: "post",
      url: "/oauth/token",
      successMethod: saveToken,
    });
  };

  const getUserData = () => {
    if ("token" in localStorage) {
      const value = localStorage.getItem("token");
      setToken(value);

      axios
        .get(
          "https://react-laravel-container-dunnticia63358301.codeanyapp.com/api/user",
          {
            headers: {
              Authorization: "Bearer " + value,
            },
          }
        )
        .then(function (response) {
          //   console.log(response.data.data.user_data);
          setUserData(response.data.data.user_data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: state.isAuth,
        setAuth,
        token: state.token,
        setToken,
        userData: state.userData,
        setUserData,
        saveToken,
        login,
        getUserData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
