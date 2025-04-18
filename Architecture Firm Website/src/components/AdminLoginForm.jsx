import React, { useState } from 'react';
import styles from "./css/AdminLoginForm.module.css";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // 👈 import navigate hook
import { Link } from 'react-router-dom';

export default function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 use navigate

  const SignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, "admin@gmail.com", password);
      navigate("/Admin-Dashboard"); // 👈 redirect on success
    } catch (err) {
      console.error("Login error:", err.message);
      alert("Incorrect password or login issue.");
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
      />
      <button onClick={SignIn}>Sign In</button>
      <button onClick={BackToWebsite}>Back to Website</button>
    </div>
  );
}
