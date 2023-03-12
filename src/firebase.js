import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAl6JqAnEegYMwJ1hGkkyURnHsCts8K37o",
    authDomain: "video-streaming-app-630a6.firebaseapp.com",
    projectId: "video-streaming-app-630a6",
    storageBucket: "video-streaming-app-630a6.appspot.com",
    messagingSenderId: "538662103553",
    appId: "1:538662103553:web:89ffefe996ba9624422e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;