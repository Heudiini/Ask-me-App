import "./css/App.css";
import Dictionary from "./Dictionary";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

//import Footer from "./Footer";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 6000);
  }, []);
  return (
    <div className="  App">
      {loading ? (
        <BeatLoader color={`black`} loading={loading} size={15} />
      ) : (
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
      )}
    </div>
  );
}

export default App;
