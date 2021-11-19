import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApkkvvAikniIoAl9BixkWqPcdSi97RFKg",
  authDomain: "roomie-dev-41f4d.firebaseapp.com",
  projectId: "roomie-dev-41f4d",
  storageBucket: "roomie-dev-41f4d.appspot.com",
  messagingSenderId: "1001182466564",
  appId: "1:1001182466564:web:8807fcd61318670d35db51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();