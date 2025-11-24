// Import Express.js framework
const express = require('express');

// Create Express application instance
const app = express();

// Define port with environment variable fallback
const PORT = process.env.PORT || 3000;

// Route handler for "Hello world" endpoint
app.get('/hello', (req, res) => {
  res.status(200).send('Hello world');
});

// Route handler for "Good evening" endpoint
app.get('/evening', (req, res) => {
  res.status(200).send('Good evening');
});

// Optional: Root route for server status check
app.get('/', (req, res) => {
  res.status(200).send('Server is running. Try /hello or /evening endpoints.');
});

// Start server and listen on specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/hello`);
  console.log(`Try: http://localhost:${PORT}/evening`);
});
