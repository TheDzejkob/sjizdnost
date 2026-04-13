// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYTg2-CKEH0xiOJhwfcWnKAPNzpMYTGEM",
  authDomain: "weather-road-app-6057d.firebaseapp.com",
  databaseURL: "https://weather-road-app-6057d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weather-road-app-6057d",
  storageBucket: "weather-road-app-6057d.appspot.com",
  messagingSenderId: "326933448061",
  appId: "1:326933448061:web:969a2e17152287e671f814",
  measurementId: "G-997TPZ0JBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
