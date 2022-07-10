const { Router } = require('express');
const { register, login, get, authUser, viewGroceries, viewCategories, viewStock, updateProfile } = require('./controller/user');
const userMiddleware = require('../../middleware/auth');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/get_users', get);
router.post('/auth_user', userMiddleware(), (req, res) => authUser (req, res));
router.get('/get_groceries', viewGroceries);
router.get('/get_categories', viewCategories);
router.get('/get_stock', viewStock);
router.post('/update_profile', updateProfile);

module.exports = router;