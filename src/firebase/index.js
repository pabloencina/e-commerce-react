import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABthac5UcAVyWfvAJuATjyUVJ_MbRQwLQ",
  authDomain: "ecommerce-abrazar-el-presente.firebaseapp.com",
  projectId: "ecommerce-abrazar-el-presente",
  storageBucket: "ecommerce-abrazar-el-presente.appspot.com",
  messagingSenderId: "974405159533",
  appId: "1:974405159533:web:ca265a3b21038366d7cd64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
