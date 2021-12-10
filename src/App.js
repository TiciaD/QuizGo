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
  QuizForm,
} from "./pages";
import { MyNavBar } from "./components";
import QuizState from "./utilities/QuizState";
import AuthState from "./utilities/AuthState";
import UserQuizState from "./utilities/UserQuizState";

function App() {
  return (
    <div className="App">
      <UserQuizState>
        <AuthState>
          <QuizState>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="profile/*" element={<Profile />} />
              <Route path="quizsettings/*" element={<QuizSettings />} />
              <Route path="register/*" element={<Register />} />
              <Route path="login/*" element={<Login />} />
              <Route path="quiz/*" element={<Quiz />} />
              <Route path="result/*" element={<Result />} />
              <Route path="quizform/*" element={<QuizForm />} />
            </Routes>
            <MyNavBar />
          </QuizState>
        </AuthState>
      </UserQuizState>
    </div>
  );
}

export default App;
