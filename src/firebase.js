  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDPf86agXrIYwsFSPkhPcDNjxVl4nu3EiY",
    authDomain: "instagram-clone-react-99133.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-99133.firebaseio.com",
    projectId: "instagram-clone-react-99133",
    storageBucket: "instagram-clone-react-99133.appspot.com",
    messagingSenderId: "6019274325",
    appId: "1:6019274325:web:2816ec3abf261b157966dc",
    measurementId: "G-KNLYC3JMHZ"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};