var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Welcome to bendozy.com More details coming soon');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
