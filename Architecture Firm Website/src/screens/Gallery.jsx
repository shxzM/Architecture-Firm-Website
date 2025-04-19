import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "./css/Gallery.module.css";
import GalleryFrame from "../components/GalleryFrame";
import Footer from "../components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

function Gallery() {
  const [images, setImages] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Projects"));
        const allImages = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (Array.isArray(data.Images)) {
            allImages.push(...data.Images);
          }
        });

        setImages(allImages);
      } catch (error) {
        console.error("Error fetching project images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.HeaderBG}>
        <h1>THE GALLERY</h1>
      </div>

      <p className={styles.intropara}>
        Welcome to MWM Spaces' Gallery, where luxury interior experiences come alive through our stunning designs.
      </p>

      <div className={styles.grid}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className={styles.galleryImage}
            onClick={() => setFullscreenImage(src)}
          />
        ))}
      </div>

      {fullscreenImage && (
        <div className={styles.fullscreenOverlay} onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Fullscreen" className={styles.fullscreenImage} />
        </div>
      )}

      <Footer />
    </>
  );
}

export default Gallery;
