import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9L4Mh17psKfORcXt_cSVhg5AtGHMv47A",
    authDomain: "crwn-clothing-a8d9d.firebaseapp.com",
    projectId: "crwn-clothing-a8d9d",
    storageBucket: "crwn-clothing-a8d9d.appspot.com",
    messagingSenderId: "863211671306",
    appId: "1:863211671306:web:969c69a42658c125c4b4f3"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();
//save in firebase database
export const createUserDocumentFromAuth = async (user, info = {}) => {
    const userDocRef = doc(db, 'users', user.uid);

    const userSnapshot = await getDoc(userDocRef);

    //if user not exists in database
    if (!userSnapshot.exists()) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {

            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...info
            });

        } catch (error) {
            console.error('error creating the user: ' + error.message);
        }
    }
}

export const registerNewUser = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const loginUser = async (email, password) => {

    console.log({ auth, email, password });

    if (!email || !password) return;


    return await signInWithEmailAndPassword(auth, email, password);
}