require('dotenv').config();
const { default: axios } = require('axios');
const config = require('config');

exports.getCityInfo = async (req, res) => {
    try {

        const { lat, lon } = req.query;
        const url = `${config.get("services.weatherAPI")}?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`;
        const response = await axios.get(url);

        const data = response.data;
        const forecast = {
            weather: data.weather,
            main: data.main,
            wind: data.wind,
            clouds: data.clouds,
            name: data.name
        }
            = response.data;

        res.status(201).send({ forecast });

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