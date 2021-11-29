/* creating the route to request data */
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


// Creating routes.
// req.query and req.params look for specific data that the server can send back to the client.

app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Post defines the route that listens for post requests from the client to the server


app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});