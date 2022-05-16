import React from "react";
import logo from "./logo.svg";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="row">
      <p className="col sm-3 ">
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
      </p>
      <p className="col sm-3">
        <img src={logo} className="App-logo" alt="logo" />
      </p>
      <p className="col sm-3 ">
        <a className="link" href="https://giphy.com/gifs/winnie-the-pooh-126BrhLh4YgwkE">
          Gif from GIPHY
        </a>
      </p>
    </footer>
  );
}
