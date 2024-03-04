import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDxHowAxsJQwyhMFmC7D-DTO1ih5syw6pI",
  authDomain: "bharat-shakti-foundation.firebaseapp.com",
  projectId: "bharat-shakti-foundation",
  storageBucket: "bharat-shakti-foundation.appspot.com",
  messagingSenderId: "978335395948",
  appId: "1:978335395948:web:4f91008a1573a358cca849",
  measurementId: "G-36X2C2XD32",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
