const sequelize = require('sequelize');
const db = require('../data/db');
const { v4 } = require('uuid');

const DetallesVenta = db.define('detalles_ventas', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: v4()
    },
    articulo: {
        type: sequelize.STRING
    },
    cantidad: {
        type: sequelize.NUMBER
    },
    precio: {
        type: sequelize.NUMBER
    },
    descuento: {
        type: sequelize.NUMBER
    },

})

module.exports = DetallesVenta

