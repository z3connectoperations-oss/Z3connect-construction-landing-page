// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqlByICWavDkEJvmcqp2g8F86O4IMAJ7k",
  authDomain: "z3connect-constructions.firebaseapp.com",
  projectId: "z3connect-constructions",
  storageBucket: "z3connect-constructions.firebasestorage.app",
  messagingSenderId: "651384319827",
  appId: "1:651384319827:web:e478ccb91bfb1f016cbba6",
};

// Initialize Firebase (prevent re-initialization in Next.js hot reloads)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
