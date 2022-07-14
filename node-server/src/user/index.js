const { Router } = require('express');
const { register, login, get, auth, viewGroceries, viewItem, updateProfile, reviewGrocery, createOrder, addToOrder, viewCart, findNearbyGroceries } = require('./controller/user');
const middleware = require('../../middleware/auth');

const router = Router();

router.post('/auth', middleware(), (req, res) => auth (req, res));
router.post('/register', register);
router.post('/login', login);
router.get('/get_users', get);
router.get('/get_groceries', viewGroceries);
router.get('/get_item', viewItem);
router.post('/update_profile', middleware(), updateProfile);
router.post('/review_grocery', middleware(), reviewGrocery);
router.post('/create_order', middleware(), createOrder);
router.post('/add_to_order', middleware(), addToOrder);
router.get('/view_cart', middleware(), viewCart);
router.post('/find_nearby_groceries', findNearbyGroceries);

module.exports = router;