import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "frozen-86760.firebaseapp.com",
  projectId: "frozen-86760",
  storageBucket: "frozen-86760.firebasestorage.app",
  messagingSenderId: "810457794099",
  appId: "1:810457794099:web:3defde325426ba2ad4c546"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

