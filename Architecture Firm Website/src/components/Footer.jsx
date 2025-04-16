import React from 'react';
import styles from './css/Footer.module.css';
// Import your logo image - adjust the path as needed
import logo from '../assets/Logo.png'; 

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
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" aria-label="Location"><i className="fas fa-map-marker-alt"></i></a>
            </div>
          </div>

          <div className={styles.navSection}>
            <div className={styles.siteMapSection}>
              <h3>SITE MAP</h3>
              <ul className={styles.siteLinks}>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">GALLERY</a></li>
              </ul>
            </div>

            <div className={styles.contactSection}>
              <div className={styles.phoneSection}>
                <h3>PHONE</h3>
                <p>+918587885885</p>
                <p>10 AM to 7 PM (All Days)</p>
              </div>

              <div className={styles.addressSection}>
                <h3>ADDRESS</h3>
                <p>FF-57, Vyapaar Kendra</p>
                <p>C- Block, Sushant Lok-1,</p>
                <p>Gurugram</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© 2024 MWM SPACES. All rights reserved.</p>
          </div>
          <div className={styles.termsSection}>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className={styles.brandingSection}>
            <p>Branding & Website Designed By <a href="#" className={styles.hintt}>HINTT</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;