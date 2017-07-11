var express = require('express');
var router = express.Router();
var middleware = require('../middleware/middleware.js')
var app = require('../app.js')
var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({ extended:true });
var passport = require('passport');
var User = require ('../models/users.js')
var Favorites= require('../models/Favorites.js')


/* GET users listing. */

// Formulario de login
router.get('/login', function(req, res) {
  res.render('login');
});
// Procesa el login, usamos authenticate de passport como middleware.

router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log('logeado');
  res.send({estado:'logeado', username:req.body.username});
});

router.get('/logout', function(req, res, next) {
  res.send('logout');
});


router.get('/register', function(req, res, next) {
  res.send('register');
});

// Procesa el registro,
router.post('/register', function (req, res) {
  console.log(req.body);
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.send('hubo un error durante el registro');
    }
    res.send({estado:'registrado', usuario:user.username});
  });
});


//checkAuth

router.get('/checkauth', function(req, res) {
console.log('COOKIE',req.cookies)
  console.log('USER',req.user)
  if (req.isAuthenticated()) {
    return res.send({username:req.user.username, estado:'logeado'});
  }
  res.send({estado:'no esta logeado'});

});

// Publica
router.get('/publica', function(req, res) {
  res.render('publica');
});

// Privada
// Usamos el middleware que creamos arriba
router.get('/privada', middleware, function(req, res) {
  res.render('privada');
});

router.get('/favoritos', function(req, res){
  User.findById(req.user._id).populate('favorites').exec(function(err, usuario){
    if (err) {
      console.log(err)
      res.send(err)

    }else{
      res.send(usuario.favorites)
    }
  })
})

router.post('/favoritos', function(req, res){
  Favorites.create(req.body.movie, function(err, movie) {
    if (err) {
      res.render(error)
    }else {
      User.findByIdAndUpdate(
        req.user._id,
        { $push: {"favorites": movie._id } },
        function(err, user) {
          console.log(movie)
          res.send(movie)
        }
      )
    }
  } )
})
module.exports = router;
