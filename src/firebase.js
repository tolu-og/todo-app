// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBADeg6djcsQMvpWPrI-pOrEyhr0RrZW5U",
  authDomain: "todo-app-react-7bf11.firebaseapp.com",
  projectId: "todo-app-react-7bf11",
  storageBucket: "todo-app-react-7bf11.appspot.com",
  messagingSenderId: "743991304307",
  appId: "1:743991304307:web:61d2175b3675b344fe8a06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
