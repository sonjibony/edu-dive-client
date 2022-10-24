// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJIc3BRM1fjnGwI7vkOKYgGJMZbfYgKV4",
  authDomain: "edu-dive.firebaseapp.com",
  projectId: "edu-dive",
  storageBucket: "edu-dive.appspot.com",
  messagingSenderId: "57823587145",
  appId: "1:57823587145:web:b12af38a0fd7a74cd3c898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;