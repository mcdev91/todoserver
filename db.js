const Pool = require('pg').Pool;
const pool = new Pool({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    }
});

module.exports = pool;