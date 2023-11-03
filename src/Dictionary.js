import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Results from "./Results";
import "./css/dictionary.css";
import Photos from "./Photos";
import Footer from "./Footer";
import reading from "./reading.gif";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  const search = useCallback(() => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictionResponse)
      .catch((error) => {
        console.log(
          "An error occurred while fetching dictionary data: ",
          error
        );
        setResults(null);
        setError(
          "An error occurred while fetching dictionary data. Please try again."
        );
      });

    const pexelsApiKey = "e44fo4cc413tf607df33aaabc809d605"; // Replace with your actual API key
    const pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}&per_page=4`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, { headers: headers })
      .then(handlePexelsResponse)
      .catch((error) => {
        console.log("An error occurred while fetching photos data: ", error);
        setPhotos(null);
        setError(
          "An error occurred while fetching photos data. Please try again."
        );
      });
  }, [keyword]);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  const load = useCallback(() => {
    setLoaded(true);
    search();
  }, [search]);

  useEffect(() => {
    load();
  }, [load]);

  if (loaded) {
    return (
      <div className="container-fluid">
        <div className="dictionary">
          <div className="row formSection">
            <form className="col sm-6 form" onSubmit={handleSubmit}>
              <p>Suggested words: food, plant, vacation..</p>
              <input
                className="col input"
                type="search"
                autoFocus={false}
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              />
              <span className="col sm-6">
                <input type="submit" value="Search" className="searchBtn" />
              </span>
              <br />
            </form>
            <div className="col sm-6 container-fluid">
              <img
                src={reading}
                style={{
                  width: "300px",
                  height: "400px",
                }}
                className="readingGif"
                alt="reading..."
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-12 col-lg-12 d-flex align-items-center">
            <Results key={keyword} results={results} className="resultsCol" />
          </div>
          <div className="col-sm-6 col-md-12 col-lg-12 d-flex align-items-center">
            <Photos photos={photos} className="large-photo" />
          </div>
        </div>

        <Footer />
      </div>
    );
  } else {
    return error ? <div>{error}</div> : <div>Loading</div>;
  }
}
