import Nav from "../Nav";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import toast, { Toaster } from "react-hot-toast";
import "./Addevent.css";

function AddEvent() {
  const [signUpForm, setSignUpForm] = useState(false);

  const NameRef = useRef(null);
  const LocationRef = useRef(null);
  const DateRef = useRef(null);
  const MaxRef = useRef(null);
  const FeeRef = useRef(null);
  const DescRef = useRef(null);

  const TypeRef = useRef(null);
  const [image, setImage] = React.useState();

  /*validateWebsiteUrl = websiteUrl => {
    const urlRegEx =
      '[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?\b(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?';
    return urlRegEx.test(String(websiteUrl).toLowerCase());
  };*/

  const signUp = (e) => {
    e.preventDefault();
    if (
      NameRef.current.value == "" ||
      LocationRef.current.value == "" ||
      DateRef.current.value == "" ||
      MaxRef.current.value == "" ||
      FeeRef.current.value == "" ||
      DescRef.current.value == "" ||
      TypeRef.current.value == ""
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
            <p>Add a new</p>
            <section className="animation">
              <div className="first">
                <div>Seminar/Sports Event</div>
              </div>
              <div className="second">
                <div>Main Campus Event</div>
              </div>
              <div className="third">
                <div>Extra Curricular Event</div>
              </div>
            </section>
            <input ref={NameRef} placeholder="Event Name" type="text" />

            <input ref={FeeRef} placeholder="Fee" type="number" />

            <input ref={LocationRef} placeholder="Location" type="text" />
            <input ref={DescRef} type="text" placeholder="Description" />

            <select ref={TypeRef} name="Event" id="types">
              <option value="main campus">Main Campus</option>
              <option value="sports">Sports</option>
              <option value="seminar">Seminar</option>
              <option value="extra">Extra-curricular</option>
            </select>

            <div className="divide_div">
              <input ref={DateRef} placeholder="Date" type="date" />
              <input
                ref={MaxRef}
                placeholder="Maximum Tickets/Seats"
                type="number"
              />
            </div>
            <h5 className="select_tag">Select Image</h5>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image-upload"
              accept="image/png ,image/jpeg"
            />
            <button className="add_btn" type="submit" onClick={signUp}>
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
