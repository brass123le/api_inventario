const router = require('express-promise-router')();
const artuculo = require('./articulo');
const categoria = require('./categoria');
const ingreso = require('./ingreso');
const persona = require('./persona');
const venta = require('./venta');



router.use('/articulo', artuculo);
router.use('/categoria', categoria);
router.use('/ingreso', ingreso);
router.use('/persona', persona);
router.use('/venta', venta);

module.exports = router 