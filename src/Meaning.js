import React from "react";
import Synonyms from "./Synonyms";
import "./css/Meanings.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      Definition:
      {props.meaning.definitions.map(function (definition, index) {
        // console.log(props.meaning.synonyms);
        if (definition) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <span className="exampleP">Example:</span>{" "}
              <q className="example">
                <em>{definition.example}</em>
              </q>
            </div>
          );
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
