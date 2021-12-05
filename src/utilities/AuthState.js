import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./auth-context";
import authReducer from "./auth-reducer";

const AuthState = (props) => {
  const initialState = { isAuth: false };
  const [state, dispatch] = useReducer(authReducer, initialState);
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthState;
