// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import "firebase/auth"; // Add other Firebase modules you may need (e.g., 'firebase/firestore')
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiadhSr55Q7JvnJDD3iZUAwIdDq5iuZrg",
  authDomain: "todo-auth-fd633.firebaseapp.com",
  projectId: "todo-auth-fd633",
  storageBucket: "todo-auth-fd633.appspot.com",
  messagingSenderId: "1057664055629",
  appId: "1:1057664055629:web:2dc9fb0f519c3f43541f04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;
