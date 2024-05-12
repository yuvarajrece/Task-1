const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET route
app.get('/', (req, res) => {
    res.send('This is a GET request!');
});

// POST route
app.post('/', (req, res) => {
    const { message } = req.body;
    res.send(`Received POST request with message: ${message}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
