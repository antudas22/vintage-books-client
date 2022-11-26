// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrWTKxq9U1aiFf2UNXj7OTq_VPcJnLsZE",
    authDomain: "vintage-books-ba03c.firebaseapp.com",
    projectId: "vintage-books-ba03c",
    storageBucket: "vintage-books-ba03c.appspot.com",
    messagingSenderId: "87373315816",
    appId: "1:87373315816:web:6e11d10c0bd4a2a1e5935d"
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;