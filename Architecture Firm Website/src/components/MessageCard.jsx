import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from "./css/MessageCard.module.css";

function MessageCard({ firstName, lastName, read, location, budget, onClick, messageID }) {
  return (
    <div className={styles.Card} onClick={() => onClick(messageID)}>
      <div className={styles.infoSection}>
        <h3>{firstName} {lastName}</h3>
        <p className={styles.location}>{location}</p>
      </div>
      <div className={styles.metaSection}>
        <p className={styles.budget}>₹ {budget}</p>
        <span className={styles.status}>{read ? "⚪" : "🟢"}</span>
      </div>
      <FaArrowRight className={styles.icon} />
    </div>
  );
}

export default MessageCard;
