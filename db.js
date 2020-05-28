const Pool = require('pg').Pool;
const pool = new Pool({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    }
});

const getTodos = (request, response) => {
    pool.query('SELECT * FROM todo', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = { getTodos };