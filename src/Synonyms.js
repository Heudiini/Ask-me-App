import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return "Hello from syn,...,ön ";
  } else {
    return "no synonyms exist";
  }
}
