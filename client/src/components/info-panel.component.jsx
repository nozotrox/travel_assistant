import styles_main from "../styles/main.module.scss";

import MAP_ICON_SMALL from "../assets/icons/map-pin-small.svg";
import EURO_ICON_SMALL from "../assets/icons/euro.svg";
import CLOUDY_IMG from "../assets/images/cloudy.png";
import SUNNY_IMG from "../assets/images/sunny.png";
import PERSON_ICON from "../assets/icons/people.svg";
import DOLAR_ICON from "../assets/icons/dolar.svg";
import { useContext } from "react";
import { AppContext } from "../hooks/Context";
import moment from "moment";
import {
  IDLE_STATUS,
  LOADING_STATUS,
  RESULTS_FOUND_STATUS,
} from "../utils/constants";
import LOADING_SVG from "../assets/icons/loading.svg";

const WeatherInfo = () => {
  const appContext = useContext(AppContext);

  const cityName = appContext.state.location.name;
  const stateName =
    appContext.state.location.state || appContext.state.location.country;
  const weather = appContext.state.weather;

  const forecast = Boolean(weather.list) ? weather.list : [];
  const todayTemp = forecast.length > 0 ? forecast[0] : {};

  const temperature = todayTemp.main.temp.toFixed(0) || 0;
  const todayDate =
    moment(todayTemp.dt_txt).format("dddd, MMM Do YYYY") || "Invalid Date";
  const forecastList = forecast.filter((_, idx) => idx > 0 && idx < 5);

  return (
    <div className={styles_main.bannerWeather}>
      <div className={styles_main.cityTitle}>
        <img src={MAP_ICON_SMALL} alt="map_icon" />
        <span className="mx-2">
          {cityName}, <span className={styles_main.fadedText}>{stateName}</span>
        </span>
      </div>
      <div className={styles_main.currentWeatherInfo}>
        <div className="px-0 py-2">
          <h1 className={styles_main.currentWeatherValue}>{temperature} ºC</h1>
          <small className={styles_main.currentDate}>{todayDate}</small>
        </div>
        <div className="py-2">
          <img src={CLOUDY_IMG} alt="cloudy_img" />
        </div>
      </div>

      <div className={styles_main.forecastWeahterInfo}>
        {forecastList.map((temp, idx) => {
          return (
            <div key={`key-${idx}`} className={styles_main.weatherForecastItem}>
              <div className={styles_main.weatherCondition}>
                <img src={SUNNY_IMG} alt="weather_icon" />
                <div className="d-inline-block mt-1">
                  <span className={styles_main.max}>
                    {temp.main.temp_max.toFixed(0) || 0}ª
                  </span>
                  <span className={styles_main.min}>
                    /{temp.main.temp_min.toFixed(0) || 0}ª
                  </span>
                </div>
              </div>
              <div>
                <span>
                  <b>
                    {moment(temp.dt_txt)
                      .add(idx + 1, "days")
                      .format("DD")}
                  </b>
                </span>
                <span className={styles_main.min}>
                  {moment(temp.dt_txt)
                    .add(idx + 1, "days")
                    .format("MMM, ddd")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ExchangeRateInfo = () => {
  const appContext = useContext(AppContext);
  let currencyCode;
  let exchangeRate;
  try {
    currencyCode = Object.keys(appContext.state.xChangeRate.rates)[0];
    exchangeRate = appContext.state.xChangeRate.rates[currencyCode].toFixed(2);
  } catch (error) {
    currencyCode = "--";
    exchangeRate = 0;
  }

  return (
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
          {exchangeRate}{" "}
          <span className={styles_main.currenySymb}>{currencyCode}</span>
        </h1>
      </div>
    </div>
  );
};

const CountryDataInfo = () => {
  const appContext = useContext(AppContext);

  let gdp, pop;
  try {
    gdp = (appContext.state.popData.gdp.value / 1000).toFixed(2);
    pop = (appContext.state.popData.pop.value / 1000000).toFixed(2);
  } catch (error) {
    gdp = 0;
    pop = 0;
  }

  return (
    <div className={styles_main.countryInfo}>
      <div className={styles_main.indicatorItem}>
        <img src={DOLAR_ICON} alt="map_icon" />
        <span>GDP/Capita ($)</span>
        <h1>{gdp} K</h1>
      </div>
      <div className={styles_main.indicatorItem}>
        <img src={PERSON_ICON} alt="map_icon" />
        <span>Total Population</span>
        <h1>{pop} M</h1>
      </div>
    </div>
  );
};

const SubscribeLayout = () => {
  return (
    <div className={styles_main.authenticateBanner}>
      <p>Login or Register to see more information.</p>
      <div className={styles_main.buttonsAuthContainer}>
          <span>Login</span>
          <span>Sign Up</span>
      </div>
    </div>
  );
};

const InfoPanel = () => {
  const appContext = useContext(AppContext);
  const status = appContext.state.status;
  const isAuth = Boolean(Object.keys(appContext.state.popData).length);
  return (
    <div className={styles_main.cityInfoContainer}>
      {status === RESULTS_FOUND_STATUS && (
        <>
          <WeatherInfo />
          {isAuth && (
            <>
              <ExchangeRateInfo />
              <div className={styles_main.hDivider}></div>
              <CountryDataInfo />
            </>
          )}
          {!isAuth && <SubscribeLayout />}
        </>
      )}
      {status === IDLE_STATUS && (
        <center>
          Search for a city <br></br>to get results.
        </center>
      )}
      {status === LOADING_STATUS && (
        <center>
          <img src={LOADING_SVG} alt="loading" />
        </center>
      )}
    </div>
  );
};

export default InfoPanel;
