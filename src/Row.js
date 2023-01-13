import React, { useEffect, useState } from "react";
import Carddeatails from "./Carddeatails";
import "./Row.css";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

function Row({ Category, isLargeRow, Data }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="row">
        <h2 className="main_tag">{Category}</h2>
        <div className="row__posters">
          {Data.map((event) => (
            <div key={event.id} className="inner_div">
              <img
                key={event.id}
                className="row__poster"
                /*src={`http://localhost:5000/resources/${event.image}`}*/
                src={event.ImagePath}
                alt="EventPhoto"
              />
              {/*{event.isFav && <StarIcon />}*/}
              <StarIcon />
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
                  Learn More...
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
