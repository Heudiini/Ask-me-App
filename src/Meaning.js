import React from "react";
import Synonyms from "./Synonyms";
import "./css/Meaning.css";

export default function Meaning(props) {
  return (
    <div className="  meaning">
      {" "}
      <h3 className="h3">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        // console.log(props.meaning.synonyms);
        if (definition) {
          return (
            <div className="container-fluid" key={index}>
              <div>
                Definition:
                <br />
                <strong className="  definitionResp">{definition.definition}</strong>
              </div>
              <div>
                Example:
                <br />
              </div>{" "}
              <q className="exampleResp">
                <em>{definition.example}</em>
              </q>
            </div>
          );
        } else {
          return null;
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
