var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var app = express();
var mysql = require('mysql');
//const path = require('path');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.listen(process.env.PORT || 8080);

console.log('Iniciando en: http://localhost:8080');

var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '',
database : 'entel_ranco'
});

connection.connect(function(err) {
if (err) {
    console.error('error connecting: ' + err.stack);
    return;
}

console.log('connected as id ' + connection.threadId);
});

app.get('/posts', function(req, res) {
    console.log("Se ha recibido información desde front end!");
})

app.get('/createuser', function(req, res){
    var post=req.body;
    console.log(post)
    //console.log(post.email, post.id, post.password, post.date_create);
})
