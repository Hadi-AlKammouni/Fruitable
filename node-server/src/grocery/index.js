const { Router } = require('express');
const { register, add } = require('./controller/grocery');

const router = Router();

router.post('/register', register);
router.post('/add_grocery', add);

module.exports = router;
