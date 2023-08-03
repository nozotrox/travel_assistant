import './App.css';
import styles_main from "./styles/main.module.scss"

function App() {
  return (
    <div id="app">
      <header id={styles_main.navbar} className="d-flex justify-content-between">
        <div>
          icon
        </div>
        <div>
         Login
        </div>
      </header>
    </div>
  );
}

export default App;
