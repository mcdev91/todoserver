const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");

//middlware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

//get all todos
const getTodos = (request, response) => {
    pool.query('SELECT * FROM todo', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

app.listen(process.env.PORT || 5000, () => {
    console.log('server started');
})