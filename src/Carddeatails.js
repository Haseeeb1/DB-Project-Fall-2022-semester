import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sports, { Seminar, MainCampus, Trending } from "./Data";
import "./Carddetails.css";
import Nav from "./Nav";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./screens/PaymentForm";

import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import toast, { Toaster } from "react-hot-toast";

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
  const navigate = useNavigate();

  /* 
  const user = useSelector(selectUser);

  const [event, setEvent] = useState([]);
  const [ isFavourite, setIsFavourite ] = useState(false);
  const navigate = useNavigate();
  const getEvent = () =>{
    try{
      axios.get(`http://localhost:5000/events/${id}`)
      .then(res => (setEvent(res.data[0])));
      }
      catch(err){
        console.log(err)
      }
  }

  const setIsFavouriteFunc = () =>{
    try{
      axios.post('http://localhost:5000/events/is-favourite', 
      {
        "userId": user.uid,
	      "eventId": id
      })
      .then(event => setIsFavourite(event.data));
    }
    catch(err){
      console.log(err)
    }
  }

  React.useEffect(() => {
    getEvent();
    setIsFavouriteFunc();
  }, []);

  const addToFav = async() =>{
    await axios.post('http://localhost:5000/events/add-to-favourites',
    {
      'userId': user.uid,
      'eventId': id
    }).then(event => {
      console.log("Added To Favourites"); 
      toast.success("Added To Favourites"); 
      setIsFavourite(true);
    })
      .catch(err => {
        console.log("Already Added To Favourties")
        toast.success("Already Added To Favourties");
    });
  }

  const removeFromFav = async() =>{
    await axios.post('http://localhost:5000/events/remove-from-favourites',
    {
      'userId': user.uid,
      'eventId': id
    }).then(event => {
      console.log("Removed From Favourites"); 
      toast.success("Removed From Favourites"); 
      setIsFavourite(false);
    })
      .catch(err => {
        console.log("Already Removed From Favourties");
        toast.success("Already Removed From Favourties");
    });
  }

  const toggleFavourite = () =>{
    console.log(!isFavourite)
    !isFavourite ? addToFav() : removeFromFav();
  }
*/

  return (
    <div className="main_div">
      <Nav />
      <div className="main_body">
        <h1 className="event_Name"> {/*event.name*/ data.Name}</h1>
        <h5 className="event_Category">Sports{/*event.category*/}</h5>
        <img
          className="event_image"
          src={
            /*`http://localhost:5000/resources/${event.image}`*/ data.ImagePath
          }
          alt="Event Image"
        />

        {!payment ? (
          <div class="container">
            <div class="card">
              <div class="content">
                <h2>01</h2>
                <h3>Description</h3>
                <h4 className="Desc_ptag">
                  {/*event.desription*/}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h4>
                <h6
                  onClick={() =>
                    navigate(
                      `/updateEvent?name=${data.Name}&image=${
                        data.ImagePath
                      }&fee=${data.Fee}&location=${
                        data.Location
                      }&desc=${"Lorem ipsum"}&date=${data.Date}&seats=${
                        data.Totalseats
                      }&category=${"Sports"}`
                    )
                  }
                  className="edit_event"
                >
                  Edit Event details
                </h6>
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
                    {"  "}
                    {/*event.registration_fee*/}
                    {data.Fee}
                  </span>{" "}
                </p>
                <p>
                  Registered
                  <span>
                    {"  "}
                    {/*{event.people_going}/30*/}
                    {data.Registered}/{data.Totalseats}
                  </span>
                </p>
                <p>
                  Location{" "}
                  <span>
                    {"  "}
                    {/*event.location*/}
                    {data.Location}
                  </span>
                </p>
                <p>
                  Date
                  <span>
                    {"  "}
                    {/*event.date*/}
                    {data.Date}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Elements stripe={stripeTestPromise}>
            <PaymentForm
              event=/*2 {} {name: event.name, Fee: event.registration_fee }*/ {{
                name: data.Name,
                Fee: data.Fee,
              }}
            />
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
              {/*
<a onClick={toggleFavourite} className="btn btn-primary">
            {!isFavourite ? 
            "Add to Favorites" : 
            "Remove From Favourites"}
            </a>
*/}
              <a className="btn btn-primary">Add to Favorites</a>
            </>
          ) : (
            <a onClick={() => setPayment(false)} className="btn">
              Back to Details
            </a>
          )}
        </div>
      </div>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default Carddeatails;
