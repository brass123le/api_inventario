const { response, request } = require("express")
const { asyncHandler } = require("../middleware/asyncHandler")
const { map } = require('lodash');
const models = require("../models")
const { v4 } = require('uuid');
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
    articulo.stock = stock
    await articulo.save()
}



module.exports = {
    add_ingreso: asyncHandler(async (req = request, res = response, next) => {

        if (!req.body.array_detalles) {
            return next(new Error('Los detales de la compra estan vacios '))

        }
        const { tipo_comprobante,
            serie_comprobante,
            num_comprobante,
            impuesto,
            total,
            personaId, } = req.body


        const ig = await models.SchemaIngreso.create({
            tipo_comprobante,
            serie_comprobante,
            num_comprobante,
            impuesto,
            total,
            personaId,

        })

        const detalle = map(req.body.array_detalles, detalles => {
            detalles.ingresoId = ig.id
            detalles.id = v4()
            aumentarStock(detalles)
            return detalles
        })

        await models.DetallesIngreso.bulkCreate(detalle)

        const ingreso = await models.SchemaIngreso.findOne({
            where: { id: ig.id }, include: {
                model: models.DetallesIngreso
            }
        })

        res.status(200).json(ingreso)
    }),
    update_ingreso: asyncHandler(async (req = request, res = response, next) => {
        const ingreso = await models.SchemaIngreso.findOne({ where: { id: req.params.id } })
        res.status(200).json(ingreso)
    }),
    delete_ingreso: asyncHandler(async (req = request, res = response, next) => {
        const ingreso = await models.SchemaIngreso.findOne({ where: { id: req.params.id } })
        if (!ingreso) {
            return next(new Error('ingreso no existe'))

        }
        await ingreso.destroy()
        res.status(200).json(ingreso)
    }),
    get_id_ingreso: asyncHandler(async (req = request, res = response, next) => {
        const ingreso = await models.SchemaIngreso.findOne({
            where: { id: ig.id },
            include: {
                model: models.DetallesIngreso
            }
        })
        if (!ingreso) {
            return next(new Error('ingreso no existe'))

        }
        res.status(200).json(ingreso)
    }),
    get_ingreso: asyncHandler(async (req = request, res = responlse, next) => {
        const ingreso = await models.SchemaIngreso.findAll({
            include: {
                model: models.DetallesIngreso
            }
        })
        res.status(200).json(ingreso)

    }),
}