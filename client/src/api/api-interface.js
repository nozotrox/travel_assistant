import axios from 'axios';
import { getAuthRequestConfig, getDefaultRequestConfig } from '../utils/helpers';

export const searchCity = async (cityName) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/services/cities?q=${cityName}`;
        const response = await axios.get(url, getDefaultRequestConfig());
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getCityInformation = async (location) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/services/travelinfo?lat=${location.latitude}&lon=${location.longitude}`;
        console.log(url);
        const response = await axios.get(url, getAuthRequestConfig());
        return response.data;
    } catch (error) {
        return;
    }
}