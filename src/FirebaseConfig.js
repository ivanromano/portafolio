// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK-H3lYwY2dj8Ch-CXCB2OWzK4wLE86vE",
  authDomain: "portafolios-cb6aa.firebaseapp.com",
  projectId: "portafolios-cb6aa",
  storageBucket: "portafolios-cb6aa.appspot.com",
  messagingSenderId: "631737014481",
  appId: "1:631737014481:web:119068caa782b6d49d8df0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore()

export {auth, db}
