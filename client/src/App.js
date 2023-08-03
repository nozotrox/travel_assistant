import './App.css';
import styles_main from "./styles/main.module.scss"
import logo from "./assets/icons/logo.png"

function App() {
  return (
    <div id="app">
      <header id={styles_main.navbar} className="d-flex justify-content-between align-items-center">
        <div className={styles_main.logo_container}>
          <h1>Travel Genius</h1>
          <span className={styles_main.dot}></span>
        </div>
        <ul className={styles_main.nav_items_container}>
         <li>Login</li>
         <li className={styles_main.active_nav}>Sign Up</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
