// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXfBHvEO4PU1GSQ4OZO2QZUI93EnT7n-g",
  authDomain: "authentication-d9e64.firebaseapp.com",
  projectId: "authentication-d9e64",
  storageBucket: "authentication-d9e64.appspot.com",
  messagingSenderId: "1131187232",
  appId: "1:1131187232:web:8cc00868dbb457c0ff0045"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 export {auth};
