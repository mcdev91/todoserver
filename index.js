const express = require('express');
const favicon = require('express-favicon');
const app = express();
const cors = require('cors');
const db = require('./db');

//middlware
app.use(cors());
app.use(express.json()); //req.body
app.use('/favicon.ico', express.static('./server.png'));

//favicon
app.use(favicon(__dirname + './server.png'));

//ROUTES
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API, Server is running :)' })
});

// //get all todos


app.listen(process.env.PORT || 5000, () => {
    console.log('server started');
})