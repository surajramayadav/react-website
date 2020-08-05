import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCYBnsu1TL3pgSMf3eQg5yBHS7S4mQE-LQ",
    authDomain: "firbase-crud-a1d6c.firebaseapp.com",
    databaseURL: "https://firbase-crud-a1d6c.firebaseio.com",
    projectId: "firbase-crud-a1d6c",
    storageBucket: "firbase-crud-a1d6c.appspot.com",
    messagingSenderId: "636758262971",
    appId: "1:636758262971:web:2ca1691afa1b2956add59e"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;