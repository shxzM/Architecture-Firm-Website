import styles from "./css/Projects.module.css"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import { useState } from "react";
import Project1 from "../assets/Projects/Project1.png"
import Project2 from "../assets/Projects/Project2.png"
import Project3 from "../assets/Projects/Project3.png"
import Project4 from "../assets/Projects/Project4.png"
import Project5 from "../assets/Projects/Project5.png"
import Project6 from "../assets/Projects/Project6.png"
import Footer from "../components/Footer"

function Projects(){


     const [selectedFilter, setSelectedFilter] = useState('');
    
    const handleFilterClick = (filter) => {
        setSelectedFilter(filter === selectedFilter ? '' : filter); // toggle off if clicked again
      };
    


    return(
    <>
         <Header />
        <div className={styles.HeaderBG}>
            <h1>OUR PROJECTS</h1>
        </div>
        <p className={styles.intropara}>Welcome to Tashdid Architects, where we invite you to explore some of the most inspiring, luxurious, and thoughtful interior creations that elevate each project we undertake.</p>
        <div className={styles.ButtonContainer}>
            <button
                className={`${styles.ProjectFilterButton} ${selectedFilter === 'Commercial' ? styles.active : ''}`}
                onClick={() => handleFilterClick('Commercial')}
            >
                Commercial
            </button>

            <button
                className={`${styles.ProjectFilterButton} ${selectedFilter === 'Residential' ? styles.active : ''}`}
                onClick={() => handleFilterClick('Residential')}
            >
                 Residential
            </button>
        </div>
                <div className={styles.ProjectsContainer}>
                    <ProjectCard
                    image={Project1}
                    title="Prestige Palace"
                    location="Gurgaon"
                    type="Residential"
                    size="10500 SQFT"
                    onClick={() => console.log("Go to Prestige Palace")}
                    />

                    <ProjectCard
                    image={Project2}
                    title="Nautical Escape"
                    location="Gurgaon"
                    type="Residential"
                    size="7800 SQFT"
                    onClick={() => console.log("Go to Nautical Escape")}
                    />

                    <ProjectCard
                    image={Project3}
                    title="Harmony House"
                    location="New Delhi"
                    type="Residential"
                    size="5000 SQFT"
                    onClick={() => console.log("Go to Harmony House")}
                    />

                    <ProjectCard
                    image={Project4}
                    title="Skyline Tower"
                    location="Mumbai"
                    type="Commercial"
                    size="12000 SQFT"
                    onClick={() => console.log("Go to Skyline Tower")}
                    />

                    <ProjectCard
                    image={Project5}
                    title="Oasis Office"
                    location="Bangalore"
                    type="Commercial"
                    size="9500 SQFT"
                    onClick={() => console.log("Go to Oasis Office")}
                    />

                    <ProjectCard
                    image={Project6}
                    title="Sunset Villa"
                    location="Hyderabad"
                    type="Residential"
                    size="8700 SQFT"
                    onClick={() => console.log("Go to Sunset Villa")}
                    />

                </div>
                <Footer/>
    </>
    )
}
export default Projects