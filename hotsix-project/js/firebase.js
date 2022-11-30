import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyAPtP5-hgX77U9XtHExRM4D6FvOwIYGxAk",
  authDomain: "hotsix-d3be3.firebaseapp.com",
  projectId: "hotsix-d3be3",
  storageBucket: "hotsix-d3be3.appspot.com",
  messagingSenderId: "598113057612",
  appId: "1:598113057612:web:8bb38dd91c333cd36c6de9",
  measurementId: "G-XBZXWHQ1GY",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const storageService = getStorage(app);
