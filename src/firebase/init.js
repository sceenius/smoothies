  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDSg6Rpz8egi9J8mYWglxbg2BfgNbjOmcQ",
    authDomain: "vue-smoothies-1a6e0.firebaseapp.com",
    databaseURL: "https://vue-smoothies-1a6e0.firebaseio.com",
    projectId: "vue-smoothies-1a6e0",
    storageBucket: "vue-smoothies-1a6e0.appspot.com",
    messagingSenderId: "442258167623"
  };
  
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  
  // export firebase
  export default firebaseApp.firestore();
