const { Router } = require('express');
const { register, login, addCategory, add } = require('./controller/grocery');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/add_category', addCategory);
router.post('/add_grocery', add);

module.exports = router;
