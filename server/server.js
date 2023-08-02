const express = require('express');
const cors = require('cors');
const sequelize = require("./services/database");
const User = require('./models/User');

const app = express();
sequelize.sync().then(() => console.log('db is ready'));

// :::: Middlewares
app.use(express.json());
app.use(cors());
const { verifyToken } = require("./middlewares/auth")

// :::: Routes
const authRoutes = require("./routes/authRoute");


app.get('/', verifyToken, (req, res) => {
    res.status(200).send({user: req.user, isAuth: req.isAuth});
    // res.status(400).send("Bad Request");
});
app.use('/auth', authRoutes);
app.listen(process.env.PORT || 3000);