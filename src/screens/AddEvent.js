import Nav from "../Nav";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Addevent.css";
import axios from "axios";
import { login, logout, selectUser } from "..//features/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AddEvent() {
  // const user = useSelector(selectUser);
  // const [signUpForm, setSignUpForm] = useState(false);
  //const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const NameRef = useRef(null);
  const LocationRef = useRef(null);
  const DateRef = useRef(null);
  const MaxRef = useRef(null);
  const FeeRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const [image, setImage] = React.useState();

  const signUp = (e) => {
    e.preventDefault();
    if (
      NameRef.current.value == "" ||
      LocationRef.current.value == "" ||
      DateRef.current.value == "" ||
      MaxRef.current.value == "" ||
      FeeRef.current.value == "" ||
      descriptionRef.current.value == "" ||
      categoryRef.current.value == ""
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

  /* const addEvent = (e) => {
    e.preventDefault();
    if (
      NameRef.current.value == "" ||
      categoryRef.current.value == "" ||
      LocationRef.current.value == "" ||
      DateRef.current.value == "" ||
      FeeRef.current.value == "" ||
      descriptionRef == "" ||
      MaxRef.current.value == ""
    ) {
      toast.error("Incomplete Credentials");
      // } else if (!image) toast.error("Add Image to complete the form.");
      // else {
      //   if (image.size > 2097152) {
      //     toast.error("Image too large, Maximum limit is 2mb.");
      //     return;
      //   }
      // }
    } else {
      console.log(NameRef.current.value);
      const formData = new FormData();
      formData.append("name", NameRef.current.value);
      formData.append("location", LocationRef.current.value);
      formData.append("description", descriptionRef.current.value);
      formData.append("registration_fee", FeeRef.current.value);
      formData.append("people_going", 0);
      formData.append("category", categoryRef.current.value);
      formData.append("created_by", user.uid);
      formData.append("date", DateRef.current.value);
      console.log(formData);
      formData.append("image", file);
      axios
        .post("http://localhost:5000/events", formData)
        .then((ev) => {
          console.log(ev.data);
          NameRef.current.value = "";
          categoryRef.current.value = "";
          LocationRef.current.value = "";
          DateRef.current.value = "";
          FeeRef.current.value = "";
          descriptionRef.current.value = "";
          toast.success("Event Has Been Added!!!");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Sorry Cant Add Event At The Moments");
        });
    }
  };
 

  const onFileChange = async (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    // const data = new FormData();
    // data.append("image", e.target.files[0]);
    // console.log(data);
    //   await axios.post('http://localhost:5000/single', data)
    //   toast.success("Event Has Been Added!!!")})
    //   .catch(() => )
  };
   */

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
            <input ref={descriptionRef} type="text" placeholder="Description" />

            <select ref={categoryRef} name="Event" id="types">
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
            <input type="file" /*onChange={(e) => onFileChange(e)}*/ />
            <button
              className="add_btn"
              type="submit"
              onClick={signUp} /*onClick={addEvent}*/
            >
              Add Event
            </button>
          </form>
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

export default AddEvent;
