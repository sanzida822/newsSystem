// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi5C1wAwmBLWPLPvPFa57_D8rzmIYOcWg",
  authDomain: "the-news-dragon-ebf47.firebaseapp.com",
  projectId: "the-news-dragon-ebf47",
  storageBucket: "the-news-dragon-ebf47.appspot.com",
  messagingSenderId: "182422332071",
  appId: "1:182422332071:web:fa21cc0ba07c954e673182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;