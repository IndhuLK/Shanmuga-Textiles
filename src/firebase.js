// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqVZPtG5vj2OXwqGpgvIIq8OZxtRWKOQQ",
  authDomain: "shanmugatextiles-f64d2.firebaseapp.com",
  projectId: "shanmugatextiles-f64d2",
  storageBucket: "shanmugatextiles-f64d2.firebasestorage.app",
  messagingSenderId: "527862551697",
  appId: "1:527862551697:web:ce097389d0807a8387db30",
  measurementId: "G-L5MNNZ1GRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const db = getFirestore(app);
export { storage, app };
