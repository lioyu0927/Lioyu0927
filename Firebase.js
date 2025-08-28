
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/12.2.0/firebase-firestore.js";
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
export const db = getFirestore(app);
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

// Firestore functions
export const createUserProfile = async (userId, profileData) => {
  try {
    await setDoc(doc(db, 'users', userId), profileData);
    console.log('사용자 프로필 생성 완료');
  } catch (error) {
    console.error('프로필 생성 오류:', error);
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('사용자 프로필이 없습니다.');
      return null;
    }
  } catch (error) {
    console.error('프로필 가져오기 오류:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId, profileData) => {
  try {
    const docRef = doc(db, 'users', userId);
    await updateDoc(docRef, profileData);
    console.log('프로필 업데이트 완료');
  } catch (error) {
    console.error('프로필 업데이트 오류:', error);
    throw error;
  }
};

export const getAllUserProfiles = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const profiles = [];
    querySnapshot.forEach((doc) => {
      profiles.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return profiles;
  } catch (error) {
    console.error('모든 프로필 가져오기 오류:', error);
    throw error;
  }
};
