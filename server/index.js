var express = require('express');
var bodyParser = require('body-parser');
let axios = require('axios')
let getFromTenor = require('./tenorHelpers.js')

// var db = require('../database-mysql');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())

app.post('/gifs', function (req, res) {
    console.log('term coming through on server',req.body.term)
    let term = req.body.term
    getFromTenor.getGifs(term, function(data){
        res.send(data)
    })
console.log('server side post for gifs, data')
});
// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});