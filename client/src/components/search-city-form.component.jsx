import { useContext, useState } from "react";
import MAP_PIN_ICON from "../assets/icons/map-pin.svg";
import styles_form from "../styles/form.module.scss";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { getCityInformation, searchCity } from "../api/api-interface";

import LOADING_SVG from "../assets/icons/loading.svg";
import { AppContext } from "../hooks/Context";
import { LOADING_STATUS, NO_RESUTS_STATUS, RESULTS_FOUND_STATUS } from "../utils/constants";

const CityList = ({ closeResults, itemList, setMapLocation }) => {
  const appContext = useContext(AppContext);

  const handleClickLocation = async (city) => {
    const location = {
      latitude: city.lat,
      longitude: city.lon,
    };

    setMapLocation(location);
    closeResults();

    appContext.setState({...appContext.state, location: city, status: LOADING_STATUS});
    const response = await getCityInformation(location);
    if(Boolean(response)) {
      appContext.setState({
        ...appContext.state,
        location: city, 
        weather: response.forecast,
        xChangeRate: response.exchangeRate,
        popData: response.countryData,
        status: RESULTS_FOUND_STATUS});
    } else { 
      appContext.setState({...appContext.state, status: NO_RESUTS_STATUS})
    }

  };

  return itemList.map((city, idx) => {
    return (
      <div
        key={`city-${idx}`}
        className={styles_form.listItem}
        onClick={(e) => handleClickLocation(city)}
      >
        <div className={styles_form.icon}>
          <img src={MAP_PIN_ICON} alt="pin_icon" />
        </div>
        <div>
          <p>
            {city.name},{" "}
            <span className={styles_form.fadedText}>{city.state}</span>
          </p>
          <small>
            lat: {city.lat}, lng: {city.lon}
          </small>
        </div>
      </div>
    );
  });
};

const E404Cities = () => {
  return (
    <center>
      <small>
        Nenhum resultado encontrado.
        <span className={styles_form.primaryText}>
          <u>
            <b> Clique no mapa o local de destino.</b>
          </u>
        </span>
      </small>
    </center>
  );
};

const LoadingAnimation = () => {
  return (
    <center>
      <img src={LOADING_SVG} alt="loading" />
    </center>
  );
};

const SearchCityForm = ({ setMapLocation }) => {
  const [countryName, setCountryName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cityResults, setCityResults] = useState([]);

  const search = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsOpen(true);
    const result = await searchCity(countryName);
    setCityResults(result);
    setIsLoading(false);
  };

  const handleFormChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleCloseResults = (e) => {
    setIsOpen(false);
  };

  const hasResults = Boolean(cityResults) && cityResults.length > 0;

  return (
    <>
      <Form className={styles_form.mapFormContainer} inline>
        <FormGroup className={styles_form.searchFormGroup}>
          <Input
            className={styles_form.searchInput}
            name="country"
            autoComplete="off"
            value={countryName}
            onChange={(e) => handleFormChange(e)}
            type="text"
          />
        </FormGroup>
        <Button className={styles_form.searchButton} onClick={(e) => search(e)}>
          Search
        </Button>
        {isOpen && (
          <>
            <div className={styles_form.cityHintContainer}>
              <div className={styles_form.cityHintList}>
                {isLoading ? (
                  <LoadingAnimation />
                ) : hasResults ? (
                  <CityList
                    itemList={cityResults}
                    closeResults={handleCloseResults}
                    setMapLocation={setMapLocation}
                  />
                ) : (
                  <E404Cities />
                )}
              </div>
            </div>
            <span
              onClick={(e) => handleCloseResults(e)}
              className={styles_form.closeSearchResultsButton}
            >
              Close
            </span>
          </>
        )}
      </Form>
    </>
  );
};

export default SearchCityForm;
