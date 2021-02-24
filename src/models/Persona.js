const sequelize = require('sequelize');
const db = require('../data/db');
const { v4 } = require('uuid');

const SchemaPersona = db.define('persona', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: v4()
    },
    tipo_persona: {
        type: sequelize.STRING
    },
    nombre:{
        type: sequelize.STRING
    },
    tipo_documento:{
        type: sequelize.STRING
    },
    direccion:{
        type: sequelize.STRING
    },
    telefono:{
        type: sequelize.STRING
    },
    email:{
        type: sequelize.STRING
    },




})

module.exports = SchemaPersona