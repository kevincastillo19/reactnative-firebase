import firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCkYMXtePcGjzBrmpLjSFT_Hj0OWSFutso",
    authDomain: "reactnative-f63c6.firebaseapp.com",
    databaseURL: "https://reactnative-f63c6-default-rtdb.firebaseio.com",
    projectId: "reactnative-f63c6",
    storageBucket: "reactnative-f63c6.appspot.com",
    messagingSenderId: "133402374264",
    appId: "1:133402374264:web:871858e54991e54bb63d8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

export default firebase