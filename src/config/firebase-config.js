// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChZzstBP1dw0d1jycP3I8YfLLg37f0wXo",
  authDomain: "a-cordial-invitation.firebaseapp.com",
  projectId: "a-cordial-invitation",
  storageBucket: "a-cordial-invitation.firebasestorage.app",
  messagingSenderId: "905696572241",
  appId: "1:905696572241:web:3f81c512102aef297ad970",
  measurementId: "G-SKFTYBKCGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);