import { useState } from "react";
import MAP_PIN_ICON from "../assets/icons/map-pin.svg";
import styles_form from "../styles/form.module.scss";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { searchCity } from "../api/api-interface";

import LOADING_SVG from "../assets/icons/loading.svg";

const _CityList = ({ itemList }) => {
  return itemList.map((city, idx) => {
    return (
      <div key={`city-${idx}`} className={styles_form.listItem}>
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

const _404Cities = () => {
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

const _LoadingAnimation = () => {
  return (
    <center>
      <img src={LOADING_SVG} alt="loading" />
    </center>
  );
};

const SearchCityForm = () => {
  const [countryName, setCountryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cityResults, setCityResults] = useState([]);

  const search = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await searchCity(countryName);
    setCityResults(result);
    setIsLoading(false);
  };

  const handleFormChange = (e) => {
    console.log("form");
    setCountryName(e.target.value);
  };

  const hasResults = Boolean(cityResults) && cityResults.length > 0;

  return (
    <Form className={styles_form.mapFormContainer} inline>
      <FormGroup className={styles_form.searchFormGroup}>
        <Input
          className={styles_form.searchInput}
          name="country"
          value={countryName}
          onChange={(e) => handleFormChange(e)}
          type="text"
        />
      </FormGroup>
      <Button className={styles_form.searchButton} onClick={(e) => search(e)}>
        Search
      </Button>
      <div className={styles_form.cityHintContainer}>
        <div className={styles_form.cityHintList}>
          {isLoading ? (
            <_LoadingAnimation />
          ) : hasResults ? (
            <_CityList itemList={cityResults} />
          ) : (
            <_404Cities />
          )}
        </div>
      </div>
    </Form>
  );
};

export default SearchCityForm;
