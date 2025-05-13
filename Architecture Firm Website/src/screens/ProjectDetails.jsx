import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import styles from './css/ProjectDetails.module.css'; // Import the CSS module
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCardFirebase from '../components/ProjectCardFirebase';
import { useNavigate } from 'react-router-dom';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ Modal state
  const [featuredProjects, setFeaturedProjects] = useState([]);

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

    const fetchFeaturedProjects = async () => {
      try {
        const projectsRef = collection(db, 'Projects');
        const projectsSnap = await getDocs(projectsRef);
        const allProjects = projectsSnap.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(project => project.id !== projectId); // Exclude current project
        
        // Randomly select 3 projects
        const shuffled = allProjects.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        setFeaturedProjects(selected);
      } catch (err) {
        console.error('Error fetching featured projects:', err);
      }
    };

    fetchProject();
    fetchFeaturedProjects();
  }, [projectId]);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

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

        <div className={styles.imageGallery}>
          {project.Images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={styles.galleryImage}
            />
          ))}
        </div>

        {selectedImage && (
          <div className={styles.modal} onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Selected" className={styles.modalImage} />
          </div>
        )}

        {/* Featured Projects Section */}
        <div className={styles.featuredProjects}>
          <h3>Featured Projects</h3>
          <div className={styles.featuredProjectsGrid}>
            {featuredProjects.map((featuredProject) => (
              <div key={featuredProject.id} className={styles.featuredProjectCard}>
                <ProjectCardFirebase
                  image={featuredProject.Images[0]}
                  title={featuredProject.Title}
                  location={featuredProject.Location}
                  type={featuredProject.CommericalorResidential ? "Commercial" : "Residential"}
                  onClick={handleProjectClick}
                  projectID={featuredProject.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
