const express = require('express');

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.static('./public'));

app.get('/newproject', function(request, response) {
  console.log('new project');
  response.sendFile('public/new.html', {root: '.'});
});

app.get('*', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log('Portfolio is being served at localhost:7000');
});
