import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth} from '../config/firebase';
import { useNavigate, Link }  from 'react-router-dom';
import styles from './css/AdminDashboard.module.css';
import ProjectsList from '../components/ProjectsList';
import ProjectUpdate from './ProjectUpdate';
import AddProject from '../components/AddProject';


export default function AdminDashboard() {




  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // 📱 toggle nav visibility

  const signout = async () => {
    try {
      await signOut(auth);
      navigate("/admin");
    } catch (err) {
      console.error("Sign-out error:", err.message);
      alert("Something went wrong during sign-out.");
    }
  };


  const ShowProject = (projectId) => {
    console.log(projectId);
    navigate(`/update/${projectId}`);
  }

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <img src="/Logo.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Admin Panel</h1>
        </div>

        {/* 📱 Menu icon visible on mobile */}
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Messages</li>
            <li>Clients</li>
            <button onClick={signout} className={styles.signOut}>Sign Out</button>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h2>Welcome to the Admin Dashboard</h2>
        <div className={styles.horizontalRuler}></div>

        <h3>Your Projects <Link to="/">View All Projects</Link></h3>
        <div className={styles.horizontalRuler}></div>

        <ProjectsList onClick = {ShowProject}/>
        
        <AddProject/>
      </main>

    </div>
  );
}
