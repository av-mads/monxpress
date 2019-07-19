const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
var index = require('./routes/index.js')

// Use routes
app.use('/', index);

// Connect to db
mongoose.connect("mongodb+srv://Mads:fbihund888@cluster0-snbmm.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }).then(console.log('con sucess'));

// Routes
app.get('/', (req, res) => {
    res.send('Home')
});

// Listen to server
app.listen(3000);
