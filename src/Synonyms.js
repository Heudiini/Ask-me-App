import React from "react";
import "./css/Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <h3 className="SynTitle">Synonyms </h3>
        <ul className="list">
          {props.synonyms.map(function (synonym, index) {
            return (
              <span className="synonym" key={index}>
                {synonym} {", "}
              </span>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
