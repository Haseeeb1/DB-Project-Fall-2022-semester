import React, { useRef, useState } from "react";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice.js";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import AVTR1 from "../images/D2.png";
import { useCookies } from "react-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import toast, { Toaster } from "react-hot-toast";
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
  const dispatch = useDispatch();
  const [rating, setRating] = useState();

  // const [cookies, setCookies, removeCookies] = useCookies("[users]");

  /*
const [hide, setHide] = React.useState(false);
  const [ data, setData ] = React.useState([]);
  const [ option, setOption ] = React.useState("");
  
  const  getReviews = async() => {
    axios.get('http://localhost:5000/auth/reviews')
    .then(reviews => setData(reviews.data))
  }

  React.useEffect(() => {
    getReviews()
  }, [])
  
  const reviewRef = React.useRef('');
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cookies, setCookies, removeCookies] = useCookies('[users]');

  const handleReviewPressed = async() => {
    console.log(reviewRef.current.value)
    console.log(option)
    const id = user.uid;
    await axios.post('http://localhost:5000/auth/reviews',{
      id: id,
      review: reviewRef.current.value,
      hasRegistered: option
    }
    ).then(res => toast.success(res.data))
    .catch(res => toast.error('Sorry, Cant Post Review At The Moment!!'))
    setHide(false)
  }
  */
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
            <h2>"h</h2>
            <div className="profileScreen__plans">
              <h3 onClick={() => navigate("/")}>Back to main screen?</h3>
              <h6>Remove Account?</h6>

              <button
                /*   onClick={() => {
                  removeCookies('uid');
                  removeCookies('email');
                  removeCookies('isAdmin')
                  dispatch(logout());
                  navigate('/');
                  window.location.reload()
                }
                }

{user.isAdmin && <button
                onClick={() => navigate("/addEvent")}
                className="profileScreen__signOut"
              >
                Add Event
              </button>}
                
                */
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
              <h6 onClick={() => setHide(!hide)} className="review_tag">
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
          {/*
            {data.map(({ image, name, review }, id) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__image">
                  <img key={id} 
                  src={`http://localhost:5000/resources/${image}`}
                  alt='user'/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
      */}
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
            <div className="rate">
              <input
                onChange={(e) => setRating(e.target.value)}
                type="radio"
                id="star5"
                name="rate"
                value="5"
              />
              <label for="star5" title="text">
                5 stars
              </label>
              <input
                onChange={(e) => setRating(e.target.value)}
                type="radio"
                id="star4"
                name="rate"
                value="4"
              />
              <label for="star4" title="text">
                4 stars
              </label>
              <input
                onChange={(e) => setRating(e.target.value)}
                type="radio"
                id="star3"
                name="rate"
                value="3"
              />
              <label for="star3" title="text">
                3 stars
              </label>
              <input
                onChange={(e) => setRating(e.target.value)}
                type="radio"
                id="star2"
                name="rate"
                value="2"
              />
              <label for="star2" title="text">
                2 stars
              </label>
              <input
                onChange={(e) => setRating(e.target.value)}
                type="radio"
                id="star1"
                name="rate"
                value="1"
              />
              <label for="star1" title="text">
                1 star
              </label>
            </div>
            <div className="btn_div">
              <button onClick={() => setHide(false)} className="review_tag1">
                Add review
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <div className="review_div">
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
                    <input type="radio" value="Yes" id="f-option" onChange={(ev) => setOption(ev.target.value)} name="selector" />
                    <label onChange={(ev) => setOption(ev.target.value)} for="f-option">Yes</label>

                    <div className="check"></div>
                  </li>

                  <li>
                    <input type="radio" value="No" id="s-option" onChange={(ev) => setOption(ev.target.value)} name="selector" />
                    <label   for="s-option">No</label>

                    <div className="check">
                      <div className="inside"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn_div">
              <button onClick={handleReviewPressed} className="review_tag1">
                Add review
              </button>
            </div>
          </div>
        </div>
      )}*/}
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

export default ProfileScreen;
