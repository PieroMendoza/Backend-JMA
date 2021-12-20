'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var routesAuth = require('./routes/usuario');
var routesPersona = require('./routes/persona');
var routesVenta = require('./routes/venta');

var application = express();

application.use(bodyParser.urlencoded({extended:false}));
application.use(bodyParser.json());

application.use('/api', routesAuth);
application.use('/api', routesPersona);
application.use('/api', routesVenta);


application.get('/health-check', function(req, resp){
    resp.status(200).send({mensaje:"OK"});
});

module.exports = application;