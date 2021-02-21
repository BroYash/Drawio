// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCR5dyBLPoLm4eoI1MqqSbpRgStjwGeLVw",
  authDomain: "pictio-ab52a.firebaseapp.com",
  projectId: "pictio-ab52a",
  storageBucket: "pictio-ab52a.appspot.com",
  messagingSenderId: "368997662770",
  appId: "1:368997662770:web:cf3a1946442795860c7c2b",
  measurementId: "G-EHTV5FD5E6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
