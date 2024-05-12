//npm install node-cron

const cron = require('node-cron');

// Define the cron job to run every day at 7:00 AM
const task = cron.schedule('0 7 * * *', () => {
    // Simulate sending email notifications
    console.log('Sending email notifications...');
}, {
    scheduled: true, // Run the task immediately
    timezone: 'India/Chennai' 
});


task.start();

// Log a message when the cron job is started
console.log('Cron job scheduled to run every day at 7:00 AM.');
