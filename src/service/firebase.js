
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDltP0XblANqv2aQ_3GdCkahge7fJHGT78",
  authDomain: "house-store-ecommerce.firebaseapp.com",
  projectId: "house-store-ecommerce",
  storageBucket: "house-store-ecommerce.appspot.com",
  messagingSenderId: "289398410985",
  appId: "1:289398410985:web:1fba9a9b6c74aeb110aa78"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db