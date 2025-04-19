import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from "./css/ClientCard.module.css";

function ClientCard({ firstName, lastName, location, email, phone, messageID }) {
  return (
    <div className={styles.Card}>
      <div className={styles.infoSection}>
        <h3>{firstName} {lastName}</h3>
        <p className={styles.location}>{location}</p>

        <p className={styles.budget}>{email}</p>
        <span className={styles.status}>{phone}</span>
      </div>
    </div>
  );
}

export default ClientCard;
