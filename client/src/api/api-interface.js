import axios from 'axios';
import { getAuthRequestConfig, getDefaultRequestConfig } from '../utils/helpers';

/**
 * API method that requests recognized cities from search keyword
 * @param {any} cityName - search keyword
 * @returns {any} - response data or empty array on error
 */
export const searchCity = async (cityName) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/services/cities?q=${cityName}`;
        const response = await axios.get(url, getDefaultRequestConfig());
        return response.data;
    } catch (error) {
        return [];
    }
}

/**
 * API method that requests all information about the location;
 * @param {object} location - geolocation coordiatnes {lat: "", lon: ""}
 * @returns {any} - response data or undefined on error
 */
export const getCityInformation = async (location) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/services/travelinfo?lat=${location.latitude}&lon=${location.longitude}`;
        const response = await axios.get(url, getAuthRequestConfig());
        return response.data;
    } catch (error) {
        return;
    }
}

/**
 * API method that sends login credentials 
 * @param {string} email - user email
 * @param {string} password - user password
 * @returns {object} - response data or an error
 */
export const login = async (email, password) => {
    try {
        const requestData = { email, password };
        const url = `${process.env.REACT_APP_API_URL}/auth/login`;
        const response = await axios.post(url, requestData, getDefaultRequestConfig());
        return response.data;
    } catch (error) {
        const unexpectedError = "An unexpected error occured";
        return { error: error.response ? error.response.data.error || unexpectedError : unexpectedError };
    }

}

/**
 * API method that registers user
 * @param {string} name - user full name
 * @param {string} email - user meail
 * @param {string} password - user password
 * @returns {any} - response data or an error
 */
export const registerUser = async (name, email, password) => {
    try {
        const requestData = { name, email, password };
        const url = `${process.env.REACT_APP_API_URL}/auth/register`;
        const response = await axios.post(url, requestData, getDefaultRequestConfig());
        return response.data;
    } catch (error) {
        console.log(error);
        const unexpectedError = "An unexpected error occured";
        return { error: error.response ? error.response.data.error || unexpectedError : unexpectedError };
    }
}