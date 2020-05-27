const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");

//middlware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES

app.listen(process.env.PORT || 5000, () => {
    console.log('server started');
})