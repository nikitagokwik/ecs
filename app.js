// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();
const port = 3000; // You can choose any available port

// Define a simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, this is a simple Express application!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
