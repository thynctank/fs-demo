const express = require('express');
var accumulator = require('./accumulator');
var app = express();

app.use(express.static('client'));

app.get('/init', (req, res) => {
  accumulator.init();
  res.send('initialized to 0');
});

app.get('/add/:val', (req, res) => {
  if (!req.params.val) {
    res.send('Error: No val passed');
  } else {
    try {
      accumulator.add(parseInt(req.params.val, 10));
      res.send('added ' + req.params.val);
    } catch (e) {
      res.send('Error: ' + e);
    }
  }
});

app.get('/total', (req, res) => {
  res.send('this is the total: ' + accumulator.total());
});

app.get('/fib', (req, res) => {
  var fibVals = [1, 1];
  var nextVal;
  while (fibVals.length < 30) {
    nextVal = fibVals[fibVals.length - 1] + fibVals[fibVals.length - 2];
    fibVals.push(nextVal);
  }
  res.json(fibVals);
});

accumulator.init();
app.listen(3000);
