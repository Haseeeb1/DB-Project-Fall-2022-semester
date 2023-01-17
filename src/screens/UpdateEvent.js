import Nav from "../Nav";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Addevent.css";
import axios from "axios";
import { login, logout, selectUser } from "..//features/userSlice";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UpdateEvent() {
  const search = useLocation().search;

  // const user = useSelector(selectUser);
  const [signUpForm, setSignUpForm] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const name = new URLSearchParams(search).get("name");
  const imagePath = new URLSearchParams(search).get("image");
  const fee = new URLSearchParams(search).get("fee");
  const location = new URLSearchParams(search).get("location");
  const description = new URLSearchParams(search).get("desc");
  const date = new URLSearchParams(search).get("date");
  const seats = new URLSearchParams(search).get("seats");
  const category = new URLSearchParams(search).get("category");

  const [name1, setName1] = useState(name);
  const [fee1, setFee1] = useState("45");
  const [location1, setLocation1] = useState(location);
  const [desc1, setDesc1] = useState(description);
  const [date1, setDate1] = useState("2022-01-04");
  const [seats1, setSeats1] = useState(seats);
  const [category1, setCategory1] = useState(category);

  const Update = (e) => {
    e.preventDefault();
    console.log(file);
    if (
      name1 == "" ||
      fee1 == "" ||
      location1 == "" ||
      desc1 == "" ||
      date1 == "" ||
      seats1 == "" ||
      category1 == ""
    ) {
      toast.error("Incomplete Credentials");
    } else if (!file) toast.error("Add Image to complete the form.");
    else {
      if (file.size > 2097152) {
        toast.error("Image too large, Maximum limit is 2mb.");
        return;
      }
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

  {
    /*
 const search = useLocation().search;
  const id = new URLSearchParams(search).get('eventId');
  
  const [file, setFile] = useState(null);
  
  const [name, setName] = useState('');
  const [fee, setFee ] = useState(0);
  const [location, setLocation] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [seats, setSeats] = useState('');
  const [category, setCategory] = useState('');

  const getEvent = () =>{
    try{
      axios.get(`http://localhost:5000/events/${id}`)
      .then( res => {
      setName(res.data[0].name);
      setFee(res.data[0].registration_fee);
      setLocation(res.data[0].location);
      setDesc(res.data[0].desription);
      setDate(res.data[0].date);
      setSeats(res.data[0].max_people);
      setCategory(res.data[0].category);
      });
      }
      catch(err){
        console.log(err)
      }
  }


  React.useEffect(() => {
    getEvent();
  },[])

  const Update = (e) => {
    e.preventDefault();
    if (
      name == "" ||
      fee == "" ||
      location == "" ||
      desc == "" ||
      date == "" ||
      seats == "" ||
      category == ""
    ) {
      toast.error("Incomplete Credentials");
    } 
    else {
      const formData = new FormData();
      formData.append('eventId', id)
      formData.append('name', name);
      formData.append('location', location);
      formData.append('description', desc);
      formData.append('registration_fee', fee);
      formData.append('category', category);
      formData.append('date', date);
      formData.append('max_people', seats);
      if(file){
        formData.append('image', file)
      }
      axios.patch('http://localhost:5000/events', formData).then(res => {
        if(res.status === 200){
          toast.success("Event Updated!!!")
        }
          else{
            toast.success("Cant Update At The Moment")
          }
      })
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
  }

  return (
    <div className="AddEvent_screen">
      <Nav />
      <div className="loginScreen__gradient" />
      <div className="loginScreen__body">
        <div className="addEventScreen">
          <form>
            <div class="waviy">
              <span>U</span>
              <span>P</span>
              <span>D</span>
              <span>A</span>
              <span>T</span>
              <span>E</span>
              <span> &nbsp;&nbsp;</span>
              <span>E</span>
              <span>V</span>
              <span>E</span>
              <span>N</span>
              <span>T</span>
            </div>

            <input
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              placeholder="Event Name"
              type="text"
            />

            <input
              value={fee1}
              onChange={(e) => setFee1(e.target.value)}
              placeholder="Fee"
              type="number"
            />

            <input
              value={location1}
              onChange={(e) => setLocation1(e.target.value)}
              placeholder="Location"
              type="text"
            />
            <input
              value={desc1}
              onChange={(e) => setDesc1(e.target.value)}
              type="text"
              placeholder="Description"
            />

            <select
              value={category1}
              onChange={(e) => setCategory1(e.target.value)}
              name="Event"
              id="types"
            >
              <option value="Main campus">Main Campus</option>
              <option value="Sports">Sports</option>
              <option value="Seminar">Seminar</option>
              <option value="Extra">Extra-curricular</option>
            </select>

            <div className="divide_div">
              <input
                value={date1}
                onChange={(e) => setDate1(e.target.value)}
                placeholder="Date"
                type="date"
              />
              <input
                value={seats1}
                onChange={(e) => setSeats1(e.target.value)}
                placeholder="Maximum Tickets/Seats"
                type="number"
              />
            </div>
            <h5 className="select_tag">Select Image</h5>
            <input type="file" onChange={(e) => onFileChange(e)} />
            <button
              className="add_btn"
              type="submit"
              onClick={Update} /*onClick={addEvent}*/
            >
              Update Event
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

export default UpdateEvent;
