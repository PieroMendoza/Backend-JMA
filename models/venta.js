'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VentaSchema = Schema({
    nombres: String,
    apellidos: String,
    pais: String,
    dni: String,
    departamento: String,
    provincia: String,
    tipoCalle: String,
    nombreCalle: String,
    celular: String,
    fecha: String,
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }   
});

module.exports = mongoose.model('Venta', VentaSchema);