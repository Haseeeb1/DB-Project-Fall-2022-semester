import React, { useEffect, useState } from "react";
import axios from "./axios";
import Carddeatails from "./Carddeatails";
import "./Row.css";
import { useNavigate } from "react-router-dom";
import read from "./images/read_more.jpg";
import star from "./images/star1.png";

function Row({ Category, isLargeRow, Data }) {
  const navigate = useNavigate();

  /* useEffect(() => {
    
  }, []);
*/

  return (
    <div>
      <div className="row">
        <h2>{Category}</h2>
        <div className="row__posters">
          {Data.map((event) => (
            <div key={event.id} className="inner_div">
              <img
                key={event.id}
                className="row__poster"
                src={event.ImagePath}
                alt="EventPhoto"
              />
              <div className="overlay1">
                <img className="star_img" src={star} alt="fav" />
              </div>

              <div
                className="overlay"
                onClick={() =>
                  navigate(`/event?eventId=${event.id}&eventName=${event.Name}`)
                }
              >
                <div className="text">
                  {event.Name}🔍
                  <br />
                  <br />
                  <br />
                  Learn More..
                </div>
              </div>
            </div>
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
