const { Router } = require('express');
const { register, login, get, authUser, viewGroceries, viewItem, updateProfile, reviewGrocery, createOrder, addToOrder, viewCart, findNearbyGroceries } = require('./controller/user');
const userMiddleware = require('../../middleware/user_auth');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/get_users', get);
router.post('/auth_user', userMiddleware(), (req, res) => authUser (req, res));
router.get('/get_groceries', viewGroceries);
router.get('/get_item', viewItem);
router.post('/update_profile', userMiddleware(), updateProfile);
router.post('/review_grocery', userMiddleware(), reviewGrocery);
router.post('/create_order', userMiddleware(), createOrder);
router.post('/add_to_order', userMiddleware(), addToOrder);
router.get('/view_cart', userMiddleware(), viewCart);
router.post('/find_nearby_groceries', findNearbyGroceries);

module.exports = router;