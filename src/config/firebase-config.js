import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBTFbf3Ut7r6nBonvejgGNhfdHvduSbF9g",
    authDomain: "hostelbook-8e7a3.firebaseapp.com",
    projectId: "hostelbook-8e7a3",
    storageBucket: "hostelbook-8e7a3.appspot.com",
    messagingSenderId: "619132017785",
    appId: "1:619132017785:web:b063b80107314bd4d588a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;