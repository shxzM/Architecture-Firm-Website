import React from 'react';
import styles from './css/ProjectCard.module.css';
import { FaArrowRight } from 'react-icons/fa';

function ProjectCard({ image, title, location, type, size, onClick }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.details}>
          {location} &nbsp; <span className={styles.dot}>•</span> &nbsp; {type} &nbsp; 
          <span className={styles.dot}>•</span> &nbsp; {size}
        </p>
        <button className={styles.button} onClick={onClick}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
