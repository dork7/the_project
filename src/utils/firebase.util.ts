// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_54nXURRTmDoirfperDV04p1nquUYw5c",
    authDomain: "udemy-crwnclothing.firebaseapp.com",
    projectId: "udemy-crwnclothing",
    storageBucket: "udemy-crwnclothing.appspot.com",
    messagingSenderId: "117925653679",
    appId: "1:117925653679:web:e54b5ec5acf83e0b6db85a",
    measurementId: "G-F071YYMZYB"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
