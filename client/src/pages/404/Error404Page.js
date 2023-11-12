// Imports
import { Link } from "react-router-dom";

// Components
import MainLayout from "../layouts/MainLayout";

// Styling
import styles from "./Error404.module.css";
import BackgroundImg404 from "../../assets/errors/404.png";

// Error Page
function Error404Page() {
  return (
    <MainLayout>
      <div
        style={{ backgroundImage: `url(${BackgroundImg404})` }}
        className={styles["bg-404"]}
      >
        <h2 className={styles["title-404"]}>404</h2>
        <p>La page que vous cherchez n'existe plus ou n'a jamais existé...</p>

        <Link to="/" className={styles["backLink-404"]}>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </MainLayout>
  );
}

export default Error404Page;
