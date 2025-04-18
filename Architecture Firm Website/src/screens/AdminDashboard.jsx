import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const signout = async () => {
    try {
      await signOut(auth); // ✅ correct usage
      navigate("/admin");  // ✅ redirect after logout
    } catch (err) {
      console.error("Sign-out error:", err.message);
      alert("Something went wrong during sign-out.");
    }
  };

  return (
    <>
      <div>Admin Dashboard</div>
      <button onClick={signout}>Sign Out</button> {/* ✅ call your own function */}
    </>
  );
}
