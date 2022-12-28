import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoYsb98N7QX5HiBIozuS3KH7_a9KUeH7A",
  authDomain: "netflix-2-2fad6.firebaseapp.com",
  databaseURL:
    "https://netflix-2-2fad6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-2-2fad6",
  storageBucket: "netflix-2-2fad6.appspot.com",
  messagingSenderId: "809018501964",
  appId: "1:809018501964:web:405ea05eaab6e1fbb9fde9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
