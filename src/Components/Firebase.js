
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBXCQ7aGyvXqDA35_DIsyAMFih-7KHhRYs",
  authDomain: "weatherauthentication-e9f84.firebaseapp.com",
  projectId: "weatherauthentication-e9f84",
  storageBucket: "weatherauthentication-e9f84.appspot.com",
  messagingSenderId: "314159398285",
  appId: "1:314159398285:web:8b31beaef3bf12256a11c4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
