const { asyncHandler } = require("../middleware/asyncHandler")
const models = require("../models")
const { map } = require('lodash');
const { v4 } = require('uuid');
const { request, response } = require("express");
require('colors')


const aumentarStock = async (detalles) => {
    const articulo = await models.SchemaArticulo.findOne({ where: detalles?.nombre })
    let stock = articulo.stock + detalles.cantidad
    articulo.stock = stock
    await articulo.save()


}

const reducirStock = async (detalles) => {
    const articulo = await models.SchemaArticulo.findOne({ where: detalles?.nombre })
    let stock = articulo.stock - detalles.cantidad
    console.log(stock)
    articulo.stock = stock
    await articulo.save()

}



module.exports = {
    add_ventas: asyncHandler(async (req = request, res = response, next) => {

        if (!req.body.array_detalles) {
            return next(new Error('Los detales de la compra estan vacios '))

        }
        const { tipo_comprobante,
            serie_comprobante,
            num_comprobante,
            impuesto,
            total,
            personaId, } = req.body


        const ig = await models.SchemaVentas.create({
            tipo_comprobante,
            serie_comprobante,
            num_comprobante,
            impuesto,
            total,
            personaId,

        })


        const detalle = map(req.body.array_detalles, detalles => {
            detalles.ventumId = ig.id
            detalles.id = v4()


            reducirStock(detalles)
            return detalles
        })

        await models.DetallesVenta.bulkCreate(detalle)



        const ventas = await models.SchemaVentas.findOne({
            where: { id: ig.id }, include: {
                model: models.DetallesVenta
            }
        })




        res.status(200).json(ventas)
    }),
    update_ventas: asyncHandler(async (req = request, res = response, next) => {
        const ventas = await models.SchemaVentas.findOne({ where: { id: req.params.id } })
        if (!ventas) {
            return next(new Error('ventas no existe'))

        }
        res.status(200).json(ventas)
    }),
    delete_ventas: asyncHandler(async (req = request, res = response, next) => {
        const ventas = await models.SchemaVentas.findOne({ where: { id: req.params.id } })
        if (!ventas) {
            return next(new Error('ventas no existe'))

        }
        res.status(200).json(ventas)
    }),
    get_id_ventas: asyncHandler(async (req = request, res = response, next) => {

        const ventas = await models.SchemaVentas.findOne({
            where: { id: req.params.id }, include: {
                model: models.DetallesVenta
            }
        })

        if (!ventas) {
            return next(new Error('ventas no existe'))

        }
        res.status(200).json(ventas)
    }),
    get_ventas: asyncHandler(async (req = request, res = responlse, next) => {
        const ventas = await models.SchemaVentas.findAll({
            include: {
                model: models.DetallesVenta
            }
        })
        res.status(200).json(ventas)

    }),
}