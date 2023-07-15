import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';
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


export const signInAuthWIthUserNamePassword = async (email: string, password: string) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutUser = async () => await signOut(auth)



export const addCategoriesAndDocument = async (collectionKey: string, objectsToAdd: any) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLocaleLowerCase())
        batch.set(docRef, object)
    });
    batch.commit()
}

export const getCategoriesAndDocument = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    // console.log('querySnapshot', querySnapshot.docs)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
        const { title, items } = docSnapShot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})
    return categoryMap
}

export const onAuthChangeStateListener = (callback: any) => onAuthStateChanged(auth, callback)