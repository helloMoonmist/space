const express = require('express');
const fs = require('fs');

const app = express();

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Serve the stylesdark.css file when /dark-mode endpoint is requested
app.get('/dark-mode', (req, res) => {
    fs.readFile(__dirname + '/stylesdark.css', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading stylesdark.css file');
            return;
        }
        res.set('Content-Type', 'text/css');
        res.send(data);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});