require("dotenv").config();
const User = require("../models/User");
const { hashPassword, comparePasswords } = require("../utils/helpers");
const jwt = require('jsonwebtoken');

/**
 * Registers user to the database
 * @param {object} req
 * @param {object} res
 * @returns {any}
 */
exports.register = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const dbUser = await User.findOne({ where: { email } });
        const passwordHashResult = hashPassword(password);

        if (dbUser) {
            res.status(400).send('User already exists!');
        } else {
            const user = await User.create({
                name,
                email,
                password: passwordHashResult.hashedPassword,
                salt: passwordHashResult.salt,
            });
            res.status(201);
            res.send(user);
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


/**
 * Authenticates user. Upon successful authentication, a jwt authentication token
 * attached to the user response object
 * @param {object} req
 * @param {object} res
 * @returns {any}
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (user) {
            const isSamePassword = comparePasswords(user.password, password, user.salt);
            if (isSamePassword) {
                const authToken = jwt.sign(
                    {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h",
                    }
                )
                user.authToken = authToken;
                const responseObj = {...user.dataValues, authToken};

                res.status(201);
                res.send(responseObj);
                return responseObj;
            }
        }
        res.status(400);
        res.send({ message: 'Invalid email or password!' });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
