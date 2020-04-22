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

export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const cratedAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                cratedAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message)
        }
    }
    return userRef;
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle =()=> auth.signInWithPopup(provider);

export default firebase;