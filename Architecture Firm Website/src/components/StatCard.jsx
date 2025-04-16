import React from 'react';
import styles from './css/StatCard.module.css';

function StatCard({ number, label }) {
    return (
        <div className={styles.card}>
            <h1 className={styles.number}>{number}+</h1>
            <p className={styles.label}>{label}</p>
        </div>
    );
}

export default StatCard;
