const { Router } = require('express');
const { register, login, getAllUsers } = require('./controller/user');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/get_all_users', getAllUsers);

module.exports = router;