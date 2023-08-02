require('dotenv').config();
const { default: axios } = require('axios');
const config = require('config');

exports.getCityInfo = async (req, res) => {
    try {

        // :::: Get Location Info
        const { lat, lon } = req.query;
        let url = `${config.get("services.weatherAPI")}?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`;
        let response = await axios.get(url);

        const forecastData = response.data;
        const forecast = {
            weather: forecastData.weather,
            main: forecastData.main,
            wind: forecastData.wind,
            clouds: forecastData.clouds,
            name: forecastData.name,
            sys: forecastData.sys,
        };


        // :::: Get Exchange Rage
        let exchangeRate = {};
        if(req.isAuth)  {
            currency = config.get(`country-currency.${forecast.sys.country}`);
            url = `${config.get("services.exchangeRatesAPI")}?access_key=${process.env.EXCHANGERATES_API_KEY}&symbols=${currency}`;
            response = await axios.get(url);
            exchangeRate = response.data;
        }

        // :::: Get Country Data
        let countryData = {};



        res.status(201).send({ forecast, exchangeRate, countryData});

    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getCityOptions = async (req, res) => {
    try {
        const { q } = req.query;

        const url = `${config.get("services.citiesAPI")}?q=${q}&limit=${config.get("services.citiesLimit")}&appid=${process.env.OPENWEATHER_API_KEY}`;
        const response = await axios.get(url);

        const data = response.data;

        res.status(201).send(data);

    } catch (error) {
        res.status(500).send(error.message);
    }

}

exports.getCurrency = async (req, res) => {
    try {

        const { currency } = req.query;
        const url = `${config.get("services.exchangeRatesAPI")}?access_key=${process.env.EXCHANGERATES_API_KEY}&symbols=${currency}`;
        const response = await axios.get(url);

        const data = response.data;

        res.staus(201).send(data);

    } catch (error) {
        res.status(500).send(error.message);
    }
}