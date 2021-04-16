import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8lJ-Sr7LyE0F0KYsTKUd1gPby51dBYZA",
    authDomain: "myapp-59a1d.firebaseapp.com",
    projectId: "myapp-59a1d",
    storageBucket: "myapp-59a1d.appspot.com",
    messagingSenderId: "80740752308",
    appId: "1:80740752308:web:be3a1d637bdbe7920ab0e1",
    measurementId: "G-8ZV3TZVG1G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
