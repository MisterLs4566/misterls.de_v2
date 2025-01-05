import express from 'express';
import path from 'path';

const app = express();

// API-Routen hier definieren

// Serve React app
app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
