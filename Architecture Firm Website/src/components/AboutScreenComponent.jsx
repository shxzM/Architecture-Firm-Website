import styles from "./css/AboutScreenComponent.module.css"

function AboutScreenComponent({ number, Heading, Paragraph }) {
  return (
    <div className={styles.card}>
      <span className={styles.number}>{number}</span>
      <h2 className={styles.heading}>{Heading}</h2>
      <p className={styles.paragraph}>{Paragraph}</p>
    </div>
  );
}

export default AboutScreenComponent