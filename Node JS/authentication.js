const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const secretKey = 'secret_key'; // this to a secure secret key

// Sample user data (in-memory database)
const users = [
    { id: 1, name: 'Yuvaraj', email: 'yuvaraj@gmail.com' },
    { id: 2, name: 'Kumar', email: 'kumar@gmail.com' }
];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
};

// Middleware to authenticate user
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Protected route
app.get('/protected', authenticateUser, (req, res) => {
    // If the authentication middleware passes, the user is authenticated
    res.json({ message: 'You are authenticated', userId: req.userId });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
