const { asyncHandler } = require("../middleware/asyncHandler");
const { request, response } = require("express");
const { v4 } = require('uuid');
const models = require("../models");
require('colors');


module.exports = {
    add_articulo: asyncHandler(async (req = request, res = response, next) => {
        const contenctBody = { ...req.body, id: v4() }

        const articulo = await models.SchemaArticulo.create(contenctBody)

        res.status(200).json(articulo)
    }),
    update_articulo: asyncHandler(async (req = request, res = response, next) => {
        const articulo = await models.SchemaArticulo.findOne({ where: { id: req.params.id } })
        if (!articulo) {
            return next(new Error('Articulo no existe'))

        }
        if (req.body.codigo) {
            articulo.codigo = req.body.codigo

        }
        if (req.body.nombre) {
            articulo.nombre = req.body.nombre

        }
        if (req.body.descripcion) {
            articulo.descripcion = req.body.descripcion
        }
        if (req.body.precio_venta) {
            articulo.precio_venta = req.body.precio_venta

        }
        if (req.body.stock) {
            articulo.stock = req.body.stock

        }
        if (req.body.categoriumId) {
            articulo.categoriumId = req.body.categoriumId

        }
        await articulo.save()
        res.status(200).json(articulo)
    }),
    delete_articulo: asyncHandler(async (req = request, res = response, next) => {
        const articulo = await models.SchemaArticulo.findOne({ where: { id: req.params.id } })
        if (!articulo) {
            return next(new Error('Articulo no existe'))

        }
        await articulo.destroy()

        res.status(200).json(articulo)
    }),
    get_id_articulo: asyncHandler(async (req = request, res = response, next) => {
        const articulo = await models.SchemaArticulo.findOne({
            where: { id: req.params.id }, include: {
                model: models.SchemaCategoria,
                attributes: ["id",
                    "nombre",
                    "descripcion"]
            },
            attributes: [
                "id",
                "codigo",
                "nombre",
                "descripcion",
                "precio_venta",
                "stock",
            ]
        })
        if (!articulo) {
            return next(new Error('Articulo no existe'))

        }
        res.status(200).json(articulo)
    }),
    get_articulo: asyncHandler(async (req = request, res = responlse, next) => {
        const articulo = await models.SchemaArticulo.findAll({
            include: {
                model: models.SchemaCategoria,
                attributes: ["id",
                    "nombre",
                    "descripcion"]
            },
            attributes: [
                "id",
                "codigo",
                "nombre",
                "descripcion",
                "precio_venta",
                "stock",
            ]
        })
        res.status(200).json(articulo)

    }),
}