import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
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
export const db = getFirestore(app);
export const storage = getStorage();
