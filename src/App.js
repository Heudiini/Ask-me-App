import "./css/App.css";
import Dictionary from "./Dictionary";
import winnie from "./winnie.gif";
import Footer from "./Footer";

function App() {
  return (
    <div className="  App">
      <div className=" container">
        <header className=" App-header">
          {" "}
          <h1>Ask me App</h1>
          <div>
            {" "}
            <Dictionary defaultKeyword="peace" />
          </div>
          <div>
            <img src={winnie} width="80%" alt="loading..." />
          </div>
        </header>
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
