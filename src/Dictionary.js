import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./css/dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //  console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          className="searchBar"
          type="Search"
          placeholder="Search.."
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
