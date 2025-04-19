import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import styles from './css/ProjectUpdate.module.css';
import AdminHeader from '../components/AdminHeader';
import { CLOUD_NAME, API_KEY, API_SECRET, UPLOAD_PRESET } from '../config/cloudinary';
import CryptoJS from 'crypto-js'; // For generating the signature in the frontend

export default function ProjectUpdate() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImages, setSelectedImages] = useState([]);

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
    setProject((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    const isCommercial = e.target.value === 'commercial';
    setProject((prev) => ({ ...prev, CommericalorResidential: isCommercial }));
  };

  const handleNewImageChange = (e) => {
    setSelectedImages(Array.from(e.target.files));
  };

  const getPublicIdFromUrl = (url) => {
    console.log(url + " The URL\n")
    const parts = url.split('/upload/');
    if (parts.length !== 2)
      { console.log(parts.length + "Returned Null");return null;}
    console.log(parts[1].split('/')[1].split('.')[0] + " Returned This \n")
    return parts[1].split('/')[1].split('.')[0]; // remove extension
    con
  };

  const deleteImageFromCloudinary = async (publicId) => {
    if (!publicId) {
      console.error("Public ID is missing.");
      return;
    }
    
    console.log("Attempting to delete:", publicId);
    
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
      console.log('Cloudinary API response:', result);
      return result;
    } catch (error) {
      console.error('Fetch error:', error);
      return null;
    }
  };


  const handleDeleteImage = async (imgUrl) => {
  const publicId = getPublicIdFromUrl(imgUrl);
  if (!publicId) {
    alert('Could not extract public ID from image URL');
    return;
  }

  try {
    const result = await deleteImageFromCloudinary(publicId);
    
    if (result && result.result === 'ok') {
      // Successfully deleted from Cloudinary
      const updatedImages = project.Images.filter((img) => img !== imgUrl);
      
      await updateDoc(doc(db, 'Projects', project.id), {
        Images: updatedImages,
      });

      setProject(prev => ({ ...prev, Images: updatedImages }));
      alert('Image deleted successfully!');
    } 
    else if (result && result.result === 'not found') {
      // Image not found in Cloudinary, but we can still remove it from database
      const updatedImages = project.Images.filter((img) => img !== imgUrl);
      
      await updateDoc(doc(db, 'Projects', project.id), {
        Images: updatedImages,
      });

      setProject(prev => ({ ...prev, Images: updatedImages }));
      alert('Image removed from project successfully.');
    }
    else {
      alert('Failed to delete image. Please try again.');
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    alert('An error occurred while deleting the image.');
  }
};

  const uploadToCloudinary = async (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', UPLOAD_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    return data.secure_url;
  };

  const submitButton = async () => {
    if (!project?.id) {
      alert('Project ID missing');
      return;
    }

    try {
      let newImageUrls = [];

      if (selectedImages.length > 0) {
        const uploads = selectedImages.map(uploadToCloudinary);
        newImageUrls = await Promise.all(uploads);
      }

      const updatedImages = [...(project.Images || []), ...newImageUrls];
      const updatedData = {
        ...project,
        Images: updatedImages,
      };
      delete updatedData.id;

      await updateDoc(doc(db, 'Projects', project.id), updatedData);
      alert('Project updated successfully!');

      setProject((prev) => ({ ...prev, Images: updatedImages }));
      setSelectedImages([]);
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Failed to update project.');
    }
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
        <button className={styles.uploadButton} onClick={submitButton}>
          Upload Selected Images
        </button>
        <hr />

        <div className={styles.imageSection}>
          <strong>Current Images:</strong>
          <div className={styles.imageGrid}>
            {project.Images?.map((img, index) => (
              <div key={index} className={styles.imageCard}>
                <img src={img} alt={`Project ${index}`} />
                <button onClick={() => handleDeleteImage(img)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.submitButton} onClick={submitButton}>
          Submit All Updates
        </button>
      </div>
    </>
  );
}
