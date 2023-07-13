// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKCqgVXUOtHCwZYiERgcjdSwU21LEt00M",
  authDomain: "astrosolutions-60a17.firebaseapp.com",
  projectId: "astrosolutions-60a17",
  storageBucket: "astrosolutions-60a17.appspot.com",
  messagingSenderId: "38535506067",
  appId: "1:38535506067:web:49610b34e9efcf449a8566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)