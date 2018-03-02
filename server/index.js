const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const db = require('../database-mysql');
let getFromTenor = require('./tenorHelpers.js')


const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())

app.post('/gifs', function (req, res) {
    let term = req.body.term
    getFromTenor.getGifs(term, function(data){
        res.send(data)
    })
    console.log('server side post for gifs, data')
});

app.get('/myStash', function (req, res) {
    db.selectAll(function(err, data) {
        if (err) {
            console.log(err)
            res.sendStatus(500);
        } else {
            res.send(JSON.stringify(data))
        }
    })
})

app.post('/myStash', function (req, res) {
    let url = req.body.url
    db.save(url, function(err, data) {
        if (err) {
            console.log(err)
            res.sendStatus(500);
        } else {
            res.end('')
        }
    })
})

app.delete('/myStash', function (req, res) {
    let url = req.body.url
    db.remove(url, function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.end()
        }
    })
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});