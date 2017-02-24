'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 7000;
const app = express();
const conString = 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/new', (request, response) => response.sendFile('new.html', {root: './public'}));
app.get('/home', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/projects', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/github', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/contact', (request, response) => response.sendFile('index.html', {root: './public'}));


app.listen(PORT, function() {
  console.log('Portfolio is being served at localhost:7000');
});
