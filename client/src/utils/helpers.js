const { AUTH_TOKEN_KEY } = require("./constants");

/**
 * Returns request config without the authentication header included. 
 * For default requests
 * @returns {object}
 */
exports.getDefaultRequestConfig = () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    return config;
}


/**
 * Returns request config with authentication header set based on 
 * value store on localstorage
 * @returns {object}
 */
exports.getAuthRequestConfig = () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-access-token": sessionStorage.getItem(AUTH_TOKEN_KEY),
        }
    }

    return config;
}

/**
 * Verifies agains a regex if inputValue is an email
 * @param {any} inputvalue - email to validate
 * @returns {boolean}
 */
const isEmail = (inputvalue) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
    return regex.test(String(inputvalue).toLowerCase());
}

/**
 * Verifies is password is at least 8 characters long
 * @param {any} inputValue - password to validate
 * @returns {boolean}
 */
const isValidPassword = (inputValue) => {
    return Boolean(inputValue) && inputValue.length >= 8;
}

/**
 * Verifies if email and passoword are according to the app rules for login data
 * @param {any} email - email to test
 * @param {any} password - password to test
 * @returns {object} - error object with info about each field error
 */
exports.validateLoginData = (email, password) => {
    const errors = {};
    if(!isEmail(email))
        errors.email = 'Invalid Email.';
    if(!isValidPassword(password))
        errors.password = 'Invalid password. Passwords should be 8 characters long';

    return errors;
}