import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBXGBXE0eTCzIEFsjC7JP7pmek6jN5vZGg",
    authDomain: "crwn-db-7d4d8.firebaseapp.com",
    databaseURL: "https://crwn-db-7d4d8.firebaseio.com",
    projectId: "crwn-db-7d4d8",
    storageBucket: "crwn-db-7d4d8.appspot.com",
    messagingSenderId: "965303708849",
    appId: "1:965303708849:web:3cec3d0d6f00e3e0300690",
    measurementId: "G-ELGNJ9MH2Z"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle =()=> auth.signInWithPopup(provider);

export default firebase;