import React, { useRef, useState } from "react";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import AVTR1 from "../images/D2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function ProfileScreen() {
  const [hide, setHide] = useState(false);
  const reviewRef = useRef(null);
  const data = [
    {
      avatar: AVTR1,
      name: "customer name",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis   modi corrupti odit. Eaque, quis, reiciendis nam dolores deserunt    officia, ratione atque provident fuga error corrupti facere iste    dicta quisquam tenetur.",
    },
    {
      avatar: AVTR1,
      name: "customer name",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis   modi corrupti odit. Eaque, quis, reiciendis nam dolores deserunt    officia, ratione atque provident fuga error corrupti facere iste    dicta quisquam tenetur.",
    },
    {
      avatar: AVTR1,
      name: "customer name",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis   modi corrupti odit. Eaque, quis, reiciendis nam dolores deserunt    officia, ratione atque provident fuga error corrupti facere iste    dicta quisquam tenetur.",
    },
    {
      avatar: AVTR1,
      name: "customer name",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis   modi corrupti odit. Eaque, quis, reiciendis nam dolores deserunt    officia, ratione atque provident fuga error corrupti facere iste    dicta quisquam tenetur.",
    },
  ];

  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3 onClick={() => navigate("/")}>Back to main screen?</h3>
              <h6>Remove Account?</h6>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
              <button
                onClick={() => navigate("/addEvent")}
                className="profileScreen__signOut"
              >
                Add Event
              </button>
              <h6 onClick={() => setHide(true)} className="review_tag">
                Add a review
              </h6>
            </div>
          </div>
        </div>
      </div>
      {!hide ? (
        <Swiper
          className="container1 testimonials__container"
          modules={[Pagination, Navigation, Scrollbar, A11y]}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="review_div">
          <div className="innerreview_div">
            <div className="text_div">
              <textarea
                className="text_rev"
                placeholder="Start typing the review..."
                ref={reviewRef}
                cols="84"
                rows="5"
              />
            </div>
            <div className="radio_div">
              <div className="container3">
                <h2>
                  {" "}
                  Have you registered for a event through our website before?
                </h2>

                <ul>
                  <li>
                    <input type="radio" id="f-option" name="selector" />
                    <label for="f-option">Yes</label>

                    <div className="check"></div>
                  </li>

                  <li>
                    <input type="radio" id="s-option" name="selector" />
                    <label for="s-option">No</label>

                    <div className="check">
                      <div className="inside"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn_div">
              <button onClick={() => setHide(false)} className="review_tag1">
                Add review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileScreen;
