import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCnhXaZiASxFrMoEvs0S755l68RrhLdbzY",
    authDomain: "oso-cdbc2.firebaseapp.com",
    projectId: "oso-cdbc2",
    storageBucket: "oso-cdbc2.appspot.com",
    messagingSenderId: "626984702777",
    appId: "1:626984702777:web:7fa72e561c96cf39d34ee8"
  };
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
