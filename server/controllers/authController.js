const User = require("../models/User");
const { hashPassword, comparePasswords } = require("../utils/helpers");

exports.register = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const dbUser = await User.findOne({ where: { email } });

        if (dbUser) {
            res.status(400).send('User already exists!');
        } else {
            const user = await User.create({
                name,
                email,
                password: hashPassword(password),
            });
            res.status(201);
            res.send(user);
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        console.log(user.password);
        console.log(hashPassword(password));

        if (user) {
            const isSamePassword = comparePasswords(password, user.password);
            if (isSamePassword) {
                res.status(201);
                return res.send(user);
            }
        }
        res.status(400);
        res.send({ message: 'Invalid email or password!' });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
