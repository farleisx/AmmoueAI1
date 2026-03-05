/* lib/firebase.js */
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmnZ69YDcEFcmuXIhmGxDUSPULxpI-Bmg",
    authDomain: "ammoueai.firebaseapp.com",
    projectId: "ammoueai",
    storageBucket: "ammoueai.firebasestorage.app",
    messagingSenderId: "135818868149",
    appId: "1:135818868149:web:db9280baf9540a3339d5fc",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export { sendPasswordResetEmail };

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
githubProvider.addScope('repo');

export function onAuthChange(callback) {
    return onAuthStateChanged(auth, callback);
}
