import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAROVaXzCDIbnj_vjFgax2bRouzYqZaL6g",
  authDomain: "crwn-db-b9130.firebaseapp.com",
  databaseURL: "https://crwn-db-b9130.firebaseio.com",
  projectId: "crwn-db-b9130",
  storageBucket: "crwn-db-b9130.appspot.com",
  messagingSenderId: "748547208400",
  appId: "1:748547208400:web:b0145afe295d3c50a1dad5",
  measurementId: "G-247EHLMJDH",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
