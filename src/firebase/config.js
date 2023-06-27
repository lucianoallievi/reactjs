// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6c3OUSB6jx_c4pj2IgmywnO9m7IvAdhU",
  authDomain: "ecommerce-573e8.firebaseapp.com",
  projectId: "ecommerce-573e8",
  storageBucket: "ecommerce-573e8.appspot.com",
  messagingSenderId: "1050471109051",
  appId: "1:1050471109051:web:e3ff2dd35df5888ec1349e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
