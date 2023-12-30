// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//import all the functions from firebase database 
import {getDatabase, ref, child, get, set, remove, update} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5jJyoCi1xWm30fR7CanAZAqzm-uAFSqk",
    authDomain: "birthday-16d18.firebaseapp.com",
    databaseURL: "https://birthday-16d18-default-rtdb.firebaseio.com",
    projectId: "birthday-16d18",
    storageBucket: "birthday-16d18.appspot.com",
    messagingSenderId: "272701632979",
    appId: "1:272701632979:web:9e59a4d2d6b6635422bf26",
    measurementId: "G-385672RNRD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

    for (var i = 1; i <= 20; i++) 
    {
          var date = new Date().toJSON().slice(5, 10);
          var user_ref = ref(database)
              get(child(user_ref,'users/' +i)).then((snapshot) => {
              var data = snapshot.val();
              var ddob = data.dob.slice(5, 10);
              if (date == ddob) 
              {
                document.getElementById("name").innerText=data.Name;
                document.getElementById("note").innerText=data.note;
              }
          });
    }
 
