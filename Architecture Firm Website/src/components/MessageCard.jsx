import React from 'react';
import { FaArrowRight, FaTrash } from 'react-icons/fa';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import styles from "./css/MessageCard.module.css";

function MessageCard({ firstName, lastName, read, location, budget, onClick, messageID }) {
  const handleDelete = async (e) => {
    e.stopPropagation(); // Prevent triggering the card click event
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteDoc(doc(db, 'Messages', messageID));
        // Refresh the page to update the list
        window.location.reload();
      } catch (error) {
        console.error('Error deleting message:', error);
        alert('Failed to delete message. Please try again.');
      }
    }
  };

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
      <div className={styles.actions}>
        <FaArrowRight className={styles.icon} />
        <button onClick={handleDelete} className={styles.deleteButton}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default MessageCard;
