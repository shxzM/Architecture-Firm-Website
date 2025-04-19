import styles from "./css/Projects.module.css"
import Header from "../components/Header"
import { useState } from "react";
import ProjectsList from "../components/ProjectsList";
import Footer from "../components/Footer"
import { useNavigate } from 'react-router-dom';


function Projects(){

    const navigate = useNavigate()

    const [selectedFilter, setSelectedFilter] = useState('');
    
    const handleFilterClick = (filter) => {
        setSelectedFilter(filter === selectedFilter ? '' : filter); // toggle off if clicked again
      };

      const ShowProject = (projectId) => {
        navigate(`/projects/${projectId}`);
      }


    return(
    <>
         <Header />
        <div className={styles.HeaderBG}>
            <h1>OUR PROJECTS</h1>
        </div>
        <p className={styles.intropara}>Welcome to Tashdid Architects, where we invite you to explore some of the most inspiring, luxurious, and thoughtful interior creations that elevate each project we undertake.</p>
        <ProjectsList onClick = {ShowProject}/>  
        <Footer/>
    </>
    )
}
export default Projects