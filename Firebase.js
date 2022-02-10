import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getFunctions} from "firebase/functions";
import {getStorage} from "firebase/storage";
import {getAnalytics} from "firebase/analytics";
import {initializeAppCheck} from "firebase/app-check";

//Dev
// const firebaseConfig = {
//   apiKey: "AIzaSyApkkvvAikniIoAl9BixkWqPcdSi97RFKg",
//   authDomain: "roomie-dev-41f4d.firebaseapp.com",
//   projectId: "roomie-dev-41f4d",
//   storageBucket: "roomie-dev-41f4d.appspot.com",
//   messagingSenderId: "1001182466564",
//   appId: "1:1001182466564:web:8807fcd61318670d35db51"
// };

//Prod
const firebaseConfig = {
  apiKey: "AIzaSyDCG8Ji829VHGrhGGImrMk8B0QZoA8uY60",
  authDomain: "roomie-prod-24d36.firebaseapp.com",
  projectId: "roomie-prod-24d36",
  storageBucket: "roomie-prod-24d36.appspot.com",
  messagingSenderId: "901977154768",
  appId: "1:901977154768:web:deafa61833a6055f27ead5",
  measurementId: "G-S8Q9W3DW20"
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const functions = getFunctions();
export const storage = getStorage();
export const analytics = getAnalytics;