const sequelize = require('sequelize');
const db = require('../data/db');
const { v4 } = require('uuid');

const SchemaIngreso = db.define('ingreso', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: v4()
    },
    tipo_comprobante: {
        type: sequelize.STRING
    },
    serie_comprobante: {
        type: sequelize.STRING
    },
    num_comprobante: {
        type: sequelize.STRING
    },
    impuesto: {
        type: sequelize.NUMBER
    },
    total: {
        type: sequelize.NUMBER
    },


})

module.exports = SchemaIngreso