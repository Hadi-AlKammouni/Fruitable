const { Router } = require('express');
const { register, login, add } = require('./controller/grocery');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/add_grocery', add);

module.exports = router;
