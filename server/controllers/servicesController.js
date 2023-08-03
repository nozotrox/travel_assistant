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
        let url = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`;
        let response = await axios.get(url);

        const { list, city } = response.data;
        const forecast = {list, city};

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

        return res.status(201).send([
            {
                "name": "London",
                "local_names": {
                    "ca": "Londres",
                    "st": "London",
                    "sk": "Londýn",
                    "pa": "ਲੰਡਨ",
                    "bg": "Лондон",
                    "he": "לונדון",
                    "nn": "London",
                    "ar": "لندن",
                    "ro": "Londra",
                    "ky": "Лондон",
                    "bs": "London",
                    "wo": "Londar",
                    "sd": "لنڊن",
                    "ie": "London",
                    "li": "Londe",
                    "gd": "Lunnainn",
                    "it": "Londra",
                    "fj": "Lodoni",
                    "bm": "London",
                    "hi": "लंदन",
                    "my": "လန်ဒန်မြို့",
                    "sr": "Лондон",
                    "ce": "Лондон",
                    "sv": "London",
                    "mn": "Лондон",
                    "ga": "Londain",
                    "zu": "ILondon",
                    "vo": "London",
                    "yo": "Lọndọnu",
                    "sa": "लन्डन्",
                    "eu": "Londres",
                    "om": "Landan",
                    "lb": "London",
                    "de": "London",
                    "mt": "Londra",
                    "tr": "Londra",
                    "feature_name": "London",
                    "ay": "London",
                    "ee": "London",
                    "fi": "Lontoo",
                    "mk": "Лондон",
                    "mg": "Lôndôna",
                    "el": "Λονδίνο",
                    "sn": "London",
                    "lo": "ລອນດອນ",
                    "os": "Лондон",
                    "ko": "런던",
                    "es": "Londres",
                    "kl": "London",
                    "bi": "London",
                    "zh": "伦敦",
                    "tl": "Londres",
                    "gn": "Lóndyre",
                    "af": "Londen",
                    "ml": "ലണ്ടൻ",
                    "te": "లండన్",
                    "io": "London",
                    "nv": "Tooh Dineʼé Bikin Haalʼá",
                    "mr": "लंडन",
                    "nl": "Londen",
                    "et": "London",
                    "av": "Лондон",
                    "sm": "Lonetona",
                    "ff": "London",
                    "si": "ලන්ඩන්",
                    "rm": "Londra",
                    "cu": "Лондонъ",
                    "kw": "Loundres",
                    "lt": "Londonas",
                    "da": "London",
                    "ascii": "London",
                    "gv": "Lunnin",
                    "tg": "Лондон",
                    "pl": "Londyn",
                    "en": "London",
                    "id": "London",
                    "qu": "London",
                    "be": "Лондан",
                    "an": "Londres",
                    "ht": "Lonn",
                    "cs": "Londýn",
                    "tk": "London",
                    "is": "London",
                    "sw": "London",
                    "so": "London",
                    "fr": "Londres",
                    "ia": "London",
                    "kk": "Лондон",
                    "vi": "Luân Đôn",
                    "kn": "ಲಂಡನ್",
                    "ha": "Landan",
                    "ru": "Лондон",
                    "am": "ለንደን",
                    "na": "London",
                    "eo": "Londono",
                    "ur": "علاقہ لندن",
                    "km": "ឡុងដ៍",
                    "fo": "London",
                    "ms": "London",
                    "ln": "Lóndɛlɛ",
                    "hy": "Լոնդոն",
                    "oc": "Londres",
                    "wa": "Londe",
                    "ne": "लन्डन",
                    "lv": "Londona",
                    "ba": "Лондон",
                    "uk": "Лондон",
                    "ab": "Лондон",
                    "gu": "લંડન",
                    "kv": "Лондон",
                    "th": "ลอนดอน",
                    "ja": "ロンドン",
                    "bh": "लंदन",
                    "cy": "Llundain",
                    "jv": "London",
                    "tw": "London",
                    "co": "Londra",
                    "hr": "London",
                    "uz": "London",
                    "su": "London",
                    "ny": "London",
                    "fy": "Londen",
                    "cv": "Лондон",
                    "ta": "இலண்டன்",
                    "br": "Londrez",
                    "bn": "লন্ডন",
                    "ug": "لوندۇن",
                    "gl": "Londres",
                    "ku": "London",
                    "ig": "London",
                    "pt": "Londres",
                    "tt": "Лондон",
                    "mi": "Rānana",
                    "ka": "ლონდონი",
                    "az": "London",
                    "hu": "London",
                    "fa": "لندن",
                    "sh": "London",
                    "sl": "London",
                    "bo": "ལོན་ཊོན།",
                    "se": "London",
                    "no": "London",
                    "sc": "Londra",
                    "sq": "Londra",
                    "yi": "לאנדאן",
                    "to": "Lonitoni",
                    "or": "ଲଣ୍ଡନ",
                    "ps": "لندن"
                },
                "lat": 51.5073219,
                "lon": -0.1276474,
                "country": "GB",
                "state": "England"
            },
            {
                "name": "City of London",
                "local_names": {
                    "ru": "Сити",
                    "ur": "لندن شہر",
                    "lt": "Londono Sitis",
                    "he": "הסיטי של לונדון",
                    "zh": "倫敦市",
                    "en": "City of London",
                    "pt": "Cidade de Londres",
                    "fr": "Cité de Londres",
                    "hi": "सिटी ऑफ़ लंदन",
                    "ko": "시티 오브 런던",
                    "es": "City de Londres",
                    "uk": "Лондонське Сіті"
                },
                "lat": 51.5156177,
                "lon": -0.0919983,
                "country": "GB",
                "state": "England"
            },
            {
                "name": "London",
                "local_names": {
                    "th": "ลอนดอน",
                    "he": "לונדון",
                    "ka": "ლონდონი",
                    "oj": "Baketigweyaang",
                    "be": "Лондан",
                    "el": "Λόντον",
                    "hy": "Լոնտոն",
                    "yi": "לאנדאן",
                    "fr": "London",
                    "ug": "لوندۇن",
                    "iu": "ᓚᓐᑕᓐ",
                    "ar": "لندن",
                    "ru": "Лондон",
                    "lt": "Londonas",
                    "ga": "Londain",
                    "ja": "ロンドン",
                    "cr": "ᓬᐊᐣᑕᐣ",
                    "fa": "لندن",
                    "en": "London",
                    "bn": "লন্ডন",
                    "ko": "런던",
                    "lv": "Landona"
                },
                "lat": 42.9832406,
                "lon": -81.243372,
                "country": "CA",
                "state": "Ontario"
            },
            {
                "name": "Chelsea",
                "local_names": {
                    "it": "Chelsea",
                    "az": "Çelsi",
                    "et": "Chelsea",
                    "ru": "Челси",
                    "pl": "Chelsea",
                    "ko": "첼시",
                    "hu": "Chelsea",
                    "sk": "Chelsea",
                    "no": "Chelsea",
                    "vi": "Chelsea, Luân Đôn",
                    "ga": "Chelsea",
                    "id": "Chelsea, London",
                    "fr": "Chelsea",
                    "hi": "चेल्सी, लंदन",
                    "de": "Chelsea",
                    "zh": "車路士",
                    "eu": "Chelsea",
                    "ja": "チェルシー",
                    "fa": "چلسی",
                    "af": "Chelsea, Londen",
                    "ur": "چیلسی، لندن",
                    "en": "Chelsea",
                    "el": "Τσέλσι",
                    "sv": "Chelsea, London",
                    "es": "Chelsea",
                    "da": "Chelsea",
                    "ar": "تشيلسي",
                    "sh": "Chelsea, London",
                    "pt": "Chelsea",
                    "nl": "Chelsea",
                    "tr": "Chelsea, Londra",
                    "uk": "Челсі",
                    "he": "צ'לסי"
                },
                "lat": 51.4875167,
                "lon": -0.1687007,
                "country": "GB",
                "state": "England"
            },
            {
                "name": "London",
                "lat": 37.1289771,
                "lon": -84.0832646,
                "country": "US",
                "state": "Kentucky"
            }
        ]);
        const { q } = req.query;
        const url = `${CITIES_API_URL}?q=${q}&limit=${CITIES_SEARCH_LIMIT}&appid=${process.env.OPENWEATHER_API_KEY}`;
        const response = await axios.get(url);
        const data = response.data;

        res.status(201).send(data);

    } catch (error) {
        res.status(500).send(error.message);
    }

}