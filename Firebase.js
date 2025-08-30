// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// Auth functions
export const signInWithGoogle = async() => {
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

// 사용자 설정 저장 및 불러오기 함수
export const saveUserSettings = async(userId, settings) => {
    try {
        await setDoc(doc(db, 'userSettings', userId), {
            settings,
            updatedAt: new Date().toISOString()
        });
        return true;
    } catch (error) {
        console.error('설정 저장 중 오류 발생:', error);
        return false;
    }
};

export const getUserSettings = async(userId) => {
    try {
        const docRef = doc(db, 'userSettings', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().settings;
        } else {
            return null; // 기본 설정을 반환하거나 새로운 설정을 생성
        }
    } catch (error) {
        console.error('설정 불러오기 중 오류 발생:', error);
        return null;
    }
};