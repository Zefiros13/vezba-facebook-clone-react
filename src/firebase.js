
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDB7dtBGzEPHQAjfQ8pFdiCakpbJqDgd9Y",
    authDomain: "facebook-clone-d2d80.firebaseapp.com",
    projectId: "facebook-clone-d2d80",
    storageBucket: "facebook-clone-d2d80.appspot.com",
    messagingSenderId: "614109131940",
    appId: "1:614109131940:web:675e68a42727c323586231",
    measurementId: "G-12QW7GL743"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider };
export default db;
