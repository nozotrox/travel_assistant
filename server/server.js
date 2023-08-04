const express = require('express');
const cors = require('cors');
const sequelize = require("./services/database");
const User = require('./models/User');
require('dotenv').config();

const app = express();
sequelize.sync({logging: false}).then(console.log(':: Successfully connected to database. '));
const PORT = process.env.PORT || 3000;

// :::: Middlewares
app.use(express.json());
app.use(cors());
const { verifyToken } = require("./middlewares/auth")

// :::: Routes
const authRoutes = require("./routes/authRoute");
const servicesRoutes = require("./routes/servicesRoute");


app.get('/api/', verifyToken, (req, res) => {
    res.status(200).send("API is UP!");
});

app.use('/api/auth', authRoutes);
app.use('/api/services', verifyToken, servicesRoutes);

app.listen(PORT, () => { 
    console.log(`:: Server running on http://localhost:${process.env.PORT}`);
});