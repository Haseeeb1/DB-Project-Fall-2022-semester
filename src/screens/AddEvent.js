import Nav from "../Nav";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import toast, { Toaster } from "react-hot-toast";
import "./Addevent.css";

function AddEvent() {
  const [signUpForm, setSignUpForm] = useState(false);

  const NameRef = useRef(null);
  const idRef = useRef(null);
  const LocationRef = useRef(null);
  const DateRef = useRef(null);
  const MaxRef = useRef(null);
  const FeeRef = useRef(null);
  const [image, setImage] = React.useState();

  const signUp = (e) => {
    e.preventDefault();
    if (
      NameRef.current.value == "" ||
      idRef.current.value == "" ||
      LocationRef.current.value == "" ||
      DateRef.current.value == "" ||
      MaxRef.current.value == "" ||
      FeeRef.current.value == ""
    ) {
      toast.error("Incomplete Credentials");
    } else if (!image) toast.error("Add Image to complete the form.");
    else {
      if (image.size > 2097152) {
        toast.error("Image too large, Maximum limit is 2mb.");
        return;
      }
    }
  };

  return (
    <div className="AddEvent_screen">
      <Nav />
      <div className="loginScreen__gradient" />
      <div className="loginScreen__body">
        <div className="addEventScreen">
          <form>
            <h1>Add a New Event</h1>
            <input ref={NameRef} placeholder="Name" type="text" />
            <input ref={idRef} placeholder="ID" type="number" />
            <input ref={FeeRef} placeholder="Fee" type="number" />
            <input ref={LocationRef} placeholder="Location" type="text" />
            <input ref={DateRef} placeholder="Date" type="date" />
            <input
              ref={MaxRef}
              placeholder="Maximum Tickets/Seats"
              type="number"
            />

            <h5 className="select_tag">Select Image</h5>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image-upload"
              accept="image/png ,image/jpeg"
            />
            <button type="submit" onClick={signUp}>
              Add Event
            </button>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
