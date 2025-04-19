import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

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

  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found</p>;

  const extractPublicId = (url) => {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename.split('.')[0]; // remove extension
  };

  const handleDeleteImage = async (url, index) => {
    const publicId = extractPublicId(url);
  
    try {
      // Call your Firebase Cloud Function
      const res = await fetch('https://<your-region>-tashdid-architects.cloudfunctions.net/deleteCloudinaryImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publicId }),
      });
  
      const result = await res.json();
  
      if (res.ok && result.success) {
        // Remove from Firestore image list
        const updatedImages = project.Images.filter((_, i) => i !== index);
        setProject((prev) => ({ ...prev, Images: updatedImages }));
  
        await updateDoc(doc(db, 'Projects', projectId), {
          Images: updatedImages,
        });
  
        alert('Image deleted successfully.');
      } else {
        console.error(result);
        alert('Failed to delete image.');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Error deleting image.');
    }
  };
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProject((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setProject((prev) => ({
      ...prev,
      CommericalorResidential: e.target.value === 'commercial',
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Form Fields */}
      <label htmlFor="Title">Title: </label>
      <input type="text" id="Title" value={project.Title} onChange={handleChange} />

      <br /><br />
      <label htmlFor="Location">Location: </label>
      <input type="text" id="Location" value={project.Location} onChange={handleChange} />

      <br /><br />
      <label htmlFor="Date">Date: </label>
      <input type="date" id="Date" value={project.Date} onChange={handleChange} />

      <br /><br />
      <span>Project Type: </span>
      <label>
        <input
          type="radio"
          name="projectType"
          value="commercial"
          checked={project.CommericalorResidential === true}
          onChange={handleRadioChange}
        /> Commercial
      </label>
      <label>
        <input
          type="radio"
          name="projectType"
          value="residential"
          checked={project.CommericalorResidential === false}
          onChange={handleRadioChange}
        /> Residential
      </label>

      <br /><br />
      <label htmlFor="Body">Body: </label>
      <input type="text" id="Body" value={project.Body} onChange={handleChange} />

      <br /><br />
      <strong>Images:</strong>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
        {project.Images?.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Project ${index}`} style={{ width: '150px', borderRadius: '8px' }} />
            <br />
            <button onClick={() => handleDeleteImage(img, index)}>Delete This Photo</button>
          </div>
        ))}
      </div>

      <br /><br />
      <button>Submit</button>
    </div>
  );
}
