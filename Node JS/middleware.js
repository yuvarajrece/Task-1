const express = require('express');
const app = express();
const PORT = 3000;

// Custom middleware function to log request details
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call the next middleware in the stack
};

// Registering the middleware globally for all routes
app.use(logRequest);

// Routes
app.get('/', (req, res) => {
    res.send('This is a GET request!');
});

app.post('/', (req, res) => {
    res.send('This is a POST request!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
