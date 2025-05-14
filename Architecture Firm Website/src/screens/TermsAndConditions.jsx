import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './css/TermsAndConditions.module.css';

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Terms & Conditions</h1>
        <p>Last updated: [Date]</p>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Tashdid Architects. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully.
        </p>
        <h2>2. Intellectual Property</h2>
        <p>
          All content, images, and materials on this website are the property of Tashdid Architects and are protected by applicable copyright and intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.
        </p>
        <h2>3. Use of Website</h2>
        <p>
          You agree to use this website only for lawful purposes. You must not use our site in any way that may damage, disable, or impair the website or interfere with any other party's use of the website.
        </p>
        <h2>4. Limitation of Liability</h2>
        <p>
          Tashdid Architects is not liable for any damages arising from the use or inability to use this website or any information provided on the site.
        </p>
        <h2>5. External Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
        </p>
        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to update or change these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at [contact@tashdidarchitects.com].
        </p>
      </div>
      <Footer />
    </>
  );
} 