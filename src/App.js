import logo from "./logo.svg";
import "./css/App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1>
            My Dictionary App <img src={logo} className="App-logo" alt="logo" />
          </h1>
          <Dictionary defaultKeyword="lunar" />
        </header>
        <footer>
          © 2022 coded by Heudiini.{" "}
          <a
            className="gitlink"
            href="https://github.com/Heudiini/dictionary-app"
            rel="noreferrer"
            target="_blank"
          >
            Opensource code.
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
