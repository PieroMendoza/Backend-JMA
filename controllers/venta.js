'use strict'

var Venta = require('../models/venta');

function createVenta(req, resp){

    var newVenta = new Venta();

    var parametros = req.body;

    newVenta.nombres = parametros.nombres;
    newVenta.apellidos = parametros.apellidos;
    newVenta.pais = parametros.pais;
    newVenta.dni = parametros.dni;
    newVenta.departamento = parametros.departamento;
    newVenta.provincia = parametros.provincia;
    newVenta.tipoCalle = parametros.tipoCalle;
    newVenta.nombreCalle = parametros.nombreCalle;
    newVenta.celular = parametros.celular;
    newVenta.fecha = parametros.fecha;
    newVenta.usuarioId = parametros.usuarioId;

    newVenta.save(
        (err, ventaCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la venta."});
            }
            else{
                resp.status(200).send({savedVenta: ventaCreada});
            }
    });
}

function updateVenta(req, resp){

    var parametros = req.body;

    Venta.findByIdAndUpdate(parametros._id, {
        nombres: parametros.nombres,
        apellidos: parametros.apellidos,
        pais: parametros.pais,
        dni: parametros.dni,
        departamento: parametros.departamento,
        provincia: parametros.provincia,
        tipoCalle: parametros.tipoCalle,
        nombreCalle: parametros.nombreCalle,
        celular: parametros.celular,
        fecha: parametros.fecha,
        usuarioId: parametros.usuarioId
    }, function(err, ventaActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la venta."});
        }
        else{
            resp.status(200).send({updatedVenta: ventaActualizada});
        }

    }) ;


}

function deleteVenta(req, resp){

    var parametros = req.body;

    Venta.findByIdAndDelete(parametros._id, function(err, ventaEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la venta."});
        }
        else{
            resp.status(200).send({ventaDeleted: ventaEliminada});
        }
    }) ;

}

function findByIdVenta(req, resp){

    Venta.findById(req.params.id, (err, ventaEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la venta."});
        }
        else{
            resp.status(200).send({venta: ventaEncontrada});
        }
    });

}

function findAllVenta(req, resp){

    Venta.find({}, (err, ventasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({ventaList: ventasEcontradas});
        }
    });

}

module.exports = {
    createVenta,
    updateVenta,
    deleteVenta,
    findByIdVenta,
    findAllVenta
};
