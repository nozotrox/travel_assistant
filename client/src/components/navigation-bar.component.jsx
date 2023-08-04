import { useContext } from "react";
import styles_main from "../styles/main.module.scss";
import AppLogo from "./app-logo.component";
import { AppContext } from "../hooks/Context";
import {
  LOGIN_MODAL_NAME,
  REGISTER_MODAL_NAME,
  USER_STORAGE_KEY,
} from "../utils/constants";

const NavigationBar = () => {
  const appContext = useContext(AppContext);
  let user;
  try {
    user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  } catch (error) {
    user = undefined;
  }

  const openModal = (modalName) => {
    appContext.setState({ ...appContext.state, modal: modalName });
  };

  return (
    <header
      id={styles_main.navbar}
      className="d-flex justify-content-between align-items-center"
    >
      <AppLogo />
      {!Boolean(user) && (
        <ul className={styles_main.nav_items_container}>
          <li onClick={(e) => openModal(LOGIN_MODAL_NAME)}>Login</li>
          <li
            onClick={(e) => openModal(REGISTER_MODAL_NAME)}
            className={styles_main.active_nav}
          >
            Sign Up
          </li>
        </ul>
      )}
      {Boolean(user) && (
        <div>
          <span className={styles_main.primaryText}>{user.name}</span>
          <br />
          <small>{user.email}</small>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
