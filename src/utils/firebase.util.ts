import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
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

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth: any, additionalInformation: any) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'user', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        // create User
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try {

            setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation })
        } catch (err) {
            console.log('err', err)
        }
    }
    return userDocRef
}


export const createAuthUserWithEmailPassword = async (email: string, password: string) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}
