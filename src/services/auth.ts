import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBREUCW_xmE21gQutCeL3xdDjGPpyqHW-8",
  authDomain: "pizza-d240d.firebaseapp.com",
  projectId: "pizza-d240d",
  storageBucket: "pizza-d240d.appspot.com",
  messagingSenderId: "691119397678",
  appId: "1:691119397678:web:135d38af6a920f6a6838bf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
