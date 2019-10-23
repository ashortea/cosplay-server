require('dotenv').config();

const express = require('express');
const app= express();
const test = require('./controllers/testcontroller')
const user = require('./controllers/usercontroller');
const cosplay = require('./controllers/cosplaycontroller')

const sequelize = require('./db');
sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers')); 

app.use('/test', test)

app.use('/auth', user); 
app.use('/cosplay', cosplay)

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));


