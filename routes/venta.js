'use strict'

var express = require('express');
var ventacontroller = require('../controllers/venta');
var token = require('../helpers/token');

var application = express.Router();

application.post('/venta/create', ventacontroller.createVenta);

application.put('/venta/edit', ventacontroller.updateVenta);

application.delete('/venta/delete', ventacontroller.deleteVenta);

application.get('/venta/all', ventacontroller.findAllVenta);

application.get('/venta/:id', ventacontroller.findByIdVenta);

module.exports = application;
