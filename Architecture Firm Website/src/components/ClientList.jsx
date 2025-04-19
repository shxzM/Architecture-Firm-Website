import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { MessagesCollectionRef } from "../config/firebase";
import styles from "./css/ClientList.module.css";
import ClientCard from './ClientCard';

export default function MessagesList({ numberOfProjects = -1 }) {
  const [projectlist, setProjectList] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const data = await getDocs(MessagesCollectionRef);
        let rawData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        // Filter to only include unique email addresses
        const uniqueEmails = new Set();
        const uniqueData = rawData.filter((item) => {
          if (uniqueEmails.has(item.Email)) return false;
          uniqueEmails.add(item.Email);
          return true;
        });

        if (numberOfProjects !== -1) {
          setProjectList(uniqueData.slice(0, numberOfProjects));
        } else {
          setProjectList(uniqueData);
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
