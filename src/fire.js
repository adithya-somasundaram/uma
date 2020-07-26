import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBChAo0dozB8_m0kXx9bjS5Kr7eFo_rDDg",
    authDomain: "ultimate-memory-accelerator.firebaseapp.com",
    databaseURL: "https://ultimate-memory-accelerator.firebaseio.com",
    projectId: "ultimate-memory-accelerator",
    storageBucket: "ultimate-memory-accelerator.appspot.com",
    messagingSenderId: "231210644685",
    appId: "1:231210644685:web:0804eecbe7047288ab6584",
    measurementId: "G-1G6X7GXQ8Q"
  };

  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;