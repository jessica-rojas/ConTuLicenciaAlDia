const express= require('express')
const session = require('express-session');
var path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


const app = express();
var bodyParser = require("body-parser");
//var mongoose = require("mongoose");
  //methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.set(express.static(path.join(__dirname, 'public/index.html')));
//const mongo_uri = ('mongodb://localhost:27017/licenciasdb');

//mongoose.connect(mongo_uri, function(err){
//  if (err){
//    throw err;
//  }else {
//    console.log('Successfully connected to ${mongo_uri}');
//  }
//});
// Configurar cabeceras y cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-RequestedWith, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
app.use(require('./routers/router'));



//leer datos de un formulario
app.use(express.urlencoded({extended: false}));


app.set('view engine', 'ejs');
//login 
app.get(('/users/signin'), function (req, res) {
  return res.sendFile(path.join(__dirname, 'users/signin.hbs'));
      //sí ya iniciamos, dar vista unica
    //si el login sale mal, redirecion
  });

app.get('/login', function (req, res) {
    //mostrar formulario de login
    res.render(index);
  },

app.post('/login', function (req, res) {
    //recibir credenciales e inicior sesion 
  }))




  module.exports = app;
