
let mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'stash'
});

let selectAll = function(callback) {
  connection.query('SELECT * FROM storage', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let save = function(obj, callback) {
  connection.query(`INSERT INTO storage (name, tag) VALUES('${obj.url}', '${obj.tag}')`, function(error, results){
    if (error) {
      console.log(error)
    }
    callback(null, results)
    console.log('new gif saved')
  })
}

let remove = function(value, callback) {
  console.log('VALUE PARAM ON DB', value)
  connection.query(`DELETE FROM storage WHERE NAME = '${value}'`, function(err, results) {
    if (err) {
      console.log(error)
    }
    callback(null, results)
    console.log('number of gifs deleted' + results.affectedRows)
  })
}



module.exports.selectAll = selectAll;
module.exports.save = save;
module.exports.remove = remove;