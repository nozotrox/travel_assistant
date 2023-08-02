const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Middelare to verify if the authentication token is valid. 
 * If token is valid, a user object and an isAuth (isAuthenticated) flag
 * is added to the request.
 * @param {object} req
 * @param {object} res
 * @param {any} next
 * @returns {any}
 */
exports.verifyToken = (req, res, next) => { 
    const token = req.headers["x-access-token"];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        req.isAuth = true;
    } catch (error) {
        req.isAuth = Boolean(token);
    }
    
    return next();
}