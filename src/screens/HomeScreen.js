import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import Row from "../Row.js";
import Sports from "../Data.js";
import { MainCampus } from "../Data.js";
import { Trending } from "../Data.js";
import { Seminar } from "../Data.js";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function HomeScreen() {
  /*  const user = useSelector(selectUser);
  
  const [adminEvents, setAdminEvents] = React.useState([]);
  const [registeredEvents, setRegisteredEvents] = React.useState([]);
  const [remainingSports, setRemainingSports] = React.useState([]);
  const [favouriteSports, setfavouriteSports] = React.useState([]);
  const [favouriteEducational, setfavouriteEducational] = React.useState([]);
  const [remainingEducational, setRemainingEducational] = React.useState([]);
  const [favouriteCoCurricullar, setfavouriteCoCurricullar] = React.useState([]);
  const [remainingCoCurricullar, setRemainingCoCurricullar] = React.useState([]);
  const [favouriteSocialService, setfavouriteSocialService] = React.useState([]);
  const [remainingSocialService, setRemainingSocialService] = React.useState([]);

  const isAdminEvent = (event) => {
    return event.created_by == user.uid;
  }


  const getSportsEvents = () =>{
    try{
    axios.get(`http://localhost:5000/events/sports/${user.uid}`)
    .then(res => {setfavouriteSports(res.data.favouriteEvents.map((ev) => ({...ev, "isFav": true})))
      setRemainingSports(res.data.remainingEvents.map((ev) => ({...ev, "isFav": false})))
    });
    }
    catch(err){
      console.log(err)
    }
  }
  const getCocurricularEvents = async() =>{
    try{
      axios.get(`http://localhost:5000/events/co-curricular/${user.uid}`)
      .then(res => {
        setfavouriteCoCurricullar(res.data.favouriteEvents.map((ev) => ({...ev, "isFav": true})))
        setRemainingCoCurricullar(res.data.remainingEvents.map((ev) => ({...ev, "isFav": false})))
      });
      }
      catch(err){
        console.log(err)
      }
  }
  const getEducationalEvents = async() =>{
    try{
      axios.get(`http://localhost:5000/events/educational/${user.uid}`)
      .then(res => {
        setfavouriteEducational(res.data.favouriteEvents.map((ev) => ({...ev, "isFav": true})))
        setRemainingEducational(res.data.remainingEvents.map((ev) => ({...ev, "isFav": false})))
      });
      }
      catch(err){
        console.log(err)
      }
  }
  
  const getSocialServiceEvents = async() =>{
    try{
      axios.get(`http://localhost:5000/events/public-service/${user.uid}`)
      .then(res => {
        setfavouriteSocialService(res.data.favouriteEvents.map((ev) => ({...ev, "isFav": true})))
        setRemainingSocialService(res.data.remainingEvents.map((ev) => ({...ev, "isFav": false})))
      });
      }
      catch(err){
        console.log(err)
      }
  }

  const getRegisteredEvents = async() =>{
    try{
      axios.get(`http://localhost:5000/events/registered/${user.uid}`)
      .then(res => {
        setRegisteredEvents(res.data);
      });
      }
      catch(err){
        console.log(err)
      }
  }

  const getAllEvents = async() =>{
    await axios.get('http://localhost:5000/events')
    .then(res => setAdminEvents(res.data.filter(isAdminEvent))) 
  }
  
  React.useEffect(() =>{
    getSportsEvents();
    getEducationalEvents();
    getCocurricularEvents();
    getSocialServiceEvents();
    getRegisteredEvents();
    getAllEvents();
  },[])
  */

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

/*  <Banner />
      {user.isAdmin  && 
      <Row Category="My Events" Data={adminEvents} />}
      {registeredEvents[0] && <Row Category="Going To" Data={registeredEvents} />}
      <Row Category="Sports" Data={favouriteSports.concat(remainingSports)} />
      <Row Category="Educational" Data={favouriteEducational.concat(remainingEducational)} />
      <Row Category="Extra Curricular" Data={favouriteCoCurricullar.concat(remainingCoCurricullar)} />
      <Row Category="Social Service" Data={favouriteSocialService.concat(remainingSocialService)} />
*/
