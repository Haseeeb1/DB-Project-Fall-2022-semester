import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import Row from "../Row.js";
import requests from "../requests";
import Sports from "../Data.js";
import { MainCampus } from "../Data.js";
import { Trending } from "../Data.js";
import { Seminar } from "../Data.js";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row Category="Society/Batch Events" Data={Trending} />
      <Row Category="Sports" Data={Sports} />
      <Row Category="Main-Campus Events" Data={MainCampus} />
      <Row Category="Seminars" Data={Seminar} />
    </div>
  );
}
export default HomeScreen;

/*

      <Row title="Seminars" fetchUrl={requests.fetchTopRated} />
      <Row title="Sports Events" fetchUrl={requests.fetchRomanceMovies} />*/
