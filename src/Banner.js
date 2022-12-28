import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import BG from "./images/Logo1.png";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [newMovie, setNewMovie] = useState(0);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const openInNewTab = (url) => {
    window.open(
      `https://www.google.com/search?q=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /*useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [newMovie]);*/

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${BG}
       )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Welcome BESE-28</h1>
        <div className="banner__buttons">
          <button
            // onClick={() => openInNewTab(movie.name)}
            className="banner__button"
          >
            Register
          </button>

          <button
            //onClick={() => setNewMovie(newMovie + 1)}
            className="banner__button"
          >
            Add to Favorites
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(
            "The most awaited event of the year, Welcome of batch 28 from BESE 27.",
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
