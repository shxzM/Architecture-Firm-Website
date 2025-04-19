import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ProjectCardFirebase from '../components/ProjectCardFirebase';
import {ProjectListCollectionRef} from "../config/firebase"
import styles from "./css/ProjectList.module.css"


export default function ProjectsList({onClick, numberOfProjects = -1}) {


     const [projectlist, setProjectList] = useState([])
    
    
     useEffect(() => {
      const getProjectList = async () => {
        try {
          const data = await getDocs(ProjectListCollectionRef);
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
    }, [numberOfProjects]); // 👈 added as dependency just in case it's dynamic
    

    


  return (
    <div className={styles.ProjectsContainer}>
            {projectlist.map((project) => (
              <ProjectCardFirebase
                key={project.id}
                image={project.Images[0]}
                title={project.Title}
                location={project.Location}
                type={project.CommericalorResidential ? "Commercial" : "Residential"}
                onClick={onClick}
                projectID={project.id}
              />
            ))}

    </div>
  )
}
