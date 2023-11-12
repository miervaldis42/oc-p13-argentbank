// Components
import Features from "../../components/Features/index";

// Styles
import styles from "./HomePage.module.css";
import Banner from "../../assets/img/bank-tree.jpeg";
import MainLayout from "../layouts/MainLayout";

// Page
function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <section className={styles["hero-content"]}>
          <h2 className={styles["sr-only"]}>Promoted Content</h2>

          <p className={styles.subtitle}>No fees.</p>
          <p className={styles.subtitle}>No minimum deposit.</p>
          <p className={styles.subtitle}>High interest rates.</p>

          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      {/* Features Section */}
      <Features />
    </MainLayout>
  );
}

export default HomePage;
