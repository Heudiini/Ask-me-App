import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./css/dictionary.css";
import winnie from "./winnie.gif";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  //the search needed new state "loaded" that was my bug, remember
  if (loaded) {
    return (
      <div className="row dictionary">
        <form className="form" onSubmit={handleSubmit}>
          <button className="live"></button> Results searched for word:{" "}
          <input
            className="input"
            type="search"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />{" "}
          Suggested words: earth, food, dogs, succulents, tenerife,
        </form>{" "}
        <div>
          <img src={winnie} width="80%" alt="loading..." />
        </div>
        <div class="col sm-6">
          {" "}
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
