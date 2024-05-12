//npm install express express-validator body-parser

const express = require('express');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Validation middleware for POST /users route
const validateUser = [
    // Validate name field
    body('name').notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
    // Validate email field
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    // Check for validation errors
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next(); // Proceed to the next middleware if validation passes
    }
];

// POST route to create a new user
app.post('/users', validateUser, (req, res) => {
    // If the request payload passes validation, create the user
    const { name, email } = req.body;
    // Create user logic...
    res.status(201).json({ message: 'User created successfully', user: { name, email } });
});

// Error handling middleware for validation errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        // Handle JSON parse error
        return res.status(400).json({ message: 'Invalid JSON payload' });
    }
    next(err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
