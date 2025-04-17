import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/ServicesGrid.module.css";

function ServiceCard({ title, link }) {
  return (
    <div className={styles.serviceCard}>
      <h2>{title}</h2>
      <p className={styles.learnMore}>
        {link}
      </p>
    </div>
  );
}

function ServicesGrid() {
  const services = [
    {
      title: "Interior Design Services",
      link: "We craft personalized interior environments that reflect your lifestyle and aesthetic. From concept to execution, we ensure every detail aligns with your vision."
    },
    {
      title: "Interior Design Consultancy",
      link: "Get expert advice on space planning, color schemes, and furniture layout.Our consultants help you bring elegance and functionality together seamlessly."
    },
    {
      title: "Turnkey Interior Design Services",
      link: "/services/turnkeySit back and relax while we manage your entire interior project from start to finish. We handle design, procurement, and execution—delivered ready to use."
    },
    {
      title: "Custom Furniture Manufacturer",
      link: "Unique furniture pieces tailored to your space and preferences. We blend craftsmanship with creativity to bring your ideas to life."
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesGrid;