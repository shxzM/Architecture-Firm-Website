import React from 'react';
import styles from './css/FeatureCard.module.css';

function FeatureCard({ Icon, title}) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}><Icon /></div>
            <div>{title}</div>
        </div>
    );
}

export default FeatureCard;
