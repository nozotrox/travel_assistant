const express = require('express');
const cors = require('cors');
const sequelize = require("./services/database");
const User = require('./models/User');

const app = express();
sequelize.sync().then(() => console.log('db is ready'));

// :::: Middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/user', async (req, res) => { 
    try {
        await User.create(req.body);
        res.send('User Created');
    } catch (error) {
        res.status(500).send(error);
    }
});
app.listen(process.env.PORT || 3000);