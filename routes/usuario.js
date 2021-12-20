'use strict'

var express = require('express');
var authcontroller = require('../controllers/usuario');
var token = require('../helpers/token');

var application = express.Router();

//application.get('/pruebas-controlador', authcontroller.pruebas);


application.get('/controlador', token.validarTokenDeUsuario , authcontroller.pruebaController);

application.post('/usuario/create', authcontroller.registrarUsuario);

application.post('/usuario/login', authcontroller.validarPasswordDeUsuario);

application.get('/usuario/all', authcontroller.findAllUsuarios);

module.exports = application;