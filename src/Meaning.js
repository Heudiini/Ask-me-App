import React from "react";
import "./css/Meaning.css";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              <strong> Definition:</strong> {definitions.definition}
              <br />
              <strong>Example: </strong>
              <em> {definitions.example}</em>
              <br />
              <strong>Synonyms: </strong> {definitions.synonyms}
            </p>
          </div>
        );
      })}
    </div>
  );
}
