const path = require('path');
const fs = require('fs');
const http = require('http');
const express = require('express');

const app = express();
app.use(express.static('public'))

const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

// rawData = fs.readFileSync(filePath, 'utf8');



app.listen(PORT);
console.log("Listening at port 8080")

