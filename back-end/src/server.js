const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3001;

const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432, ///???
});

app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM mytable');
        res.json(result.rows);
    } catch  (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});