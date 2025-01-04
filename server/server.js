const express = require('express'); // framework for webservers and the creation of api-endpoints
const mysql = require('mysql'); // connection to mysql db
const cors = require('cors'); // middleware for cross-origin requests
require('dotenv').config({override : true}); //.env file

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) {
        console.error('mysql error: ', err);
        return;
    }
    console.log('mysql connected');
});

app.get('/api/user', (req, res) => {

    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

const PORT = process.env.PORT || 3000;


process.on('SIGINT', () => {
    console.log('Shutting down...');
    connection.end((err) => {
      if (err) {
        console.error('Error closing the database connection:', err);
      } else {
        console.log('Database connection closed.');
      }
      process.exit();
    });
});

app.listen(PORT, () => console.log(`server runs on port ${PORT}`));
