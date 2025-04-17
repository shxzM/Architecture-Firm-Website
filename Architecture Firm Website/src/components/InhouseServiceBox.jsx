import styles from './css/InhouseServiceBox.module.css';

const InhouseServiceBox = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className={styles.box}>
      <Icon className={styles.icon} />
      <div className={styles.text}>
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
    </div>
  );
};

export default InhouseServiceBox;
