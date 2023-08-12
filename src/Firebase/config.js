// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWgl1XEvGVETT_yGkwcpkqRhl5Xbl2l6M",
  authDomain: "ecommerce-frontend-6e773.firebaseapp.com",
  projectId: "ecommerce-frontend-6e773",
  storageBucket: "ecommerce-frontend-6e773.appspot.com",
  messagingSenderId: "956656890460",
  appId: "1:956656890460:web:55516cacbc30f3e94b2c99",
  measurementId: "G-CFDXEWYN6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
