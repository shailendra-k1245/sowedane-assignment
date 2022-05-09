// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Ko_uG6MrFrB67r5mMUa93Q7q__OzdBk",
  authDomain: "registration-form-1f63c.firebaseapp.com",
  databaseURL: "https://registration-form-1f63c-default-rtdb.firebaseio.com",
  projectId: "registration-form-1f63c",
  storageBucket: "registration-form-1f63c.appspot.com",
  messagingSenderId: "933796822919",
  appId: "1:933796822919:web:5e17718b2c86228f8c9d22",
  measurementId: "G-S5L4WSDB9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);