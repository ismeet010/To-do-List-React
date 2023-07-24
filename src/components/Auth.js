import React from "react";
import app from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Auth() {
  const handleSignIn = async () => {
    // Example usage of GoogleAuthProvider
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    try {
      await signInWithPopup(auth, provider);
      // User signed in successfully
    } catch (error) {
      // Handle error
      console.error("Error signing in:", error);
    }
  };
  return <button onClick={handleSignIn}>Sign In with Google</button>;
}
