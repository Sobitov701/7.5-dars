// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJqUkVFLs-AvBp0gZtusl2j231W4JMCuo",
  authDomain: "user-276be.firebaseapp.com",
  projectId: "user-276be",
  storageBucket: "user-276be.firebasestorage.app",
  messagingSenderId: "601432065586",
  appId: "1:601432065586:web:06d361e1d84bb5948d9e2b",
  measurementId: "G-6HBXYWXZPY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
