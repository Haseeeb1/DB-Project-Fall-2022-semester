import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sports, { Seminar, MainCampus, Trending } from "./Data";
import "./Carddetails.css";
import Nav from "./Nav";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./screens/PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MP068CBVzJFr09gu8HzY5GxrllFEnKD7WX6QXvX4a0PMRYlXSg4LPMaBJnQho7Si3FiQ1OH2Odz07KSH37kxlaT001gRCFiLd";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function Carddeatails() {
  const [payment, setPayment] = useState(false);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("eventId");
  const name = new URLSearchParams(search).get("eventName");
  const data = MainCampus.find((obj) => {
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

        {!payment ? (
          <div class="container">
            <div class="card">
              <div class="content">
                <h2>01</h2>
                <h3>Description</h3>
                <h4 className="Desc_ptag">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h4>
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
        ) : (
          <Elements stripe={stripeTestPromise}>
            <PaymentForm event={{ name: data.Name, Fee: data.Fee }} />
          </Elements>
        )}
        <div className="cta">
          {!payment ? (
            <>
              <a className="btn">Register</a>
              {data.Fee !== "0" && (
                <a onClick={() => setPayment(true)} className="btn">
                  Pay Now
                </a>
              )}
              <a className="btn btn-primary">Add to Favorites</a>
            </>
          ) : (
            <a onClick={() => setPayment(false)} className="btn">
              Back to Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carddeatails;
