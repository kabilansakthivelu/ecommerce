import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const app = firebase.initializeApp({
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_MESSAGING_APP_ID,
});

export const auth = firebase.auth();
export const db = firebase.firestore();
