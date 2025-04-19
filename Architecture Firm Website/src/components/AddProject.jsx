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

  const onSubmitProject = async () => {
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
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Body" onChange={(e) => setBody(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />

      <label>
        <input type="checkbox" onChange={(e) => setCom_or_Red(e.target.checked)} />
        Commercial Project
      </label>

      <input type="file" multiple onChange={handleImageChange} required/>
      <button onClick={onSubmitProject} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Project'}
      </button>
    </div>
  );
}
