
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Lab 01 - Node.js and Express!');
});

// Time route
app.get('/time', (req, res) => {
    const currentTime = new Date();

    res.send(`
        <h1>Current Time</h1>
        <h2>${currentTime.toLocaleString()}</h2>
    `);
});

// About route
app.get('/about', (req, res) => {
    res.send(`
        <h1>About Me</h1>
        <p>Name: BUSSA ARCHANA</p>
        <p>Section: CSE-2A</p>
    `);
});

// 404 Not Found route
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Not Found</h1>
        <p>The requested page does not exist.</p>
    `);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
