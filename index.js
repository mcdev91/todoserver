const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');

//middlware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

//get all todos
app.get('/todos', db.getTodos);

app.listen(process.env.PORT || 5000, () => {
    console.log('server started');
})