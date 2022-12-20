// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5UO00x60TL5GO69FAWfsQPlojBPgJhcM",
  authDomain: "netflix-clone-new-d29fd.firebaseapp.com",
  projectId: "netflix-clone-new-d29fd",
  storageBucket: "netflix-clone-new-d29fd.appspot.com",
  messagingSenderId: "97684863533",
  appId: "1:97684863533:web:1fcab7fd189e34fdfe56a4",
  measurementId: "G-6JZQD7XM83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
