// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRqKm54MOXsk7h-Ob0wIDfUluNXxJ17kc",
  authDomain: "formbharlo-17ccd.firebaseapp.com",
  projectId: "formbharlo-17ccd",
  storageBucket: "formbharlo-17ccd.appspot.com",
  messagingSenderId: "627782193759",
  appId: "1:627782193759:web:17e67a58ee357c811941ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);
