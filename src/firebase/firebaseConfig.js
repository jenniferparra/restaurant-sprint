// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx_amvQKRA94vgLZXo9wKOXhjmeA9L1i0",
  authDomain: "sprint-restaurant.firebaseapp.com",
  projectId: "sprint-restaurant",
  storageBucket: "sprint-restaurant.appspot.com",
  messagingSenderId: "18761662503",
  appId: "1:18761662503:web:b602d9701cbf038f1f8e02",
  measurementId: "G-R5V5C6JSF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const analytics = getAnalytics(app);