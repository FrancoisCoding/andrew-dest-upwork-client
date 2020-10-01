import firebase from "firebase";

const firebaseDest = firebase;
var firebaseConfig = {
  apiKey: "AIzaSyDfhU_thjJMNrHX3YsDASkF4e-Ef2sc7OM",
  authDomain: "destinations-394c2.firebaseapp.com",
  databaseURL: "https://destinations-394c2.firebaseio.com",
  projectId: "destinations-394c2",
  storageBucket: "destinations-394c2.appspot.com",
  messagingSenderId: "234801536379",
  appId: "1:234801536379:web:b6db0f5938ed87c326b1de",
};

firebase.initializeApp(firebaseConfig);
export default firebaseDest;
