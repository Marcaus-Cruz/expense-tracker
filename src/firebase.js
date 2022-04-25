import firebase from 'firebase';
//import { initializeApp } from "firebase/app";
  
const firebaseConfig = {
    apiKey: "AIzaSyB7602g76FM5d_ajJm-h8lz_xmST3B0zVM",
    authDomain: "exp-track-bdba3.firebaseapp.com",
    databaseURL: "https://exp-track-bdba3-default-rtdb.firebaseio.com",
    projectId: "exp-track-bdba3",
    storageBucket: "exp-track-bdba3.appspot.com",
    messagingSenderId: "337970307805",
    appId: "1:337970307805:web:4289cd54f487468601b134"
  };
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

  
export default database;