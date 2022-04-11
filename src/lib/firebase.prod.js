import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyCqkxqQxSD3Rl-qF_4CmDw7UdG6UI5A8QY",
  authDomain: "netflix-clone-c3935.firebaseapp.com",
  projectId: "netflix-clone-c3935",
  storageBucket: "netflix-clone-c3935.appspot.com",
  messagingSenderId: "252446692832",
  appId: "1:252446692832:web:50113c24a8c732eb090785",
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };
