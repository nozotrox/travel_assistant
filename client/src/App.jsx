import "./App.css";
import Banner from "./components/banner.component";
import NavigationBar from "./components/navigation-bar.component";
import Map from "./components/map.component";
import styles_main from "./styles/main.module.scss";
import InfoPanel from "./components/info-panel.component";
import { AppContext } from "./hooks/Context";
import { useState } from "react";
import { IDLE_STATUS } from "./utils/constants";
import LoginModal from "./components/login.modal";

const def = {
  forecast: {
    list: [
      {
        dt: 1691096400,
        main: {
          temp: 22.87,
          feels_like: 23.35,
          temp_min: 18.5,
          temp_max: 22.87,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 924,
          humidity: 82,
          temp_kf: 4.37,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.34,
          deg: 191,
          gust: 5.6,
        },
        visibility: 10000,
        pop: 0.13,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-03 21:00:00",
      },
      {
        dt: 1691107200,
        main: {
          temp: 20.92,
          feels_like: 21.1,
          temp_min: 17.02,
          temp_max: 20.92,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 924,
          humidity: 78,
          temp_kf: 3.9,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.27,
          deg: 200,
          gust: 5.63,
        },
        visibility: 10000,
        pop: 0.1,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-04 00:00:00",
      },
      {
        dt: 1691118000,
        main: {
          temp: 17.89,
          feels_like: 17.67,
          temp_min: 15.4,
          temp_max: 17.89,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 923,
          humidity: 74,
          temp_kf: 2.49,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 85,
        },
        wind: {
          speed: 3.4,
          deg: 202,
          gust: 5.53,
        },
        visibility: 10000,
        pop: 0.08,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-04 03:00:00",
      },
      {
        dt: 1691128800,
        main: {
          temp: 17.58,
          feels_like: 17.2,
          temp_min: 17.58,
          temp_max: 17.58,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 925,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 88,
        },
        wind: {
          speed: 2.58,
          deg: 199,
          gust: 4.88,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-04 06:00:00",
      },
      {
        dt: 1691139600,
        main: {
          temp: 22.94,
          feels_like: 22.31,
          temp_min: 22.94,
          temp_max: 22.94,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 926,
          humidity: 39,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 1.52,
          deg: 203,
          gust: 3.93,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-04 09:00:00",
      },
      {
        dt: 1691150400,
        main: {
          temp: 24.58,
          feels_like: 23.93,
          temp_min: 24.58,
          temp_max: 24.58,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 926,
          humidity: 32,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 0.35,
          deg: 163,
          gust: 5.09,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-04 12:00:00",
      },
      {
        dt: 1691161200,
        main: {
          temp: 22.73,
          feels_like: 22.02,
          temp_min: 22.73,
          temp_max: 22.73,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 925,
          humidity: 37,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.25,
          deg: 194,
          gust: 2.73,
        },
        visibility: 10000,
        pop: 0.12,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-04 15:00:00",
      },
      {
        dt: 1691172000,
        main: {
          temp: 17.62,
          feels_like: 16.9,
          temp_min: 17.62,
          temp_max: 17.62,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 924,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.42,
          deg: 180,
          gust: 4.83,
        },
        visibility: 10000,
        pop: 0.41,
        rain: {
          "3h": 0.15,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-04 18:00:00",
      },
      {
        dt: 1691182800,
        main: {
          temp: 14.38,
          feels_like: 13.83,
          temp_min: 14.38,
          temp_max: 14.38,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 925,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.8,
          deg: 242,
          gust: 2.04,
        },
        visibility: 10000,
        pop: 0.37,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-04 21:00:00",
      },
      {
        dt: 1691193600,
        main: {
          temp: 11.89,
          feels_like: 11.43,
          temp_min: 11.89,
          temp_max: 11.89,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 925,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 90,
        },
        wind: {
          speed: 1.98,
          deg: 285,
          gust: 2.65,
        },
        visibility: 10000,
        pop: 0.35,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-05 00:00:00",
      },
      {
        dt: 1691204400,
        main: {
          temp: 11.01,
          feels_like: 10.67,
          temp_min: 11.01,
          temp_max: 11.01,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 924,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 54,
        },
        wind: {
          speed: 1.34,
          deg: 305,
          gust: 1.87,
        },
        visibility: 10000,
        pop: 0.51,
        rain: {
          "3h": 0.37,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-05 03:00:00",
      },
      {
        dt: 1691215200,
        main: {
          temp: 12.33,
          feels_like: 11.99,
          temp_min: 12.33,
          temp_max: 12.33,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 925,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 69,
        },
        wind: {
          speed: 1.28,
          deg: 288,
          gust: 1.95,
        },
        visibility: 10000,
        pop: 0.6,
        rain: {
          "3h": 0.48,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-05 06:00:00",
      },
      {
        dt: 1691226000,
        main: {
          temp: 12.78,
          feels_like: 12.46,
          temp_min: 12.78,
          temp_max: 12.78,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 926,
          humidity: 90,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.04,
          deg: 285,
          gust: 2.19,
        },
        visibility: 10000,
        pop: 0.45,
        rain: {
          "3h": 0.17,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-05 09:00:00",
      },
      {
        dt: 1691236800,
        main: {
          temp: 14.7,
          feels_like: 14.34,
          temp_min: 14.7,
          temp_max: 14.7,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 927,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.96,
          deg: 299,
          gust: 2.14,
        },
        visibility: 10000,
        pop: 0.45,
        rain: {
          "3h": 0.26,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-05 12:00:00",
      },
      {
        dt: 1691247600,
        main: {
          temp: 19.28,
          feels_like: 18.7,
          temp_min: 19.28,
          temp_max: 19.28,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 927,
          humidity: 55,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 66,
        },
        wind: {
          speed: 2.03,
          deg: 56,
          gust: 2.6,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-05 15:00:00",
      },
      {
        dt: 1691258400,
        main: {
          temp: 16.24,
          feels_like: 15.77,
          temp_min: 16.24,
          temp_max: 16.24,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 926,
          humidity: 71,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 35,
        },
        wind: {
          speed: 1.04,
          deg: 54,
          gust: 1.52,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-05 18:00:00",
      },
      {
        dt: 1691269200,
        main: {
          temp: 12.62,
          feels_like: 12.08,
          temp_min: 12.62,
          temp_max: 12.62,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 925,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.25,
          deg: 202,
          gust: 2.15,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-05 21:00:00",
      },
      {
        dt: 1691280000,
        main: {
          temp: 12.74,
          feels_like: 12.11,
          temp_min: 12.74,
          temp_max: 12.74,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 924,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.58,
          deg: 207,
          gust: 2.78,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-06 00:00:00",
      },
      {
        dt: 1691290800,
        main: {
          temp: 12.48,
          feels_like: 11.82,
          temp_min: 12.48,
          temp_max: 12.48,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 923,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.02,
          deg: 215,
          gust: 1.81,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-06 03:00:00",
      },
      {
        dt: 1691301600,
        main: {
          temp: 15.81,
          feels_like: 15.04,
          temp_min: 15.81,
          temp_max: 15.81,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 924,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 15,
        },
        wind: {
          speed: 0.98,
          deg: 221,
          gust: 1.47,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-06 06:00:00",
      },
      {
        dt: 1691312400,
        main: {
          temp: 22.02,
          feels_like: 21.35,
          temp_min: 22.02,
          temp_max: 22.02,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 925,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 24,
        },
        wind: {
          speed: 0.43,
          deg: 43,
          gust: 1.98,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-06 09:00:00",
      },
      {
        dt: 1691323200,
        main: {
          temp: 24.71,
          feels_like: 24.15,
          temp_min: 24.71,
          temp_max: 24.71,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 924,
          humidity: 35,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 29,
        },
        wind: {
          speed: 1.22,
          deg: 5,
          gust: 3.63,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-06 12:00:00",
      },
      {
        dt: 1691334000,
        main: {
          temp: 23.07,
          feels_like: 22.56,
          temp_min: 23.07,
          temp_max: 23.07,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 924,
          humidity: 43,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 90,
        },
        wind: {
          speed: 0.48,
          deg: 327,
          gust: 1.2,
        },
        visibility: 10000,
        pop: 0.04,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-06 15:00:00",
      },
      {
        dt: 1691344800,
        main: {
          temp: 17.74,
          feels_like: 17.42,
          temp_min: 17.74,
          temp_max: 17.74,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 923,
          humidity: 71,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 78,
        },
        wind: {
          speed: 2.88,
          deg: 203,
          gust: 4.33,
        },
        visibility: 10000,
        pop: 0.35,
        rain: {
          "3h": 0.39,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-06 18:00:00",
      },
      {
        dt: 1691355600,
        main: {
          temp: 13.5,
          feels_like: 13.07,
          temp_min: 13.5,
          temp_max: 13.5,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 924,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 12,
        },
        wind: {
          speed: 2.55,
          deg: 206,
          gust: 2.83,
        },
        visibility: 10000,
        pop: 0.39,
        rain: {
          "3h": 0.13,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-06 21:00:00",
      },
      {
        dt: 1691366400,
        main: {
          temp: 10.9,
          feels_like: 10.53,
          temp_min: 10.9,
          temp_max: 10.9,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 926,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 0.52,
          deg: 106,
          gust: 1.76,
        },
        visibility: 10000,
        pop: 0.51,
        rain: {
          "3h": 0.36,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-07 00:00:00",
      },
      {
        dt: 1691377200,
        main: {
          temp: 10.4,
          feels_like: 10,
          temp_min: 10.4,
          temp_max: 10.4,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 927,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 1.19,
          deg: 263,
          gust: 1.18,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          "3h": 0.11,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-07 03:00:00",
      },
      {
        dt: 1691388000,
        main: {
          temp: 13.07,
          feels_like: 12.78,
          temp_min: 13.07,
          temp_max: 13.07,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 929,
          humidity: 90,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 1.48,
          deg: 329,
          gust: 1.98,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-07 06:00:00",
      },
      {
        dt: 1691398800,
        main: {
          temp: 17.78,
          feels_like: 17.21,
          temp_min: 17.78,
          temp_max: 17.78,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 17,
        },
        wind: {
          speed: 2.32,
          deg: 4,
          gust: 1.82,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-07 09:00:00",
      },
      {
        dt: 1691409600,
        main: {
          temp: 21.99,
          feels_like: 21.34,
          temp_min: 21.99,
          temp_max: 21.99,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 932,
          humidity: 42,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 9,
        },
        wind: {
          speed: 3.41,
          deg: 19,
          gust: 3.52,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-07 12:00:00",
      },
      {
        dt: 1691420400,
        main: {
          temp: 22.67,
          feels_like: 22.04,
          temp_min: 22.67,
          temp_max: 22.67,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 932,
          humidity: 40,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 27,
        },
        wind: {
          speed: 2.79,
          deg: 13,
          gust: 2.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-07 15:00:00",
      },
      {
        dt: 1691431200,
        main: {
          temp: 17.9,
          feels_like: 17.29,
          temp_min: 17.9,
          temp_max: 17.9,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 932,
          humidity: 59,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 19,
        },
        wind: {
          speed: 1.87,
          deg: 43,
          gust: 3.21,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-07 18:00:00",
      },
      {
        dt: 1691442000,
        main: {
          temp: 13.83,
          feels_like: 13.1,
          temp_min: 13.83,
          temp_max: 13.83,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 933,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 47,
        },
        wind: {
          speed: 1.46,
          deg: 194,
          gust: 1.87,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-07 21:00:00",
      },
      {
        dt: 1691452800,
        main: {
          temp: 12.85,
          feels_like: 12.1,
          temp_min: 12.85,
          temp_max: 12.85,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 933,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 63,
        },
        wind: {
          speed: 1.14,
          deg: 212,
          gust: 1.27,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-08 00:00:00",
      },
      {
        dt: 1691463600,
        main: {
          temp: 11.44,
          feels_like: 10.7,
          temp_min: 11.44,
          temp_max: 11.44,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 933,
          humidity: 79,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 16,
        },
        wind: {
          speed: 0.75,
          deg: 256,
          gust: 0.91,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-08 03:00:00",
      },
      {
        dt: 1691474400,
        main: {
          temp: 14.72,
          feels_like: 13.92,
          temp_min: 14.72,
          temp_max: 14.72,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 935,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 9,
        },
        wind: {
          speed: 0.53,
          deg: 18,
          gust: 0.92,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-08 06:00:00",
      },
      {
        dt: 1691485200,
        main: {
          temp: 21.05,
          feels_like: 20.44,
          temp_min: 21.05,
          temp_max: 21.05,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 936,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 2.6,
          deg: 60,
          gust: 2.45,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-08 09:00:00",
      },
      {
        dt: 1691496000,
        main: {
          temp: 24.7,
          feels_like: 24.17,
          temp_min: 24.7,
          temp_max: 24.7,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 936,
          humidity: 36,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 26,
        },
        wind: {
          speed: 3.78,
          deg: 40,
          gust: 3.61,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-08 12:00:00",
      },
      {
        dt: 1691506800,
        main: {
          temp: 23.65,
          feels_like: 23.14,
          temp_min: 23.65,
          temp_max: 23.65,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 936,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 85,
        },
        wind: {
          speed: 4.94,
          deg: 43,
          gust: 3.43,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-08 15:00:00",
      },
      {
        dt: 1691517600,
        main: {
          temp: 18.46,
          feels_like: 18.06,
          temp_min: 18.46,
          temp_max: 18.46,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 936,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 52,
        },
        wind: {
          speed: 3.4,
          deg: 75,
          gust: 6.26,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-08 18:00:00",
      },
    ],
    city: {
      id: 971534,
      name: "Nelspruit",
      coord: {
        lat: -25.4819,
        lon: 30.9847,
      },
      country: "ZA",
      population: 110159,
      timezone: 7200,
      sunrise: 1691037188,
      sunset: 1691076681,
    },
  },
  exchangeRate: {},
  countryData: {},
};

function App() {
  const [state, setState] = useState({
    weather: {},
    location: {},
    xChangeRate: {},
    popData: {},
    modal: '',
    status: IDLE_STATUS,
  });

  const value = { state, setState };

  return (
    <AppContext.Provider value={value}>
      <div id="app">
        <NavigationBar />
        <Banner />
        <div className={styles_main.mainContentContainer}>
          <Map />
          <InfoPanel />
        </div>
      </div>
      {/* :::Modals */}
      <LoginModal />
    </AppContext.Provider>
  );
}

export default App;
