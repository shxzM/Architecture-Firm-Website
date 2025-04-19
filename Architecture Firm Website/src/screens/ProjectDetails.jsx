import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import styles from './css/ProjectDetails.module.css'; // Import the CSS module
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ Modal state

  // Fetch Firestore project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectRef = doc(db, 'Projects', projectId);
        const projectSnap = await getDoc(projectRef);
        if (projectSnap.exists()) {
          setProject({ id: projectSnap.id, ...projectSnap.data() });
        } else {
          console.error('No such document!');
        }
      } catch (err) {
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (!project) return <p className={styles.notFound}>Project not found</p>;

  return (
    <>
      <Header />
      <div
        className={styles.HeaderBG}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${project.Images[0]})`,
        }}
      >
        <h2>{project.Title}</h2>
        <div className={styles.rightHeading}>
          <p>{project.Date}</p>
          <p>{project.Location}</p>
          <p>{project.CommericalorResidential ? 'Commercial' : 'Residential'}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.details}>
          <p>{project.Body}</p>
        </div>

        <div className={styles.images}>
          <strong>IMAGES</strong>
          <div className={styles.imageGrid}>
            {project.Images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Project ${index}`}
                className={styles.image}
                onClick={() => setSelectedImage(img)} // ✅ click to view full image
              />
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Fullscreen" className={styles.modalImage} />
        </div>
      )}
      <Footer />
    </>
  );
}
