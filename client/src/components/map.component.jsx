import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles_main from "../styles/main.module.scss";
import { useEffect, useState } from "react";

import SearchCityForm from "./search-city-form.component";
const DEFAULT_POSITION = [-25.476033, 30.969395];
const CUSTOM_ICON = new Icon({
  iconUrl: require("../assets/icons/pin.png"),
  iconSize: [38, 38],
});

const MapMarker = ({ geoLocation, setGeoLocation }) => {
  const map = useMap();

  useMapEvents({
    click(e) {
      const position = [e.latlng.lat, e.latlng.lng];
      setGeoLocation({
        latitude: position[0],
        longitude: position[1],
      });
    },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setGeoLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  const { latitude, longitude } = geoLocation;
  const position = [latitude, longitude];
  map.flyTo(position, 14, { duration: 3 });

  return (
    <Marker position={position} icon={CUSTOM_ICON}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

const Map = () => {
  const [geoLocation, setGeoLocation] = useState({
    latitude: DEFAULT_POSITION[0],
    longitude: DEFAULT_POSITION[1],
  });

  return (
    <div className={styles_main.map_container}>
      <MapContainer center={DEFAULT_POSITION} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMarker geoLocation={geoLocation} setGeoLocation={setGeoLocation} />
      </MapContainer>
      <SearchCityForm setMapLocation={setGeoLocation} />
    </div>
  );
};

export default Map;
