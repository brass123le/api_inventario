const router = require('express-promise-router')();
const { add_categoria, update_categoria, delete_categoria, get_categoria, get_id_categoria } = require('../controllers/categoria');


router.get('/', get_categoria);
router.post('/', add_categoria);


router.put('/:id', update_categoria);
router.delete('/:id', delete_categoria);
router.get('/:id', get_id_categoria);





module.exports = router 