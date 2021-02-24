const { request, response } = require("express")
const { asyncHandler } = require("../middleware/asyncHandler")
const models = require("../models")

module.exports = {
    add_persona: asyncHandler(async (req = request, res = response, next) => {

        const persona = await models.SchemaPersona.create(req.body)


        res.status(200).json(persona)
    }),
    update_persona: asyncHandler(async (req = request, res = response, next) => {
        const persona = await models.SchemaPersona.findOne({ where: { id: req.params.id } })
        if (!persona) {
            return next(new Error('persona no existe'))

        }


        if (req.body.nombre) {
            persona.nombre = req.body.nombre

        }
        if (req.body.tipo_persona) {
            persona.tipo_persona = req.body.tipo_persona


        }
        if (req.body.direccion) {
            persona.direccion = req.body.direccion


        }
        if (req.body.telefono) {
            persona.telefono = req.body.telefono


        }
        if (req.body.email) {
            persona.email = req.body.email


        }

        await persona.save()




        res.status(200).json(persona)
    }),
    delete_persona: asyncHandler(async (req = request, res = response, next) => {
        const persona = await models.SchemaPersona.findOne({ where: { id: req.params.id } })
        if (!persona) {
            return next(new Error('persona no existe'))

        }
        persona.destroy()
        res.status(200).json(persona)
    }),
    get_id_persona: asyncHandler(async (req = request, res = response, next) => {
        const persona = await models.SchemaPersona.findOne({ where: { id: req.params.id } })
        if (!persona) {
            return next(new Error('persona no existe'))

        }
        res.status(200).json(persona)
    }),
    get_persona: asyncHandler(async (req = request, res = responlse, next) => {
        const persona = await models.SchemaPersona.findAll({})
        res.status(200).json(persona)

    }),
}