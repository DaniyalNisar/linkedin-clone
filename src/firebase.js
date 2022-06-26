// import firebase from "firebase";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNf3-ZSjzjGJ8N3XENQZ6iUlkEhU85x3s",
  authDomain: "linkedin-clone-yt-fd724.firebaseapp.com",
  projectId: "linkedin-clone-yt-fd724",
  storageBucket: "linkedin-clone-yt-fd724.appspot.com",
  messagingSenderId: "247827898738",
  appId: "1:247827898738:web:c4adf752fcbed3e928bdeb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
