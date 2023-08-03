import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner.component';
import NavigationBar from './components/navigation-bar.component';
import styles_main from "./styles/main.module.scss";

import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
// import { useMap } from 'react-leaflet/hooks'
// -25.476033, 30.969395

const customIcon = new Icon({
  iconUrl: require("./assets/icons/pin.png"),
  iconSize: [38, 38],
})

function App() {

  // const map = useMap();
  const [geoLocation, setGeoLocation] = useState({
    latitude: -25.476033,
    longitude: 30.969395,
  });

  const { latitude, longitude } = geoLocation;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setGeoLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      // map.flyTo([pos.coords.latitude, pos.coords.longitude])
    })
  }, [geoLocation]);

  const position = [latitude, longitude];

  return (
    <div id="app">
      <NavigationBar />
      <Banner />
      <div className={styles_main.map_container}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
