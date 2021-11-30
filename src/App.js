import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Profile, QuizSettings, Register } from "./pages";
import { MyNavBar } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="quizsettings/*" element={<QuizSettings />} />
        <Route path="register/*" element={<Register />} />
      </Routes>
      <MyNavBar />
    </div>
  );
}

export default App;
