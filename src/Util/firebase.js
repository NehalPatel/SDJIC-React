import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

import { doc, getDoc, getFirestore } from "firebase/firestore";

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
export const createUserDocumentFromAuth = async (user) => {
    const userDocRef = doc(db, 'users', user.uid);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
}