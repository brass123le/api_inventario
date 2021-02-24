const sequelize = require('sequelize');
const db = require('../data/db');
const { v4 } = require('uuid');

const SchemaArticulo = db.define('articulo', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: v4()
    },
    codigo: {
        type: sequelize.STRING(64)
    },
    nombre: {
        type: sequelize.STRING(64),
        unique: true
    },
    descripcion: {
        type: sequelize.TEXT
    },
    precio_venta: {
        type: sequelize.NUMBER

    },
    stock: {
        type: sequelize.NUMBER

    }


})

module.exports = SchemaArticulo