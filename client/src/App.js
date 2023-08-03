import './App.css';
import Banner from './components/banner.component';
import NavigationBar from './components/navigation-bar.component';
import Map from "./components/map.component";
import styles_main from "./styles/main.module.scss";
import InfoPanel from './components/info-panel.component';



function App() {

  return (
    <div id="app">
      <NavigationBar />
      <Banner />
      <div className={styles_main.mainContentContainer}>
        <Map />
        <InfoPanel/>
      </div>
    </div>
  );
}

export default App;
