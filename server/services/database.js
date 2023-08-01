const { Sequelize } = require('sequelize');
const config = require('config');

// :::::::::: DATABASE PARAMS
const DB_TYPE = config.get("database.type");
const DB_NAME = config.get("database.name");
const DB_USERNAME = config.get("database.username");
const DB_PASSWORD = config.get("database.password");
const DB_HOST = config.get("database.host");

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    dialect: DB_TYPE,
    host: DB_HOST,
});

module.exports = sequelize;