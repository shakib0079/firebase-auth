// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD-xvWt2yw_QusYcgl0zs9dtcmzJfVAZ4",
  authDomain: "shakibs-world.firebaseapp.com",
  projectId: "shakibs-world",
  storageBucket: "shakibs-world.firebasestorage.app",
  messagingSenderId: "831127276895",
  appId: "1:831127276895:web:786cec90594eae4efefaea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }