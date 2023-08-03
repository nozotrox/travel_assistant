const config = require('config');
const bcrypt = require('bcrypt');
/**
 * Enripts or hashses the provided passsword.
 * Returns an object with the hashed password and a salt.
 * @param {string} password - input password
 * @returns {object} - with hashpassword and salt as properties
 */
exports.hashPassword = (password) => { 
    const HASH_ROUNDS = config.get("database.encryption_rounds");
    const salt = bcrypt.genSaltSync(HASH_ROUNDS);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return {hashedPassword, salt}
}



/**
 * Verifies if hashedPassword will be equal to password when used with salt
 * @param {string} hashedPassword - the hashed password
 * @param {string} password - the clear password for verification
 * @param {string} salt - the salt to hash the password with
 * @returns {bool} - evaluation of the comparison
 */
exports.comparePasswords = (hashedPassword, password, salt) => { 
    const newHashedPassword = bcrypt.hashSync(password, salt);
    return newHashedPassword === hashedPassword;
}