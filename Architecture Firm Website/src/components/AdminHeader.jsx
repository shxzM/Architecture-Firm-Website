import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import styles from './css/AdminHeader.module.css';

export default function AdminHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/admin');
    } catch (err) {
      console.error('Sign-out error:', err.message);
      alert('Something went wrong during sign-out.');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <Link to="/Admin-Dashboard" className={styles.AdminLogo}>
          <img src="/Logo.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Admin Panel</h1>
        </Link>
      </div>

      {/* 📱 Menu icon visible on mobile */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <Link
              to="/Admin-Dashboard"
              className={`${styles.navLink} ${location.pathname === '/Admin-Dashboard' ? styles.active : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AdminProjects"
              className={`${styles.navLink} ${location.pathname === '/AdminProjects' ? styles.active : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/AdminMessages"
              className={`${styles.navLink} ${location.pathname === '/AdminMessages' ? styles.active : ''}`}
            >
              Messages
            </Link>
          </li>
          <li>
            <Link
              to="/AdminClients"
              className={`${styles.navLink} ${location.pathname === '/AdminClients' ? styles.active : ''}`}
            >
              Clients
            </Link>
          </li>
          <li>
            <button onClick={handleSignOut} className={styles.signOut}>
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
