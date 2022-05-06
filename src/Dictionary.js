import React, { useState } from "react";

import "./css/dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="Search" placeholder="Search.." onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
