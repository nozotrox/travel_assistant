import './App.css';
import Banner from './components/banner.component';
import NavigationBar from './components/navigation-bar.component';
import Map from "./components/map.component";
// import styles_main from "./styles/main.module.scss";



function App() {

  return (
    <div id="app">
      <NavigationBar />
      <Banner />
      <Map/>
    </div>
  );
}

export default App;
