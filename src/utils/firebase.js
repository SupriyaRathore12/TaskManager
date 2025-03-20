// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-db221.firebaseapp.com",
  projectId: "taskmanager-db221",
  storageBucket: "taskmanager-db221.firebasestorage.app",
  messagingSenderId: "763915583631",
  appId: "1:763915583631:web:288e9d2b7ed5a862e6f0fa",
  measurementId: "G-F0GMXEQQN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);