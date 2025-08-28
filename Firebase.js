// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = { // Import the functions you need from the SDKs you need
                       import { initializeApp } from "firebase/app";
                       import { getAnalytics } from "firebase/analytics";
                       // TODO: Add SDKs for Firebase products that you want to use
                       // https://firebase.google.com/docs/web/setup#available-libraries

                       // Your web app's Firebase configuration
                       // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
                       const app = initializeApp(firebaseConfig);
                       const analytics = getAnalytics(app); };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);