const { Router } = require('express');
const { register, login, get } = require('./controller/user');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/get_users', get);

module.exports = router;