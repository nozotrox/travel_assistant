import styles_main from "../styles/main.module.scss";
import AppLogo from "./app-logo.component";

const NavigationBar = () => {
  return (
    <header
      id={styles_main.navbar}
      className="d-flex justify-content-between align-items-center"
    >
      <AppLogo />
      <ul className={styles_main.nav_items_container}>
        <li>Login</li>
        <li className={styles_main.active_nav}>Sign Up</li>
      </ul>
    </header>
  );
};

export default NavigationBar;
