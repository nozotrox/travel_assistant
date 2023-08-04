require('dotenv').config();
const { default: axios } = require('axios');
const config = require('config');

// :::: API Services Urls
const WEATHER_API_URL = config.get("services.weatherAPI");
const CITIES_API_URL = config.get("services.citiesAPI");
const EXCHANGERATE_API_URL = config.get("services.exchangeRatesAPI");
const WORLDBANK_API_URL = config.get("services.worldBankAPI");

// :::: API Services  Params
const GDP_PER_CAPITA_ICODE = config.get("services.api_params.gdp_per_capita_icode");
const POPULATION_ICODE = config.get("services.api_params.current_population_icode");
const CITIES_SEARCH_LIMIT = config.get("services.api_params.citiesLimit");


/**
 * Get city information about weather, conversion rate, gdp per capita and current population.
 * If user is not authenticated or isn't logged int, only the weather forecase info will be
 * returned
 * @param {object} req
 * @param {object} res
 * @returns {any}
 */
exports.getCityInfo = async (req, res) => {
    try {

        // :::: Get Location Info
        const { lat, lon } = req.query;
        let url = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`;
        let response = await axios.get(url);

        const { list, city } = response.data;
        const forecast = { list, city };

        // :::: Get Exchange Rage
        let exchangeRate = {};
        if (req.isAuth) {
            const currency = config.get(`country-currency.${forecast.city.country}`);
            url = `${EXCHANGERATE_API_URL}?access_key=${process.env.EXCHANGERATES_API_KEY}&symbols=${currency}`;
            response = await axios.get(url);
            exchangeRate = response.data;
        }

        // :::: Get Country Data (GPD PER CAPITA) and (CURRENT POPULATION)
        let countryData = {};
        if (req.isAuth) {
            const year = new Date().getFullYear() - 1;
            const countryCode = forecast.city.country;

            url = `${WORLDBANK_API_URL}/${countryCode}/indicators/${GDP_PER_CAPITA_ICODE}?format=json&date=${year}`;
            response = await axios.get(url);
            const gdp = {
                indicator: response.data[1][0].indicator.value,
                value: response.data[1][0].value,
                year: response.data[1][0].year,
            }

            url = `${WORLDBANK_API_URL}/${countryCode}/indicators/${POPULATION_ICODE}?format=json&date=${year}`
            response = await axios.get(url);
            const pop = {
                indicator: response.data[1][0].indicator.value,
                value: response.data[1][0].value,
                year: response.data[1][0].year,
            }

            countryData = { gdp, pop };
        }


        res.status(201).send({ forecast, exchangeRate, countryData });

    } catch (error) {
        res.status(500).send(error.message);
    }
}


/**
 * Searches for cities by keyword.
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.getCityOptions = async (req, res) => {
    try {
        const { q } = req.query;
        const url = `${CITIES_API_URL}?q=${q}&limit=${CITIES_SEARCH_LIMIT}&appid=${process.env.OPENWEATHER_API_KEY}`;
        const response = await axios.get(url);
        const data = response.data;

        res.status(201).send(data);

    } catch (error) {
        res.status(500).send(error.message);
    }

}