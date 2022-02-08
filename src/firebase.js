//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyClTAxkMqlK54LauLdLPJpJHyy_c-ZxO1Q",
    authDomain: "silencio-bruno-gelato.firebaseapp.com",
    projectId: "silencio-bruno-gelato",
    storageBucket: "silencio-bruno-gelato.appspot.com",
    messagingSenderId: "111730106214",
    appId: "1:111730106214:web:45529a3de56775796032a7",
    measurementId: "G-2C3MB8WZQJ"
  };
  
  // Initialize Firebase
 // const app = initializeApp(firebaseConfig);
  //export const db = getFirestore(app); 

   const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }  
  
