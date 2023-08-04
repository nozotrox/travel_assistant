const express = require('express');
const cors = require('cors');
const sequelize = require("./services/database");
const User = require('./models/User');
require('dotenv').config();

const app = express();
sequelize.sync().then(() => console.log('db is ready'));

// :::: Middlewares
app.use(express.json());
app.use(cors());
const { verifyToken } = require("./middlewares/auth")

// :::: Routes
const authRoutes = require("./routes/authRoute");
const servicesRoutes = require("./routes/servicesRoute");


app.get('/api/', verifyToken, (req, res) => {
    res.status(200).send("API is UP!");
    // res.status(400).send("Bad Request");
});
app.use('/api/auth', authRoutes);
app.use('/api/services', verifyToken, servicesRoutes);

app.listen(process.env.PORT || 3000);