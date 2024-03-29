const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;
const HOST = '127.0.0.1'; // Listen on all network interfaces

// Serve static files from the directory where your index.html is located
app.use(express.static(path.join(__dirname, '/')));

// Handle GET requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});

// Start the server
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
