import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCvUdklPc7OSsaF5hIcKIg-c9ZJ5XiIEc0",
  authDomain: "linkedin-clone-7d0fd.firebaseapp.com",
  projectId: "linkedin-clone-7d0fd",
  storageBucket: "linkedin-clone-7d0fd.appspot.com",
  messagingSenderId: "559523836157",
  appId: "1:559523836157:web:6381c73ae96df99e718e94"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);  
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
