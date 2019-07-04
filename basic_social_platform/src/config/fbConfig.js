  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var fbConfig = {
    apiKey: "AIzaSyCdn6KMd9ZNXT9vK0ZdnC6GIV38p12k2yk",
    authDomain: "shower-thoughts1.firebaseapp.com",
    databaseURL: "https://shower-thoughts1.firebaseio.com",
    projectId: "shower-thoughts1",
    storageBucket: "",
    messagingSenderId: "727318479724",
    appId: "1:727318479724:web:1da956ec20a2c48a"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig); 

  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;