import firebase from './firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5UO00x60TL5GO69FAWfsQPlojBPgJhcM",
  authDomain: "netflix-clone-new-d29fd.firebaseapp.com",
  projectId: "netflix-clone-new-d29fd",
  storageBucket: "netflix-clone-new-d29fd.appspot.com",
  messagingSenderId: "97684863533",
  appId: "1:97684863533:web:1fcab7fd189e34fdfe56a4",
  measurementId: "G-6JZQD7XM83"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore;
const auth = firebase.auth();

export { auth }
export default db