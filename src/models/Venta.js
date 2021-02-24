const sequelize = require('sequelize');
const db = require('../data/db');
const { v4 } = require('uuid');

const SchemaVentas = db.define('venta', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: v4()
    },

    tipo_comprobante: {
        type: sequelize.STRING(20)
    },
    serie_comprobante: {
        type: sequelize.STRING
    },
    num_comprobante: {
        type: sequelize.STRING(10)
    },
    impuesto: {
        type: sequelize.NUMBER
    },
    total: {
        type: sequelize.NUMBER
    },





})

module.exports = SchemaVentas