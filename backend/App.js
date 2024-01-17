const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute  = require('./routes/userRoute');
const englishRoute = require('./routes/englishRoute');
const biologyRoute = require('./routes/biologyRoute');
const physicsRoute = require('./routes/physicsRoute');
const mathRoute = require('./routes/mathRoute');
const chemistryRoute = require('./routes/chemistryRoute');
const app = express();

// Connect to MongoDB
const DB_URL = 'mongodb+srv://ghulamakbar:ghulamakbar@cluster0.tfxzcvr.mongodb.net/?retryWrites=true&w=majority';

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use cors middleware to handle CORS headers
app.use(cors());

// Routes
app.use('/englishquestions', englishRoute);
app.use('/biologyquestions',biologyRoute);
app.use('/physicsquestions', physicsRoute);
app.use('/mathquestions', mathRoute);
app.use('/chemistryquestions', chemistryRoute);
app.use('/users', userRoute);


mongoose.connect(DB_URL).then(() => { console.log('Connected to database') }).catch((error) => { console.log(error) });


app.listen(4000, () => { console.log('server started') });
