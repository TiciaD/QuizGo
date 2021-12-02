import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { Home, Profile, QuizSettings, Register, Quiz } from "./pages";
import { MyNavBar } from "./components";
import QuizState from "./utilities/QuizState";
import quizContext from "./utilities/quiz-context";

function App() {
  //   const [questions, setQuestions] = useState();
  //   const [score, setScore] = useState(0);

  //   const { fetchQuestions } = useContext(quizContext);

  //   const fetchQuestions = async (category = "", difficulty = "") => {
  //     const { data } = await axios.get(
  //       `https://opentdb.com/api.php?amount=10${
  //         category && `&category=${category}`
  //       }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  //     );
  //     setQuestions(data.results);
  //   };

  return (
    <div className="App">
      <QuizState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="quizsettings/*" element={<QuizSettings />} />
          <Route path="register/*" element={<Register />} />
          <Route
            path="quiz/*"
            element={
              <Quiz
              // questions={questions}
              // score={score}
              // setScore={setScore}
              // setQuestions={setQuestions}
              />
            }
          />
        </Routes>
        <MyNavBar />
      </QuizState>
    </div>
  );
}

export default App;
