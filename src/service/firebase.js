// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDltP0XblANqv2aQ_3GdCkahge7fJHGT78",
  authDomain: "house-store-ecommerce.firebaseapp.com",
  projectId: "house-store-ecommerce",
  storageBucket: "house-store-ecommerce.appspot.com",
  messagingSenderId: "289398410985",
  appId: "1:289398410985:web:1fba9a9b6c74aeb110aa78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db