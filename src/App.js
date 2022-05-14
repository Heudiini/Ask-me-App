import logo from "./logo.svg";
import "./css/App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className=" container">
        <header className="App-header">
          {" "}
          <h1>Ask me App</h1>
          <Dictionary defaultKeyword="Peace" />
        </header>
        <footer>
          © 2022 coded by Heudiini. With <img src={logo} className="App-logo" alt="logo" />
          <a
            className="gitlink"
            href="https://github.com/Heudiini/dictionary-app"
            rel="noreferrer"
            target="_blank"
          >
            Opensource code in github Heudiini.
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
