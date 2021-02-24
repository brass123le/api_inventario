const sequelize = require('sequelize');
const db = require('../data/db');
const { v4 } = require('uuid');

const SchemaUsuario = db.define('usuario', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: v4()
    },
    rol: {
        type: sequelize.STRING
    },
    nombre: {
        type: sequelize.STRING
    },
    tipo_documento: {
        type: sequelize.STRING
    },
    direccion: {
        type: sequelize.STRING
    },
    telefono: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING(60)
    },


})

module.exports = SchemaUsuario