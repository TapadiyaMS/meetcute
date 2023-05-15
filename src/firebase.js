import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAG0hbZzdOgAsKMHIShRxskyN5sut-zMZQ",
  authDomain: "peek-a-boo-bde97.firebaseapp.com",
  projectId: "peek-a-boo-bde97",
  storageBucket: "peek-a-boo-bde97.appspot.com",
  messagingSenderId: "426038193334",
  appId: "1:426038193334:web:6ef9f2ab26b6d8bc0d0a17",
  measurementId: "G-J726QFHNGN",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
