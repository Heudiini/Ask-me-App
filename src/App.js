import "./css/App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="  App">
      <div className=" container">
        <header className=" App-header">
          <div className="mainTitle">
            <h1>Ask me App</h1>
            <p className="detail">
              <small> by Heudiini ©</small>
            </p>
          </div>
          <div className="row">
            <Dictionary defaultKeyword="decor" />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
