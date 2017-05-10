'use strict';
const express = require('express');

const app = express();
app.use(express.static(__dirname));

app.get('/home', (req, res, next) => {
    res.sendFile(__dirname + '/app/views/index.html');
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});