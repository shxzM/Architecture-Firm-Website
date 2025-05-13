import React from 'react';
import styles from './css/ProjectCard.module.css';
import { FaArrowRight, FaTrash } from 'react-icons/fa';
import { deleteDoc, doc , getDoc} from 'firebase/firestore';
import { db } from '../config/firebase';
import { CLOUD_NAME, API_KEY, API_SECRET } from '../config/cloudinary';
import CryptoJS from 'crypto-js';

function ProjectCardFirebase({ image, title, location, type, onClick, projectID }) {
  const getPublicIdFromUrl = (url) => {
    const parts = url.split('/upload/');
    if (parts.length !== 2) return null;
    return parts[1].split('/')[1].split('.')[0];
  };

  const deleteImageFromCloudinary = async (publicId) => {
    if (!publicId) {
      console.error("Public ID is missing.");
      return;
    }
    
    const timestamp = Math.floor(Date.now() / 1000);
    const signatureString = `public_id=${publicId}&timestamp=${timestamp}${API_SECRET}`;
    const signature = CryptoJS.SHA1(signatureString).toString(CryptoJS.enc.Hex);
  
    const formData = new FormData();
    formData.append('public_id', publicId);
    formData.append('api_key', API_KEY);
    formData.append('timestamp', timestamp);
    formData.append('signature', signature);
  
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`, {
        method: 'POST',
        body: formData,
      });
  
      const result = await res.json();
      return result;
    } catch (error) {
      console.error('Fetch error:', error);
      return null;
    }
  };

  const handleDelete = async (e) => {
    e.stopPropagation(); // Prevent triggering the card click event
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      try {
        // Get the project document to access all images
        const projectRef = doc(db, 'Projects', projectID);
        const projectDoc = await getDoc(projectRef);
        const projectData = projectDoc.data();

        // Delete all images from Cloudinary
        if (projectData.Images && Array.isArray(projectData.Images)) {
          const deletePromises = projectData.Images.map(async (imgUrl) => {
            const publicId = getPublicIdFromUrl(imgUrl);
            if (publicId) {
              return deleteImageFromCloudinary(publicId);
            }
            return null;
          });

          await Promise.all(deletePromises);
        }

        // Delete the project document from Firestore
        await deleteDoc(projectRef);
        
        // Refresh the page to update the list
        window.location.reload();
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Failed to delete project. Please try again.');
      }
    }
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.details}>
          {location} &nbsp; <span className={styles.dot}>•</span> &nbsp; {type} &nbsp; 
        </p>
        <div className={styles.actions}>
          <button className={styles.button} onClick={() => onClick(projectID)}>
            <FaArrowRight />
          </button>
          <button onClick={handleDelete} className={styles.deleteButton}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardFirebase;
