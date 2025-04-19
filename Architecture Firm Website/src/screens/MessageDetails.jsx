import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import styles from './css/MessageDetails.module.css';
import AdminHeader from '../components/AdminHeader';
import { Link } from 'react-router-dom';


export default function MessageDetails() {
  const { messageId } = useParams(); // ✅ This gets the messageId from the route
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        if (!messageId) return;

        const messageRef = doc(db, 'Messages', messageId); // ✅ messageId used here
        const messageSnap = await getDoc(messageRef);
        if (messageSnap.exists()) {
          setMessage({ id: messageSnap.id, ...messageSnap.data() });
        } else {
          console.error('No such message!');
        }
      } catch (err) {
        console.error('Error fetching message:', err);
      } finally {
        setLoading(false);
        console.log(messageId)
      }
    };

    fetchMessage();
  }, [messageId]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (!message) return <p className={styles.notFound}>Message not found</p>;


  const markAsRead = async () => {
    if (!messageId || !message) return;
  
    try {
      const messageRef = doc(db, 'Messages', messageId);
      await updateDoc(messageRef, {
        Read: !message.Read,
      });
      setMessage((prev) => ({ ...prev, Read: !prev.Read }));
    } catch (error) {
      console.error('Error updating message status:', error);
    }
  };


  

  return (
    <>
      <AdminHeader />
      <div className={styles.HeaderBG} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://source.unsplash.com/1600x900/?architecture,office)` }}>
        <Link to="/Admin-Dashboard" className={styles.linkButton}>Back</Link>
        <h2>Message from {message.First_Name} {message.Last_Name}</h2>
        <div className={styles.rightHeading}>
          <p>Location: {message.Location}</p>
          <p>Budget: ₹{message.Budget}</p>
          <button className={styles.button} onClick={markAsRead}>{message.Read ? "Mark as Unread" : "Mark as read"}</button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.details}>
          <strong>Full Message</strong>
          <p>{message.Message || "No message content available."}</p>
        </div>

        <div className={styles.details}>
          <strong>Contact Details</strong>
          <p>Email: {message.Email || "N/A"}</p>
          <p>Phone: {message.Phone || "N/A"}</p>
        </div>
      </div>
    </>
  );
}
