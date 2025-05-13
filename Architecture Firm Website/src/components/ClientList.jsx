import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ClientsCollectionRef } from "../config/firebase";
import styles from "./css/ClientList.module.css";
import ClientCard from './ClientCard';

export default function ClientList({ numberOfProjects = -1 }) {
  const [projectlist, setProjectList] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const data = await getDocs(ClientsCollectionRef);
        const clientData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        if (numberOfProjects !== -1) {
          setProjectList(clientData.slice(0, numberOfProjects));
        } else {
          setProjectList(clientData);
        }
      } catch (err) {
        console.error(err);
      }
    };

    getProjectList();
  }, [numberOfProjects]);

  return (
    <div className={styles.ProjectsContainer}>
      {projectlist.map((project) => (
        <ClientCard
          key={project.id}
          email={project.Email}
          firstName={project.First_Name}
          lastName={project.Last_Name}
          phone={project.Phone}
          messageID={project.id}
          location={project.Location}
        />
      ))}
    </div>
  );
}
