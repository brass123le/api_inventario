const router = require('express-promise-router')();
const { add_persona, update_persona, delete_persona, get_persona, get_id_persona } = require('../controllers/persona');


router.get('/', get_persona);
router.post('/', add_persona);
router.put('/:id', update_persona);
router.delete('/:id', delete_persona);
router.get('/:id', get_id_persona);





module.exports = router 