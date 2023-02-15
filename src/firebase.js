import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCU0rk1BhqTAeeDybu_Lf0nGu8TAcO8Lcg",
    authDomain: "netflix-clone-9b846.firebaseapp.com",
    projectId: "netflix-clone-9b846",
    storageBucket: "netflix-clone-9b846.appspot.com",
    messagingSenderId: "186477540479",
    appId: "1:186477540479:web:82938ea5bc3981ded17b4a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;