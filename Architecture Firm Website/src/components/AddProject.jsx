import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { ProjectListCollectionRef } from '../config/firebase';
import styles from './css/AddProject.module.css';

export default function AddProject() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  const [com_or_red, setCom_or_Red] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const CLOUD_NAME = 'dw4ibgki9'; // 🔁 Replace with your actual cloud name
  const UPLOAD_PRESET = 'Tashdid Architects'; // 🔁 Replace with your unsigned upload preset

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
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

  const validateForm = () => {
    if (!title || !body || !date || !location || images.length === 0) {
      setError('Please fill in all fields and upload at least one image.');
      return false;
    }
    setError('');
    return true;
  };
  

  const onSubmitProject = async () => {
    if (!validateForm()) return;

    try {
      setUploading(true);

      const imageUrls = await Promise.all(images.map(uploadToCloudinary));

      await addDoc(ProjectListCollectionRef, {
        Title: title,
        Body: body,
        CommericalorResidential: com_or_red,
        Date: date,
        Images: imageUrls,
        Location: location,
      });

      alert("Project uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Error uploading project");
    } finally {
      setUploading(false);
    }
  };

  

  return (
    <div className={styles.AddProject}>
      <h1>Add New Projects</h1>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea name="Body" id="body" placeholder='Body' onChange={(e) => setBody(e.target.value)} ></textarea>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />

      <div className={styles.radioGroup}>
    <label>
      <input
        type="radio"
        name="projectType"
        value="true"
        checked={com_or_red === true}
        onChange={() => setCom_or_Red(true)}
      />
      Commercial Project
    </label>
    <label>
      <input
        type="radio"
        name="projectType"
        value="false"
        checked={com_or_red === false}
        onChange={() => setCom_or_Red(false)}
      />
      Residential Project
    </label>
  </div>


      <input type="file" multiple onChange={handleImageChange} required />
      {error && <p className={styles.error}>{error}</p>}
      <button onClick={onSubmitProject} disabled={uploading || !validateForm}>
        {uploading ? 'Uploading...' : 'Upload Project'}
      </button>

    </div>
  );
}
