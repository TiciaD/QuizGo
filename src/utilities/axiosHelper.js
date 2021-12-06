import React from "react";
import axios from "axios";

const axiosHelper = (props) => {
  const {
    method = "get",
    url = "/",
    data = {},
    token = "",
    successMethod = (res) => console.log(res),
    failureMethod = (err) => console.log(err),
  } = props;

  const baseURL =
    "https://react-laravel-container-dunnticia63358301.codeanyapp.com";
  return axios({
    method,
    url: baseURL + url,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    data,
  })
    .then(successMethod)
    .catch(failureMethod);
};

export default axiosHelper;
