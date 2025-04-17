import React from 'react';
import styles from './css/ServicesBoxComponent.module.css';

const ServiceManagement = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.textGroup}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
};

export default ServiceManagement;
