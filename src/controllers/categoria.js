const { request, response } = require("express")
const { asyncHandler } = require("../middleware/asyncHandler")
const models = require("../models")
const { v4 } = require('uuid');
require('colors')



module.exports = {


    add_categoria: asyncHandler(async (req = request, res = response, next) => {

        const categoriaBody = { ...req.body, id: v4() }

        const categoria = await models.SchemaCategoria.create(categoriaBody)


        res.status(200).json(categoria)
    }),
    update_categoria: asyncHandler(async (req = request, res = response, next) => {
        const categoria = await models.SchemaCategoria.findOne({ where: { id: req.params.id } })
        if (!categoria) {
            return next(new Error('categoria no existe'))

        }
        if (req.body.descripcion) {
            categoria.descripcion = req.body.descripcion

        }

        if (req.body.nombre) {
            categoria.nombre = req.body.nombre

        }
        await categoria.save()
        res.status(200).json(categoria)
    }),
    delete_categoria: asyncHandler(async (req = request, res = response, next) => {
        const categoria = await models.SchemaCategoria.findOne({ where: { id: req.params.id } })
        if (!categoria) {
            return next(new Error('categoria no existe'))

        }
        await categoria.destroy()

        res.status(200).json(categoria)
    }),
    get_id_categoria: asyncHandler(async (req = request, res = response, next) => {
        const categoria = await models.SchemaCategoria.findOne({ where: { id: req.params.id } })
        if (!categoria) {
            return next(new Error('categoria no existe'))

        }
        res.status(200).json(categoria)
    }),
    get_categoria: asyncHandler(async (req = request, res = responlse, next) => {
        const categoria = await models.SchemaCategoria.findAll({})
        res.status(200).json(categoria)

    }),
}