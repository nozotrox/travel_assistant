const crypto = require('crypto');
const config = require('config');

exports.hashPassword = (password) => { 
    return crypto.createHash(config.get('database.encription_algorithm')).update(password).digest('hex');
}

exports.comparePasswords = (rawPassword, hash) => { 
    const hashedRaw = crypto.createHash(config.get('database.encription_algorithm')).update(rawPassword).digest('hex');
    return hashedRaw === hash;
}