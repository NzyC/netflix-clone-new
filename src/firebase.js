import firebase from './firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx_ne_TOJFPbJLUIrkt6AWIWYAnhvX0Xs",
  authDomain: "netflix-clone-c575c.firebaseapp.com",
  projectId: "netflix-clone-c575c",
  storageBucket: "netflix-clone-c575c.appspot.com",
  messagingSenderId: "505722932693",
  appId: "1:505722932693:web:a2b08fac211c666379415c",
  measurementId: "G-H8BGPX7NKS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore;
const auth = firebase.auth();

export { auth }
export default db