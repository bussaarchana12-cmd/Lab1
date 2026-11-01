
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// GET /
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Lab 01 - Node.js and Express!');
});

// GET /about
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Your Name',
        section: 'Your Section'
    });
});

// GET /time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// 404 for unknown paths
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Start Express server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express server running on port ${PORT}`);
});
