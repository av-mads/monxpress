const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
var index = require('./routes/index.js')

// Use routes
app.use('/', index);

// Connect to db
mongoose.connect(process.env.Db_CONNECTION, { useNewUrlParser: true }).then(console.log('con sucess'));

// Routes
app.get('/', (req, res) => {
    res.send('Home')
});

// Listen to server
app.listen(3000);
