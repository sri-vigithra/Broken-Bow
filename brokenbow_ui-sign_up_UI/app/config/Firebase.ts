import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyAM47C4BBURIRNbMJmq8aBvviQb6-VizMk",
    authDomain: "test-5972b.firebaseapp.com",
    projectId: "test-5972b",
    storageBucket: "test-5972b.firebasestorage.app",
    messagingSenderId: "63876190373",
    appId: "1:63876190373:web:1bc9bc2128ac55861e7d4c",
    measurementId: "G-6GGNJVS83V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth , googleAuthProvider};