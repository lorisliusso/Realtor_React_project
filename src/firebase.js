// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb2EKwwP_QEeZWXjCkSfaXs3s5TXMAnlQ",
  authDomain: "realtor-clone-react-58429.firebaseapp.com",
  projectId: "realtor-clone-react-58429",
  storageBucket: "realtor-clone-react-58429.appspot.com",
  messagingSenderId: "901582901582",
  appId: "1:901582901582:web:3a6088bf4fea69c77ace1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
