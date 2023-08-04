import "./App.css";
import Banner from "./components/banner.component";
import NavigationBar from "./components/navigation-bar.component";
import Map from "./components/map.component";
import styles_main from "./styles/main.module.scss";
import InfoPanel from "./components/info-panel.component";
import { AppContext } from "./hooks/Context";
import { useState } from "react";
import { IDLE_STATUS } from "./utils/constants";
import LoginModal from "./components/login.modal";
import RegisterModal from "./components/register.modal";


function App() {
  const [state, setState] = useState({
    weather: {},
    location: {},
    xChangeRate: {},
    popData: {},
    modal: '',
    status: IDLE_STATUS,
  });

  const value = { state, setState };

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
      {/* :::Modals */}
      <LoginModal />
      <RegisterModal />
    </AppContext.Provider>
  );
}

export default App;
