// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this for Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyB5x99p3K-5kY8oQBMHAEUe7qqeM-q6YeU",
  authDomain: "walkers-supermarket.firebaseapp.com",
  projectId: "walkers-supermarket",
  storageBucket: "walkers-supermarket.firebasestorage.app",
  messagingSenderId: "821876633127",
  appId: "1:821876633127:web:e70971917ea586c735a802",
  measurementId: "G-V93X9TDQDT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth, analytics };
