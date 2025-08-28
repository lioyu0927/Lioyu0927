
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.0/firebase-analytics.js";

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
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Auth functions
export const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    if (error.code === 'auth/popup-blocked') {
      // 팝업이 차단된 경우 리다이렉트 방식 사용
      console.log('팝업이 차단되어 리다이렉트 방식으로 로그인합니다.');
      return await signInWithRedirect(auth, provider);
    }
    throw error;
  }
};
export const logout = () => signOut(auth);
export { onAuthStateChanged };
