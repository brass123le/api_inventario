const sequelize = require('sequelize');
const db = require('../data/db');
const { v4 } = require('uuid');

const SchemaCategoria = db.define('categoria', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: v4()
    },
    nombre: {
        type: sequelize.STRING(64),
        unique: true
    },
    descripcion: {
        type: sequelize.TEXT
    },



})

module.exports = SchemaCategoria