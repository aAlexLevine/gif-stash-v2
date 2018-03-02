let request = require('request')
//let config = require('../config.js').TOKEN;


getGifs =(term, callback) => {
    let options = {
        url: `https://api.tenor.com/v1/search?q=${term}&key=LIVDSRZULELA&limit=8&anon_id=3a76e56901d740da9e59ffb22b988242`
        ,
        headers: {
            'User-Agent': 'request'
            // 'Authorization' : `token ${config}`
        }
    }
    request(options, function(err, response, body) {
        if(err){
            console.log(err)
        } else {
            callback(JSON.parse(body))
        }
    })
}

module.exports.getGifs = getGifs