// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN738SbbrOU7K3MT5-2W8L79Se77bHn18",
  authDomain: "dasfdsf-15a1b.firebaseapp.com",
  projectId: "dasfdsf-15a1b",
  storageBucket: "dasfdsf-15a1b.firebasestorage.app",
  messagingSenderId: "762434535717",
  appId: "1:762434535717:web:ffebd53f10d4f12cb3dacc",
  measurementId: "G-RR2Q46ESNF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Auth functions
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
export { onAuthStateChanged };