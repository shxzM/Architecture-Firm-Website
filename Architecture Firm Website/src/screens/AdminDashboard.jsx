import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './css/AdminDashboard.module.css';

import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

import AdminHeader from '../components/AdminHeader';
import ProjectsList from '../components/ProjectsList';
import MessagesList from '../components/MessagesList';
import ClientList from '../components/ClientList';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/update/${projectId}`);
  };

  return (
    <div className={styles.dashboardContainer}>
      <AdminHeader />

      <main className={styles.main}>
        <h2 className={styles.title}>Welcome to the Admin Dashboard</h2>
        <hr />
        <br />

        {/* Projects Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Your Projects</h3>
            <Link to="/AdminProjects">
              <button className={styles.viewAllButton}>View All</button>
            </Link>
          </div>
          <ProjectsList onClick={handleProjectClick} numberOfProjects={4} />
        </section>

        <hr /><br />

        {/* Messages Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Your Messages</h3>
            <Link to="/AdminMessages">
              <button className={styles.viewAllButton}>View All</button>
            </Link>
          </div>
          <MessagesList numberOfProjects={6}/>
        </section>
        <hr /><br />

        {/* Clients Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Your Clients</h3>
            <Link to="/AdminClients">
              <button className={styles.viewAllButton}>View All</button>
            </Link>
          </div>
          <ClientList numberOfProjects={6}/>
        </section>
      </main>
    </div>
  );
}
