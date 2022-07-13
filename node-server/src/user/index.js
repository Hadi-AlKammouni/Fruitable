const { Router } = require('express');
const { register, login, get, authUser, viewGroceries, viewItem, updateProfile, reviewGrocery, createOrder, addElement, viewCart, viewElement, findNearbyGroceries } = require('./controller/user');
const userMiddleware = require('../../middleware/auth');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/get_users', get);
router.post('/auth_user', userMiddleware(), (req, res) => authUser (req, res));
router.get('/get_groceries', viewGroceries);
router.get('/get_item', viewItem);
router.post('/update_profile', updateProfile);
router.post('/review_grocery', reviewGrocery);
router.post('/create_order', createOrder);
router.post('/add_element', addElement);
router.get('/view_cart', viewCart);
router.get('/view_element', viewElement);
router.post('/find_nearby_groceries', findNearbyGroceries);

module.exports = router;