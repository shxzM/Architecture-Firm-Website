import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './css/AdminDashboard.module.css';

import { auth } from '../config/firebase';
import { signOut, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

import AdminHeader from '../components/AdminHeader';
import ProjectsList from '../components/ProjectsList';
import MessagesList from '../components/MessagesList';
import ClientList from '../components/ClientList';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleProjectClick = (projectId) => {
    navigate(`/update/${projectId}`);
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      
      // Re-authenticate user before changing password
      await reauthenticateWithCredential(user, credential);
      
      // Update password
      await updatePassword(user, newPassword);
      
      setSuccess('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <AdminHeader />

      <main className={styles.main}>
        <h2 className={styles.title}>Welcome to the Admin Dashboard</h2>
        <hr />
        <br />

        {/* Password Change Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Change Password</h3>
          </div>
          <form onSubmit={handlePasswordChange} className={styles.passwordForm}>
            <div className={styles.formGroup}>
              <label htmlFor="currentPassword">Current Password:</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm New Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}
            <button type="submit" className={styles.submitButton}>Update Password</button>
          </form>
        </section>

        <hr /><br />

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
