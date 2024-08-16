import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-4b6e7.firebaseapp.com",
  projectId: "reactchat-4b6e7",
  storageBucket: "reactchat-4b6e7.appspot.com",
  messagingSenderId: "933059037091",
  appId: "1:933059037091:web:b8fee4a76fb85a00507c16"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage();