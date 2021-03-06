var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var config= {
    user : 'mohammedrafi0709' ,
    database : 'mohammedrafi0709' ,
    host : 'db.imad.hasura-app.io' ,
    port: 5432 ,
    password : process.env.DB_PASSWORD
};



var pool = new Pool(config);

app.get('/test', function (req, res) {
    
    pool.query('SELECT * FROM "User"', function (err, result) {
        if (err) {
            res.status(500).send(err.toString());
                }
                else {
                    req.send(JSON.stringify(result.rows));
                }
    });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
  });
app.get('/wishes', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'Wishes.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
