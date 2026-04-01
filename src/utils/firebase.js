// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGL96UEWtS3gis6xiUVx0kKtV1DqFJFBU",
  authDomain: "netflixgpt-80.firebaseapp.com",
  projectId: "netflixgpt-80",
  storageBucket: "netflixgpt-80.firebasestorage.app",
  messagingSenderId: "413340126069",
  appId: "1:413340126069:web:3246a1f8fa74715ead213c",
  measurementId: "G-Y6VK4PXZEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
