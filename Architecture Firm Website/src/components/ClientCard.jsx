import React from 'react';
import { FaArrowRight, FaTrash } from 'react-icons/fa';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import styles from "./css/ClientCard.module.css";

function ClientCard({ firstName, lastName, location, email, phone, messageID }) {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      try {
        await deleteDoc(doc(db, 'Clients', messageID));
        // Refresh the page to update the list
        window.location.reload();
      } catch (error) {
        console.error('Error deleting client:', error);
        alert('Failed to delete client. Please try again.');
      }
    }
  };

  return (
    <div className={styles.Card}>
      <div className={styles.infoSection}>
        <h3>{firstName} {lastName}</h3>
        <p className={styles.location}>{location}</p>

        <p className={styles.budget}>{email}</p>
        <span className={styles.status}>{phone}</span>
      </div>
      <button onClick={handleDelete} className={styles.deleteButton}>
        <FaTrash />
      </button>
    </div>
  );
}

export default ClientCard;
