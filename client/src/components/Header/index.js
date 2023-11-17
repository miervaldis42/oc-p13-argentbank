// Imports
import { NavLink, useLocation } from "react-router-dom";

// Routing
import routesList from "../../router/routesList";

// Styling
import styles from "./Header.module.css";
import Logo from "../../assets/img/argentBankLogo.png";

// Component
function Navbar() {
  const currentLocation = useLocation();

  return (
    <header className={styles["main-nav"]}>
      <NavLink
        to={
          currentLocation.pathname !== routesList.home ? routesList.home : null
        }
        className={styles["main-nav-logo"]}
      >
        <img
          className={styles["main-nav-logo-image"]}
          src={Logo}
          alt="Argent Bank Logo"
        />

        <h1 className={styles["sr-only"]}>Argent Bank</h1>
      </NavLink>

      <nav>
        <NavLink
          to={routesList.login}
          className={({ isActive }) =>
            isActive
              ? styles["router-link-exact-active"]
              : styles["main-nav-item"]
          }
        >
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
