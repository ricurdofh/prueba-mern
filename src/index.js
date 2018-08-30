const express = require('express');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json());

// Routes
app.use('/api/posts', require('./Routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Start
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});