import React, { useState } from 'react';
import Header from "../components/Header";
import Video from "../assets/Video.mp4";
import styles from "./css/Home.module.css";
import { FaTags, FaIndustry, FaClock, FaPalette } from 'react-icons/fa';
import FeatureCard from "../components/FeatureCard";
import ProjectCard from '../components/ProjectCard';
import Project1 from "../assets/Projects/Project1.png"
import Project2 from "../assets/Projects/Project2.png"
import Project3 from "../assets/Projects/Project3.png"
import Project4 from "../assets/Projects/Project4.png"
import Project5 from "../assets/Projects/Project5.png"
import Project6 from "../assets/Projects/Project6.png"
import Form from '../components/Form';
import Footer from '../components/Footer';

import StatCard from '../components/StatCard';

function Home() {

    const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter === selectedFilter ? '' : filter); // toggle off if clicked again
  };


    return (
        <>
            <Header />

            <section className={styles.heroSection}>
                <video
                    className={styles.fullscreenVideo}
                    src={Video}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className={styles.overlay}>
                    <h1 className={styles.title}>
                        Creating <br />Spaces That Tell <br />Magnificent Stories
                    </h1>
                    <button className={styles.button}>View All Projects &#8599;</button>
                </div>
            </section>

            <section className={styles.AboutSection}>
                <p>We are the best luxury design company, comprised of an experienced team of interior designers, craftsmen, and innovative technicians. Together, we offer you the highest quality, made-to-measure details, creating a magnificent space you’ll be proud to call “mine”!</p>
                <button>About Us &#8599;</button>
                <div className={styles.featuresContainer}>
                    <FeatureCard Icon={FaTags} title="COMPETITIVE PRICING" />
                    <FeatureCard Icon={FaIndustry} title="IN-HOUSE MANUFACTURING" />
                    <FeatureCard Icon={FaClock} title="ON-TIME DELIVERY" />
                    <FeatureCard Icon={FaPalette} title="ARRAY OF DESIGNS" />
                </div>
            </section>

            <section className={styles.ProjectSection}>
                <h1 className={styles.ProjectsHeading}>Our PROJECTS</h1>
                <div>
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

                <button className={styles.button}>View All My Projects &#8599;</button>
                
            </section>


            <section className={styles.ExploreSection}>
                <div><FaPalette/></div>
                <h3>AS UNIQUE AS YOU</h3>
                <p>We love creating unique and functional spaces that tell the stories of our clients' lifestyles and personalities.</p>
                <button className={styles.button}>Explore Now &#8599;</button>
            </section>

            <section className={styles.StatSection}>
                <StatCard number="14" label="Years of Experience" />
                <StatCard number="500" label="Completed Projects" />
                <StatCard number="15" label="Cities Covered" />
                <StatCard number="150" label="Team Members" />
            </section>

            <Form/>
            <Footer/>

        </>
    );
}

export default Home;
