// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoOW5F6bjI6wtqFVk7uNz6dc6uZKvn2GI",
  authDomain: "hey-hi-media.firebaseapp.com",
  projectId: "hey-hi-media",
  storageBucket: "hey-hi-media.appspot.com",
  messagingSenderId: "608898541893",
  appId: "1:608898541893:web:03919b601075c41900762c",
  measurementId: "G-Q9TBZ37HRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


console.log('Hello')