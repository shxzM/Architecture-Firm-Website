import React from "react";
import Header from "../components/Header";
import styles from "./css/About.module.css";
import Mastermind from "../assets/Clinet.png";
import AboutScreenComponent from "../components/AboutScreenComponent"
import Footer from "../components/Footer"

function About() {
    return (
        <>
            <Header />
            <div className={styles.HeaderBG}>
                <h1>ABOUT US</h1>
            </div>
            
            <p className={styles.intropara}>
                Tashdid Architects is an award-winning interior design studio with more than 14 years of experience. We pride ourselves on creating distinctive, personalized interiors that combine luxury, comfort, and functionality.
            </p>

            <div className={styles.mastermindContainer}>
                <img src={Mastermind} alt="Portrait of Pathak JI" />
                <div className={styles.unclenamehead}>
                    <h1>Meet the <br />Mastermind</h1>
                    <h2>Pathak JI</h2>
                    <h3>CO-FOUNDER & CREATIVE DIRECTOR</h3>
                    <p>Prernaa Mangla, the creative force at MWM Spaces with 14+ years in luxury interiors, crafts designs by harmonizing intricate details with a unique touch.</p>
                </div>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.leftPane}>
                    <div>
                    <h1>TRANSFORMING</h1>
                    <em>Design</em>
                    <em>into <span className={styles.reality}>REALITY</span></em> 
                    </div>
                </div>
                <div className={styles.rightPane}>
                    <AboutScreenComponent
                    number="01"
                    Heading="CLIENT BRIEF"
                    Paragraph="Your ideas become our guiding principles, ensuring every aspect aligns with your dream space."
                    />
                    <AboutScreenComponent
                    number="02"
                    Heading="SPACE PLANNING & IDEATION"
                    Paragraph="Collaborative spatial planning transforms concepts into practical and aesthetic designs."
                    />
                    <AboutScreenComponent
                    number="03"
                    Heading="3D VISUALIZATION"
                    Paragraph="Lifelike 3D renders bring your design to life, allowing you to visualize every detail before implementation."
                    />
                    <AboutScreenComponent
                    number="04"
                    Heading="TECHNICAL DRAWINGS"
                    Paragraph="Precise technical drawings translate creative concepts into actionable plans for flawless execution."
                    />
                    <AboutScreenComponent
                    number="05"
                    Heading="MATERIAL SELECTION"
                    Paragraph="We guide you through a curated selection process, offering choices that reflect your style and meet your project requirements."
                    />
                    <AboutScreenComponent
                    number="06"
                    Heading="COST ESTIMATION"
                    Paragraph="Our detailed cost breakdowns ensure clarity and confidence throughout the project journey."
                    />
                    <AboutScreenComponent
                    number="07"
                    Heading="EXECUTION"
                    Paragraph="Skilled craftsmen and experienced project managers bring the design to reality with precision and efficiency."
                    />
                    <AboutScreenComponent
                    number="08"
                    Heading="QUALITY CHECK"
                    Paragraph="We leave no stone unturned in ensuring that your space reflects excellence in craftsmanship and attention to detail."
                    />

                </div>
                </div>
                <Footer/>
        </>
    );
}

export default About;