const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/beyondGreen')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(() => console.error('Could not connect...'));

app.get('/', (req, res) => {
    res.send(`I'm working!`);
});

const port = process.env.PORT || 3011;
app.listen(port, () => console.log(`Listening on port ${port}...`));