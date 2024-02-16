import logo from "./logo.svg";
import "./App.css";
import Commits from "./Commits";
import Pullrequest from "./Pullrequest";
import { Codefrequency } from "./Codefrequency";
import { Contributor } from "./Contributor";
import { Traffic } from "./Traffic";
import { Forks } from "./Forks";
import { Participation } from "./Participation";

function App() {
  return (
    <div className="App">
      <Contributor />
      <Participation />
      <Forks />
      <Traffic />
      <Contributor />
      <Codefrequency />
      <Commits />
      <Pullrequest />
    </div>
  );
}

export default App;
