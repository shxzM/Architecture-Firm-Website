import React, { useState } from 'react';
import styles from "./css/AdminLoginForm.module.css";
import { auth, ADMIN_EMAIL } from "../config/firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const SignIn = async () => {
    if (!password) {
      alert("Please enter your password");
      return;
    }
    
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, ADMIN_EMAIL, password);
      navigate("/Admin-Dashboard", { replace: true });
    } catch (err) {
      console.error("Login error:", err.message);
      alert("Incorrect password or login issue.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    try {
      setIsLoading(true);
      await sendPasswordResetEmail(auth, ADMIN_EMAIL);
      alert("Password reset email sent! Please check your inbox.");
    } catch (err) {
      console.error("Password reset error:", err.message);
      alert("Failed to send password reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const BackToWebsite = () => {
    navigate("/")
  }

  return (
    <div className={styles.AdminFormContainer}>
      <h2>Admin Login</h2>
      <input value="Admin" disabled />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            SignIn();
          }
        }}
      />
      <button onClick={SignIn} disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign In"}
      </button>
      <Link 
        onClick={handleForgotPassword} 
        className={styles.forgotPassword}
        style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
      >
        Forgot Password?
      </Link>
      <button onClick={BackToWebsite} disabled={isLoading}>Back to Website</button>
    </div>
  );
}
