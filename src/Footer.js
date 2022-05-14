import React from "react";
import logo from "./logo.svg";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="row">
      <p className="col ">
        {" "}
        © 2022 coded by Heudiini.
        <br /> Made in React
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className=" gitlink"
          href="https://github.com/Heudiini/dictionary-app"
          rel="noreferrer"
          target="_blank"
        >
          github code.
        </a>{" "}
      </p>
      <p className="col ">
        <a className="gitlink" href="https://giphy.com/gifs/winnie-the-pooh-126BrhLh4YgwkE">
          Gif from GIPHY
        </a>
      </p>
    </footer>
  );
}
