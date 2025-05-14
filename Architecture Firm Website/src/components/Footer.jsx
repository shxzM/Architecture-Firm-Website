import React from 'react';
import styles from './css/Footer.module.css';
// Import your logo image - adjust the path as needed
import logo from '../assets/Logo.png'; 
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="Tashdid Architects" className={styles.logoImage} />
              <span className={styles.companyName}>Tashdid Architects</span>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/tashdid_architects/" aria-label="Instagram" target='_blank'><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/tashdid.architecture/" aria-label="Facebook" target='_blank'><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/in/ar-khalid-aslam-574403172/?originalSubdomain=in" aria-label="LinkedIn" target='_blank'><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.youtube.com/@tashdidarchitects3210" aria-label="YouTube" target='_blank'><i className="fab fa-youtube"></i></a>
              <a href="https://www.google.com/maps/place/Tashdid+Architects/data=!4m2!3m1!1s0x0:0x4a4fa7befd6b950d?sa=X&ved=1t:2428&ictx=111" aria-label="Location" target='_blank'><i className="fas fa-map-marker-alt"></i></a>
            </div>
          </div>

          <div className={styles.navSection}>
            <div className={styles.siteMapSection}>
              <h3>SITE MAP</h3>
              <ul className={styles.siteLinks}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/projects">PROJECTS</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/admin">ADMIN</Link></li>
              </ul>
            </div>

            <div className={styles.contactSection}>
              <div className={styles.phoneSection}>
                <h3>PHONE</h3>
                <p>+919045005510</p>
                <p>10 AM to 7 PM (All Days)</p>
              </div>

              <div className={styles.addressSection}>
                <h3>ADDRESS</h3>
                <p>Roop Mehal, Prem Gali</p>
                <p>Kholi Number 420,</p>
                <p><b>Excuse Me Please</b></p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© 2025 Tashdid Architects. All rights reserved.</p>
          </div>
          <div className={styles.termsSection}>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
          <div className={styles.brandingSection}>
            <p>Branding & Website Designed By <a href="https://sarverjii.github.io/Portfolio-Website" className={styles.hintt} target='_blank'>VirtuallyTrue</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;