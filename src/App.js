import logo from "./logo.svg";
import "./App.css";
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
          <Dictionary />
        </header>
        <footer>© 2022 coded by Heudiini opensoure code in heudiini github</footer>
      </div>
    </div>
  );
}

export default App;
