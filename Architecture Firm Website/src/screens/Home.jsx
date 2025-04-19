import React, { useState } from 'react';
import Header from "../components/Header";
import Video from "../assets/Video.mp4";
import styles from "./css/Home.module.css";
import { FaTags, FaIndustry, FaClock, FaPalette } from 'react-icons/fa';
import FeatureCard from "../components/FeatureCard";
import ProjectsList from '../components/ProjectsList';
import Form from '../components/Form';
import Footer from '../components/Footer';

import StatCard from '../components/StatCard';
import { Link } from 'react-router-dom';

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
                    <Link to="/projects" className={styles.button}>View All Projects &#8599;</Link>
                </div>
            </section>

            <section className={styles.AboutSection}>
                <p>We are the best luxury design company, comprised of an experienced team of interior designers, craftsmen, and innovative technicians. Together, we offer you the highest quality, made-to-measure details, creating a magnificent space you’ll be proud to call “mine”!</p>
                <Link to="/about" className={styles.button}>About Us &#8599;</Link>
                <div className={styles.featuresContainer}>
                    <FeatureCard Icon={FaTags} title="COMPETITIVE PRICING" />
                    <FeatureCard Icon={FaIndustry} title="IN-HOUSE MANUFACTURING" />
                    <FeatureCard Icon={FaClock} title="ON-TIME DELIVERY" />
                    <FeatureCard Icon={FaPalette} title="ARRAY OF DESIGNS" />
                </div>
            </section>

            <section className={styles.ProjectSection}>
                <h1 className={styles.ProjectsHeading}>Our PROJECTS</h1>
                <div className={styles.ProjectsContainer}>
                    <ProjectsList numberOfProjects={3}/>
                </div>

                <Link to="/projects" className={styles.button}>View All My Projects &#8599;</Link>
                
            </section>


            <section className={styles.ExploreSection}>
                <div><FaPalette/></div>
                <h3>AS UNIQUE AS YOU</h3>
                <p>We love creating unique and functional spaces that tell the stories of our clients' lifestyles and personalities.</p>
                <Link to="/projects" className={styles.button}>Explore Now &#8599;</Link>
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
