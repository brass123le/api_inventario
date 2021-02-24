const SchemaArticulo = require("./Articulo")
const SchemaCategoria = require("./Categoria")
const DetallesIngreso = require("./DetallesIngreso")
const DetallesVenta = require("./DetallesVenta")
const SchemaIngreso = require("./Ingreso")
const SchemaPersona = require("./Persona")
const SchemaUsuario = require("./Usuario")
const SchemaVentas = require("./Venta")



SchemaPersona.hasMany(SchemaVentas)
SchemaVentas.belongsTo(SchemaPersona)

SchemaVentas.hasMany(DetallesVenta)
DetallesVenta.belongsTo(SchemaVentas)



SchemaPersona.hasMany(SchemaIngreso)
SchemaIngreso.belongsTo(SchemaPersona)

SchemaIngreso.hasMany(DetallesIngreso)
DetallesIngreso.belongsTo(SchemaIngreso)



SchemaCategoria.hasOne(SchemaArticulo)
SchemaArticulo.belongsTo(SchemaCategoria)





module.exports = {
    SchemaArticulo,
    SchemaCategoria,
    SchemaPersona,
    SchemaUsuario,
    SchemaVentas,
    SchemaIngreso,
    DetallesIngreso,
    DetallesVenta


}