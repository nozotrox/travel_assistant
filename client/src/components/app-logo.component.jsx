import styles_main from "../styles/main.module.scss";

const AppLogo = () => {
  return (
    <div className={styles_main.logo_container}>
      <h1>Travel Genius</h1>
      <span className={styles_main.dot}></span>
    </div>
  );
};

export default AppLogo;