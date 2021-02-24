const router = require('express-promise-router')();
const { add_articulo, update_articulo, delete_articulo, get_articulo, get_id_articulo } = require('../controllers/articulo');


router.get('/', get_articulo);
router.post('/', add_articulo);
router.put('/:id', update_articulo);
router.delete('/:id', delete_articulo);
router.get('/:id', get_id_articulo);





module.exports = router 