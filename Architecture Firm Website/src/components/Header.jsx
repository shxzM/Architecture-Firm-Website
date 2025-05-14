import React, { useState, useEffect } from 'react';
import Logo from "../assets/Logo.png"
import styles from './css/Header.module.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if current path matches the link path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/">
            <img src={Logo} alt="Logo" />
            <span className={`${scrolled ? styles.darkText : ''}`}>Tashdid Architects</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link to="/" className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''} ${scrolled ? styles.darkText : ''}`}>Home</Link>
          <Link to="/about" className={`${styles.navLink} ${isActive('/about') ? styles.activeLink : ''} ${scrolled ? styles.darkText : ''}`}>About</Link>
          <Link to="/projects" className={`${styles.navLink} ${isActive('/projects') ? styles.activeLink : ''} ${scrolled ? styles.darkText : ''}`}>Projects</Link>
          <Link to="/services" className={`${styles.navLink} ${isActive('/services') ? styles.activeLink : ''} ${scrolled ? styles.darkText : ''}`}>Services</Link>
          <Link to="/gallery" className={`${styles.navLink} ${isActive('/gallery') ? styles.activeLink : ''} ${scrolled ? styles.darkText : ''}`}>Gallery</Link>
          <Link to="/contact" className={`${styles.contactButton} ${isActive('/contact') ? styles.activeContactButton : ''}`}>
            Contact Us 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className={`${styles.menuButton} ${scrolled ? styles.darkIcon : ''}`}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContainer}>
            {/* Top Bar with Logo and Close Button */}
            <div className={styles.mobileMenuHeader}>
              <div className={styles.mobileLogo}>
                <a href="/">
                  <img src={Logo} alt="Logo" />
                  <span className="font-outfit">Tashdid Architects</span>
                </a>
              </div>
              <button onClick={toggleMenu} className={styles.closeButton} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className={styles.mobileNav}>
              <Link to="/" className={`${styles.mobileNavLink} ${isActive('/') ? styles.activeMobileLink : ''}`}>Home</Link>
              <Link to="/about" className={`${styles.mobileNavLink} ${isActive('/about') ? styles.activeMobileLink : ''}`}>About</Link>
              <Link to="/projects" className={`${styles.mobileNavLink} ${isActive('/projects') ? styles.activeMobileLink : ''}`}>Projects</Link>
              <Link to="/services" className={`${styles.mobileNavLink} ${isActive('/services') ? styles.activeMobileLink : ''}`}>Services</Link>
              <Link to="/gallery" className={`${styles.mobileNavLink} ${isActive('/gallery') ? styles.activeMobileLink : ''}`}>Gallery</Link>
            </nav>

            {/* Contact Button */}
            <div className={styles.mobileContactWrapper}>
              <Link to="/contact" className={`${styles.mobileContactButton} ${isActive('/contact') ? styles.activeMobileContactButton : ''}`}>
                Contact Us
              </Link>
            </div>

            {/* Social Icons */}
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/tashdid_architects/" target='_blank' className={styles.socialIcon} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com/tashdid.architecture/" target='_blank' className={styles.socialIcon} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ar-khalid-aslam-574403172/?originalSubdomain=in" target='_blank' className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.youtube.com/@tashdidarchitects3210" target='_blank' className={styles.socialIcon} aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;