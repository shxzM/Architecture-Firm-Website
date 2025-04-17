import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import styles from "./css/Error404.module.css";
import Header from "../components/Header"

function Error404() {
  return (
    <>
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <h1>404</h1>
          <div className={styles.divider}></div>
          <h2>Page Not Found</h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link to="/" className={styles.homeButton}>
            Return to Homepage
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Error404;