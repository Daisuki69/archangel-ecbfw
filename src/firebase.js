import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuOM7edOoOmL2hqKEq79zOxCKtfsehH8Q",
  authDomain: "biclj-e1b31.firebaseapp.com",
  projectId: "biclj-e1b31",
  storageBucket: "biclj-e1b31.firebasestorage.app",
  messagingSenderId: "73002501832",
  appId: "1:73002501832:web:67f3789a5074451df7c7fd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);