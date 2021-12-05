import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  Profile,
  QuizSettings,
  Register,
  Quiz,
  Result,
  Login,
} from "./pages";
import { MyNavBar } from "./components";
import QuizState from "./utilities/QuizState";

function App() {
  return (
    <div className="App">
      <QuizState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="quizsettings/*" element={<QuizSettings />} />
          <Route path="register/*" element={<Register />} />
          <Route path="login/*" element={<Login />} />
          <Route path="quiz/*" element={<Quiz />} />
          <Route path="result/*" element={<Result />} />
        </Routes>
        <MyNavBar />
      </QuizState>
    </div>
  );
}

export default App;
