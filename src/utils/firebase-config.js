
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBSpVWvE7HCOtRhJXNhsnfrdP8jeCO5AHA",
  authDomain: "react-netflix-clone-2f3ce.firebaseapp.com",
  projectId: "react-netflix-clone-2f3ce",
  storageBucket: "react-netflix-clone-2f3ce.appspot.com",
  messagingSenderId: "173194342965",
  appId: "1:173194342965:web:1cf9679f981647f3be777c",
  measurementId: "G-WSBXJZDMMG"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
