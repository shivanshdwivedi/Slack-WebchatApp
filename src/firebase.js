import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBsGzCLL-OOjKHNNXmjriFyU6of2dZfdBc",
    authDomain: "chat-app-react-803d5.firebaseapp.com",
    databaseURL: "https://chat-app-react-803d5.firebaseio.com",
    projectId: "chat-app-react-803d5",
    storageBucket: "chat-app-react-803d5.appspot.com",
    messagingSenderId: "1038920988547",
    appId: "1:1038920988547:web:0a3727d5ff11d92b5fa8b6",
    measurementId: "G-THMR1JR205"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;

