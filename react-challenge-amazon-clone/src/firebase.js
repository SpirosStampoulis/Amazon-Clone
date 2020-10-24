import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUZmg0vWM4E_ZXVtWKo0WPIJUky-j-GxA",
  authDomain: "clone-7a4f2.firebaseapp.com",
  databaseURL: "https://clone-7a4f2.firebaseio.com",
  projectId: "clone-7a4f2",
  storageBucket: "clone-7a4f2.appspot.com",
  messagingSenderId: "914338059053",
  appId: "1:914338059053:web:0260187c8eb52060ca39a4",
  measurementId: "G-DM7T4THNEV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };