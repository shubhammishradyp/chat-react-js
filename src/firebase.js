import firebase from "firebase/app";
import "firebase/auth";

export const auth =firebase.initializeApp({
  apiKey: "AIzaSyAmDwCfKNzzMsD8VRnJxMj2PHA-TNI6Oic",
  authDomain: "unichat-cceed.firebaseapp.com",
  projectId: "unichat-cceed",
  storageBucket: "unichat-cceed.appspot.com",
  messagingSenderId: "279665053778",
  appId: "1:279665053778:web:0d103852e6f852aed48f8b",
  measurementId: "G-N4JLVWC5LZ"
}).auth();