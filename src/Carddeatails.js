import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sports, { Seminar, MainCampus, Trending } from "./Data";
import "./Carddetails.css";
import Nav from "./Nav";
function Carddeatails() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("eventId");
  const name = new URLSearchParams(search).get("eventName");
  const data = Sports.find((obj) => {
    if (obj.Name === name && obj.id == id) {
      return obj;
    }
  });

  return (
    <div className="main_div">
      <Nav />
      <div className="main_body">
        <h1 className="event_Name"> {data.Name}</h1>
        <h5 className="event_Category">Sports</h5>
        <img className="event_image" src={data.ImagePath} alt="Event Image" />
        <div class="container">
          <div class="card">
            <div class="content">
              <h2>01</h2>
              <h3>Description</h3>
              <p className="Desc_ptag">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2>02</h2>
              <h3>Details</h3>
              <p>
                FEE
                <span>
                  {" "}
                  {"  "} {data.Fee}
                </span>{" "}
              </p>
              <p>
                Registered
                <span>
                  {"  "} {data.Registered}/{data.Totalseats}
                </span>
              </p>
              <p>
                Location{" "}
                <span>
                  {"  "}
                  {data.Location}
                </span>
              </p>
              <p>
                Date
                <span>
                  {"  "}
                  {data.Date}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="cta">
          <a download className="btn">
            Register
          </a>
          <a className="btn btn-primary">Add to Favorites</a>
        </div>
      </div>
    </div>
  );
}

export default Carddeatails;

/* <div className="container experience__container">
          <div className="experience__frontend">
            <h3 className="details_Tag">Details</h3>
            <div className="experience__content">
              <article className="experience__details">
                <div>
                  <h4 className="details_item">Fee</h4>
                  <small className="text-light">{data.Fee}</small>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  <h4 className="details_item">Location</h4>
                  <small className="text-light">{data.Location}</small>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  {" "}
                  <h4 className="details_item">Registered</h4>
                  <small className="text-light">
                    {data.Registered}/{data.Totalseats}
                  </small>{" "}
                </div>
              </article>
              <article className="experience__details">
                <div>
                  {" "}
                  <h4 className="details_item">Date</h4>
                  <small className="text-light">{data.Date}</small>{" "}
                </div>
              </article>
            </div>
            </div>
            1
            */
