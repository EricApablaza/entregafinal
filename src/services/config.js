
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dbshonen-d7a61.firebaseapp.com",
  projectId: "dbshonen-d7a61",
  storageBucket: "dbshonen-d7a61.appspot.com",
  messagingSenderId: "1081781059223",
  appId: "1:1081781059223:web:87d53f94a47d6a0cbab3d2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);