import React from "react";
import styles from "./css/GalleryFrame.module.css";

const GalleryFrame = ({ src, alt }) => {
    return (
        <div className={styles.imageWrapper}>
          <img src={src} alt="gallery" className={styles.image} />
        </div>
      );
    }

export default GalleryFrame