import axios from 'axios';
import { getDefaultRequestConfig } from '../utils/helpers';

export const searchCity = async (cityName) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/services/cities?q=${cityName}`;
        const response = await axios.get(url, getDefaultRequestConfig());
        return response.data;
    } catch (error) {
        return [];
    }
}