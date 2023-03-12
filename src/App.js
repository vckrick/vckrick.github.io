import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./Components/Navibar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import Play from "./Play";
import GameOver from "./GameOver";

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/play" element={<Play />} />
          <Route path="/gameover" element={<GameOver />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
