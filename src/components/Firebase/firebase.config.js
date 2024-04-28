// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVw2Kl-R-MztD3yuMF-SXyJxUSrOPZUR4",
    authDomain: "abrar-tourism.firebaseapp.com",
    projectId: "abrar-tourism",
    storageBucket: "abrar-tourism.appspot.com",
    messagingSenderId: "757540209650",
    appId: "1:757540209650:web:1a346c298358ee7d23616b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;