import React from "react";
import "./css/Meaning.css";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              {definition.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
