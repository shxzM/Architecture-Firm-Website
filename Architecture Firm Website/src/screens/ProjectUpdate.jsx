import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import styles from './css/ProjectUpdate.module.css';
import AdminHeader from '../components/AdminHeader';

export default function ProjectUpdate() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectRef = doc(db, 'Projects', projectId);
        const projectSnap = await getDoc(projectRef);
        if (projectSnap.exists()) {
          const data = projectSnap.data();
          setProject({ id: projectSnap.id, ...data });
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updated = { ...project, [id]: value };
    console.log('Updated Project:', updated);
    setProject(updated);
  };
  
  const handleRadioChange = (e) => {
    const isCommercial = e.target.value === 'commercial';
    const updated = { ...project, CommericalorResidential: isCommercial };
    console.log('Updated Project:', updated);
    setProject(updated);
  };

  const handleNewImageChange = () => {
    alert('Image upload is currently disabled.');
  };

  const handleDeleteImage = () => {
    alert('Image deletion is currently disabled.');
  };

  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found</p>;

  return (
    <>
      <AdminHeader />

      <div className={styles.container}>
        <h2>Update Project</h2>

        <label htmlFor="Title">Title:</label>
        <input type="text" id="Title" value={project.Title} onChange={handleChange} />

        <label htmlFor="Location">Location:</label>
        <input type="text" id="Location" value={project.Location} onChange={handleChange} />

        <label htmlFor="Date">Date:</label>
        <input type="date" id="Date" value={project.Date} onChange={handleChange} />

        <label>Project Type:</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="projectType"
              value="commercial"
              checked={project.CommericalorResidential === true}
              onChange={handleRadioChange}
            />
            Commercial
          </label>
          <label>
            <input
              type="radio"
              name="projectType"
              value="residential"
              checked={project.CommericalorResidential === false}
              onChange={handleRadioChange}
            />
            Residential
          </label>
        </div>

        <label htmlFor="Body">Description:</label>
        <textarea id="Body" value={project.Body} onChange={handleChange}></textarea>

        <hr />
        <label>Add New Images:</label>
        <input type="file" multiple onChange={handleNewImageChange} />
        <button className={styles.uploadButton} disabled>
          Upload Selected Images
        </button>
        <hr />

        <div className={styles.imageSection}>
          <strong>Current Images:</strong>
          <div className={styles.imageGrid}>
            {project.Images?.map((img, index) => (
              <div key={index} className={styles.imageCard}>
                <img src={img} alt={`Project ${index}`} />
                <button onClick={handleDeleteImage} disabled>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.submitButton} onClick={() => alert('Submit logic goes here')}>
          Submit All Updates
        </button>
      </div>
    </>
  );
}
