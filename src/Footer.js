import React from "react";
import logo from "./logo.svg";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="row">
      <p className="col md-3 ">
        {" "}
        © 2022{" "}
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
    </footer>
  );
}
