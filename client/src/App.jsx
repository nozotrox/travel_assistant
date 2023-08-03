import "./App.css";
import Banner from "./components/banner.component";
import NavigationBar from "./components/navigation-bar.component";
import Map from "./components/map.component";
import styles_main from "./styles/main.module.scss";
import InfoPanel from "./components/info-panel.component";
import { AppContext } from "./hooks/Context";
import { useState } from "react";
import { useMemo } from "react";

function App() {
  const [state, setState] = useState({
    weather: {},
    location: {},
    xChangeRate: {},
    popData: {},
  });

  const value = {state, setState};

  return (
    <AppContext.Provider value={value}>
      <div id="app">
        <NavigationBar />
        <Banner />
        <div className={styles_main.mainContentContainer}>
          <Map />
          <InfoPanel />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
