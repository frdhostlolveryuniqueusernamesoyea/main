const express = require('express');
const path = require('path');
const app = express();

app.get('/q&a', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'pages', 'q&a.html'));
});

module.exports = app;
