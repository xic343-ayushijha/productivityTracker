import logo from "./logo.svg";
import "./App.css";
import Commits from "./Commits";
import Pullrequest from "./Pullrequest";
import { Codefrequency } from "./Codefrequency";
import { Contributor } from "./Contributor";
import { Traffic } from "./Traffic";
import { Forks } from "./Forks";
import { Participation } from "./Participation";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/contributor" className="link"> contributor </Link> ||
        <Link to="/participation"> participation </Link>||
        <Link to="/forks"> forks </Link> ||
        <Link to="/traffic"> traffic </Link>||
        <Link to="/codefrequency"> codefrequency </Link> ||
        <Link to="/commits"> commits </Link>||
        <Link to="/pullrequest"> pullrequest </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Commits />} />
        <Route path="contributor" element={<Contributor />} />
        <Route path="participation" element={<Participation />} />
        <Route path="forks" element={<Forks />} />
        <Route path="traffic" element={<Traffic />} />
        <Route path="codefrequency" element={<Codefrequency />} />
        <Route path="commits" element={<Commits />} />
        <Route path="pullrequest" element={<Pullrequest />} />
        <Route path="*" element={<Pullrequest />} />
      </Routes>
    </div>
  );
}

export default App;
