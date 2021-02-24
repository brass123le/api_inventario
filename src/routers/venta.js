const router = require('express-promise-router')();
const { add_ventas, update_ventas, delete_ventas, get_ventas, get_id_ventas } = require('../controllers/venta');


router.get('/', get_ventas);
router.post('/', add_ventas);
router.put('/:id', update_ventas);
router.delete('/:id', delete_ventas);
router.get('/:id', get_id_ventas);





module.exports = router 