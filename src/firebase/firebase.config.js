// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDINeANloItXxoUDfdrP7-Ds89eabjb35w",
  authDomain: "dragon-news-cddac.firebaseapp.com",
  projectId: "dragon-news-cddac",
  storageBucket: "dragon-news-cddac.firebasestorage.app",
  messagingSenderId: "830143153498",
  appId: "1:830143153498:web:b6704b1484804125b15f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app