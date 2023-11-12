// Components
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

// Styling
import styles from "./MainLayout.module.css";

// Component
function MainLayout({ customStyle, children }) {
  return (
    <>
      <Header />

      <main className={`${styles.main} ${customStyle}`}>{children}</main>

      <Footer />
    </>
  );
}

export default MainLayout;
