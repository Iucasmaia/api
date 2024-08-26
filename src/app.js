require('dotenv').config();
const express = require('express');

// CONTROLLERS
const DownloadController = require('./controllers/DownloadController');

const app = express();

app.use(express.json());

app.use('/api/v1/download', DownloadController);

const PORT = process.env.API_PORT || 80

app.listen(PORT, () => {
    console.log('[API] Server is running on PORT ' + PORT);
});