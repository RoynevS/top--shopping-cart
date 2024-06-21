import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.gridContainer}>
        <div className={styles.columnContainer}>
          <h3 className={styles.heading}>About us</h3>
          <ul className={`${styles.ul} ${styles.flexContainer}`}>
            <li>Our Story</li>
            <li>Made with Care</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.columnContainer}>
          <h3 className={styles.heading}>Assistance</h3>
          <ul className={`${styles.ul} ${styles.flexContainer}`}>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Acessibility</li>
          </ul>
        </div>
        <div className={styles.columnContainer}>
          <h3 className={styles.heading}>Boutiques</h3>
          <ul className={`${styles.ul} ${styles.flexContainer}`}>
            <li>Find a store</li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>&copy; 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
