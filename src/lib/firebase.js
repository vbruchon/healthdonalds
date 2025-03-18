// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "healthdonalds-ca4ab.firebaseapp.com",
  projectId: "healthdonalds-ca4ab",
  storageBucket: "healthdonalds-ca4ab.firebasestorage.app",
  messagingSenderId: "282405733243",
  appId: "1:282405733243:web:8e16d7dc0f39acfad573de",
  measurementId: "G-FBHB3826SW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
