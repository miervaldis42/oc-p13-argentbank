// Styling
import styles from "./Footer.module.css";

// Component
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles["footer-text"]}>
        Copyright {currentYear} - Argent Bank
      </p>
    </footer>
  );
}

export default Footer;
