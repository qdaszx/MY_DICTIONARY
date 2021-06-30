import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // config
  apiKey: "AIzaSyCQnmYFxMowpEhhzs4JjLE37BycoBZHehQ",
  authDomain: "my-dictionary-4b5f8.firebaseapp.com",
  projectId: "my-dictionary-4b5f8",
  storageBucket: "my-dictionary-4b5f8.appspot.com",
  messagingSenderId: "1053514963499",
  appId: "1:1053514963499:web:5c534327cc0e01ba0fa86e",
  measurementId: "G-NETTWMT0E8",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
