// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "cloud-based-task-manager.firebaseapp.com",
  projectId: "cloud-based-task-manager",
  storageBucket: "cloud-based-task-manager.appspot.com",
  messagingSenderId: "106307330213",
  appId: "1:106307330213:web:9431d4b30e894381516d4c",
  measurementId: "G-Z0HCX4LVMV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);