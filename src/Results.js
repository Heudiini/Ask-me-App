import React from "react";
import Meaning from "./Meaning";
import "./css/Results.css";
import Phonetic from "./Phonetic";
import "animate.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>

        {props.results.phonetics.map(function (phonetics, index) {
          return (
            <div className=" audiosec">
              {" "}
              <div key={index}>
                <Phonetic phonetic={phonetics} />
              </div>
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index1) {
          return (
            <section key={index1}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
