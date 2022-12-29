import React, { useEffect, useState } from "react";
import axios from "./axios";
import Carddeatails from "./Carddeatails";
import "./Row.css";
import { useNavigate } from "react-router-dom";

function Row({ Category, isLargeRow, Data }) {
  const navigate = useNavigate();

  /* const openInNewTab = (url, movie) => {
    window.open(
      `https://www.google.com/search?q=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };*/

  /* useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
*/

  return (
    <div>
      <div className="row">
        <h2>{Category}</h2>
        <div className="row__posters">
          {Data.map((event) => (
            <img
              onClick={() =>
                navigate(`/event?eventId=${event.id}&eventName=${event.Name}`)
              }
              key={event.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={event.ImagePath}
              alt="EventPhoto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
/*

 // {fetchUrl.map( () =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (*/
