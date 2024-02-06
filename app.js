const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./util/database');
const app = express();  

app.use(cors());

const meetingRoutes = require('./routes/meeting');

app.use(bodyParser.json())

app.use('/meeting', meetingRoutes);

sequelize.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => {
    console.log(err)
})