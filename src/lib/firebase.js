// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-6d7eb.firebaseapp.com",
  projectId: "react-chat-6d7eb",
  storageBucket: "react-chat-6d7eb.appspot.com",
  messagingSenderId: "627452723384",
  appId: "1:627452723384:web:968bc5be6e09bd8017b44d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
