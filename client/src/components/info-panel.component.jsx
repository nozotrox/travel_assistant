import styles_main from "../styles/main.module.scss";

import MAP_ICON_SMALL from "../assets/icons/map-pin-small.svg";
import EURO_ICON_SMALL from "../assets/icons/euro.svg";
import CLOUDY_IMG from "../assets/images/cloudy.png";
import SUNNY_IMG from "../assets/images/sunny.png";

const InfoPanel = () => {
  return (
    <div className={styles_main.cityInfoContainer}>
      {/* weather section */}
      <div className={styles_main.bannerWeather}>
        <div className={styles_main.cityTitle}>
          <img src={MAP_ICON_SMALL} alt="map_icon" />
          <span className="mx-2">
            Matola, <span className={styles_main.fadedText}>Maputo</span>
          </span>
        </div>
        <div className={styles_main.currentWeatherInfo}>
          <div className="px-0 py-2">
            <h1 className={styles_main.currentWeatherValue}>20 ºC</h1>
            <small className={styles_main.currentDate}>
              Sat, August 03 2023
            </small>
          </div>
          <div className="py-2">
            <img src={CLOUDY_IMG} alt="cloudy_img" />
          </div>
        </div>

        <div className={styles_main.forecastWeahterInfo}>
          <div className={styles_main.weatherForecastItem}>
            <div className={styles_main.weatherCondition}>
              <img src={SUNNY_IMG} alt="weather_icon" />
              <div className="d-inline-block mt-1">
                <span className={styles_main.max}>24ª</span>
                <span className={styles_main.min}>/12ª</span>
              </div>
            </div>
            <div>
              <span>
                <b>16</b>
              </span>
              <span className={styles_main.min}>May, Tue</span>
            </div>
          </div>
          {/* ------------ */}
          <div className={styles_main.weatherForecastItem}>
            <div className={styles_main.weatherCondition}>
              <img src={SUNNY_IMG} alt="weather_icon" />
              <div className="d-inline-block mt-1">
                <span className={styles_main.max}>24ª</span>
                <span className={styles_main.min}>/12ª</span>
              </div>
            </div>
            <div>
              <span>
                <b>16</b>
              </span>
              <span className={styles_main.min}>May, Tue</span>
            </div>
          </div>
          {/* ------------ */}
          <div className={styles_main.weatherForecastItem}>
            <div className={styles_main.weatherCondition}>
              <img src={SUNNY_IMG} alt="weather_icon" />
              <div className="d-inline-block mt-1">
                <span className={styles_main.max}>24ª</span>
                <span className={styles_main.min}>/12ª</span>
              </div>
            </div>
            <div>
              <span>
                <b>16</b>
              </span>
              <span className={styles_main.min}>May, Tue</span>
            </div>
          </div>
          {/* ------------ */}
          <div className={styles_main.weatherForecastItem}>
            <div className={styles_main.weatherCondition}>
              <img src={SUNNY_IMG} alt="weather_icon" />
              <div className="d-inline-block mt-1">
                <span className={styles_main.max}>24ª</span>
                <span className={styles_main.min}>/12ª</span>
              </div>
            </div>
            <div>
              <span>
                <b>16</b>
              </span>
              <span className={styles_main.min}>May, Tue</span>
            </div>
          </div>
          {/* ------------ */}
        </div>

        {/* ------ currency section */}
        <div className={styles_main.xRateContainer}>
          <div>
            <img src={EURO_ICON_SMALL} alt="map_icon" />
            <span>Exchange Rate</span>
          </div>
          <div className={styles_main.currencyInfo}>
            <h1 className={styles_main.divider}>
              1 <span className={styles_main.currenySymb}>EUR</span>
            </h1>
            <h1>
              230 <span className={styles_main.currenySymb}>ZAR</span>
            </h1>
          </div>
        </div>

        <div className={styles_main.hDivider}></div>

        <div className={styles_main.countryInfo}>
          <div className={styles_main.indicatorItem}>
            <img src={EURO_ICON_SMALL} alt="map_icon"/>
            <span>GDP Per Capita</span>
            <h1>12931</h1>
          </div>
          <div className={styles_main.indicatorItem}>
            <img src={EURO_ICON_SMALL} alt="map_icon"/>
            <span>Total Population</span>
            <h1>12931</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
