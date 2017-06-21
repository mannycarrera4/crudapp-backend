/**
 * Backend database connection
 */

var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crudapp'
})

connection.connect()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/climbing-route', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  connection.query('SELECT * FROM climbing_route', function(err, result) {
    res.json(result)

  })
});

router.options('/climbing-route/:id', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.json({success:'success'})
});

router.get('/climbing-route/:id', function(req, res, next) {
  connection.query('SELECT * FROM climbing_route where id = ' + req.params['id'], function(err, result) {
    res.json(result[0])
  })
});

router.options('/climbing-route', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.json({success:'success'})
});

router.post('/climbing-route', function(req, res, next) {
  console.log('post request', req.body.name)
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  var insertValues = `${req.body.name}, ${req.body.location}, ${req.body.difficulty}`
  connection.query('INSERT INTO climbing_route (name, location, difficulty) VALUES ("' + insertValues + '")', function(err, result) {
    res.json(result)
  })
});

router.delete('/climbing-route/:id', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  connection.query('DELETE FROM climbing_route WHERE id =' + req.params['id'], function(err, result) {
    res.json(result)
  })
});

router.put('/climbing-route/:id', function(req, res, next) {
  console.log('req', req.body)
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  connection.query('UPDATE climbing_route SET name="'+ req.body.name + '" where id =' + req.params['id'], function(err, result) {
    res.json(result)
  })
});

// app.use('/api', router);

// router.post('/climbing-route', function(req, res, next) {
//   routeName = 'test123'
//   connection.connect(function(err) {
//     console.log('climbing route')
//     connection.query('INSERT INTO climbing (routeName) VALUES ("' + routeName + '")' , function(err, result) {
//       res.json({"success": true})
//     })
//
//   })
//   // console.warn(res)
//   // res.json({"test":"hey hey"});
// });

module.exports = router;
