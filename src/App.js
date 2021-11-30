import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Profile } from "./pages";
import { MyNavBar } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={<Profile />} />
      </Routes>
      <MyNavBar />
    </div>
  );
}

export default App;
