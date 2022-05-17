import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./css/dictionary.css";
//import winnie from "./winnie.gif";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);
    // for photos in pexel

    let pexelsApiKey = `563492ad6f91700001000001ab652dccbab04ad7867c7555658ee3a7`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    axios.get(pexelsApiUrl).then(handlePexelsResponse);
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
          <div className="btnDiv">
            <button className="live"></button> Results searched for word:{" "}
          </div>
          <input
            className="input"
            type="search"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />{" "}
          Suggested words: earth, food, dogs, succulents, tenerife,
        </form>{" "}
        <div className="col sm-6">
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
