// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDllO5LcrLmOfvHRHHQZ6UzDbdyvIeLVjU",
  authDomain: "react-dragon-news-auth-89ecf.firebaseapp.com",
  projectId: "react-dragon-news-auth-89ecf",
  storageBucket: "react-dragon-news-auth-89ecf.appspot.com",
  messagingSenderId: "930450968327",
  appId: "1:930450968327:web:9aa2deb3f830297c577fa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;