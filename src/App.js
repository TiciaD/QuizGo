import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Profile, QuizSettings, Register, Quiz, Result } from "./pages";
import { MyNavBar } from "./components";
import QuizState from "./utilities/QuizState";

function App() {
  //   const [questions, setQuestions] = useState();
  //   const [score, setScore] = useState(0);

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
          <Route path="result/*" element={<Result />} />
        </Routes>
        <MyNavBar />
      </QuizState>
    </div>
  );
}

export default App;
