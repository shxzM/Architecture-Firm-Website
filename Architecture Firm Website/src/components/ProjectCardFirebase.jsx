import React from 'react';
import styles from './css/ProjectCard.module.css';
import { FaArrowRight } from 'react-icons/fa';

function ProjectCardFirebase({ image, title, location, type, onClick, projectID }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.details}>
          {location} &nbsp; <span className={styles.dot}>•</span> &nbsp; {type} &nbsp; 
        </p>
        <button className={styles.button}  onClick={() => onClick(projectID)}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default ProjectCardFirebase;
