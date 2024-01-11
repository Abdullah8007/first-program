import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoReIXNocYnmtreNaIXS0907Qzm8rCax4",
  authDomain: "portfolio-contact-8cfa8.firebaseapp.com",
  projectId: "portfolio-contact-8cfa8",
  storageBucket: "portfolio-contact-8cfa8.appspot.com",
  messagingSenderId: "976356658913",
  appId: "1:976356658913:web:cd555e0d247c46658871a0",
  measurementId: "G-91RXEDQG96"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);