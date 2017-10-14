var express = require('express');
var CodeBreaker = require('./code-breaker');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.get('/setsecret/:secret', function (req, res) {
  number = req.params.secret;
  CodeBreaker.setSecret(number);
  res.send({message: 'ok, let the game begin'});
});

app.get('/guess/:number', function (req, res) {
  number = req.params.number;
  res.send({result: CodeBreaker.codeBreaker(number)});
});

app.listen(app.get('port'), function () {
  console.log('NodeJs app listening on port', app.get('port'));
});

module.exports = app;
