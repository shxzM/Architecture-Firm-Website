import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { ProjectListCollectionRef, storage } from '../config/firebase';
import styles from './css/AddProject.module.css';

export default function AddProject() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  const [com_or_red, setCom_or_Red] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files)); // Store selected files
  };

  const onSubmitProject = async () => {
    try {
      setUploading(true);
      const imageUrls = await Promise.all(
        images.map(async (image) => {
          const imageRef = ref(storage, `projects/${uuid()}-${image.name}`);
          const snapshot = await uploadBytes(imageRef, image);
          const url = await getDownloadURL(snapshot.ref);
          return url;
        })
      );

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

      <input type="file" multiple onChange={handleImageChange} />
      <button onClick={onSubmitProject} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Project'}
      </button>
    </div>
  );
}
