const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


const fs = require('fs');


app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

app.listen(port,() => {
    console.log('API served at http://localhost:${port}')
});

 