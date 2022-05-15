import React from "react";
import logo from "./logo.svg";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="row">
      <p className="col ">
        {" "}
        © 2022
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className=" link"
          href="https://github.com/Heudiini/dictionary-app"
          rel="noreferrer"
          target="_blank"
        >
          github opensource code.
        </a>{" "}
      </p>
      <p className="col ">
        <a className="link" href="https://giphy.com/gifs/winnie-the-pooh-126BrhLh4YgwkE">
          Gif from GIPHY
        </a>
      </p>
      <p className="col">
        <a
          className="link"
          href="https://www.clipartmax.com/middle/m2i8N4G6i8i8A0N4_related-winnie-the-pooh-reading-clipart-winnie-pooh-con-un-libro/"
          target="_blank"
        >
          Related Pooh{" "}
        </a>
      </p>
    </footer>
  );
}
