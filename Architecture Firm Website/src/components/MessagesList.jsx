import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { MessagesCollectionRef } from "../config/firebase";
import MessageCard from "./MessageCard";
import styles from "./css/MessageList.module.css";
import { useNavigate } from 'react-router-dom';

export default function MessagesList({ numberOfProjects = -1 }) {
  const [projectlist, setProjectList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const data = await getDocs(MessagesCollectionRef);
        let FilteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        if (numberOfProjects !== -1) {
          FilteredData = FilteredData.slice(0, numberOfProjects);
        }

        setProjectList(FilteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getProjectList();
  }, [numberOfProjects]);

  const showMessage = (messageId) => {
    navigate(`/message/${messageId}`);
  };

  return (
    <div className={styles.ProjectsContainer}>
      {projectlist.map((project) => (
        <MessageCard
          key={project.id}
          budget={project.Budget}
          firstName={project.First_Name}
          lastName={project.Last_Name}
          location={project.Location}
          read={project.Read}
          onClick={showMessage}
          messageID={project.id}
        />
        
      ))}
    </div>
  );
}
