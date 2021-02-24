const router = require('express-promise-router')();
const { add_ingreso, update_ingreso, delete_ingreso, get_ingreso, get_id_ingreso } = require('../controllers/ingreso');


router.get('/', get_ingreso);
router.post('/', add_ingreso);
router.put('/:id', update_ingreso);
router.delete('/:id', delete_ingreso);
router.get('/:id', get_id_ingreso);





module.exports = router 