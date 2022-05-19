import React from "react";
import logo from "./logo.svg";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="row">
      <hr></hr>
      <p className="col md-3 ">
        {" "}
        © 2022 Heidi Mörsky{" "}
        <a
          className=" link"
          href="https://github.com/Heudiini/dictionary-app"
          rel="noreferrer"
          target="_blank"
        >
          github opensource code.
        </a>{" "}
        <img src={logo} className="App-logo" alt="logo" />
      </p>
      <p className="col md-3"> Gif kitappinarim.com</p>
    </footer>
  );
}
