import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDEZjAFvbJgMpw6wGegskMWi9goyaxe7ko",
    authDomain: "crud-firestore-d8e4b.firebaseapp.com",
    databaseURL: "https://crud-firestore-d8e4b.firebaseio.com",
    projectId: "crud-firestore-d8e4b",
    storageBucket: "crud-firestore-d8e4b.appspot.com",
    messagingSenderId: "602492084778",
    appId: "1:602492084778:web:e4d19e12a96850e956d953"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}