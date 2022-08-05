const { Router } = require('express');
const authMiddleware = require('../../middleware/auth');
const { 
    register, 
    login, 
    viewGroceries, 
    viewItem, 
    updateProfile, 
    reviewGrocery, 
    createOrder, 
    addToOrder, 
    viewCart, 
    findNearbyGroceries, 
    removeFromOrder 
} = require('./controller/user');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/get_groceries', authMiddleware(), viewGroceries);
router.get('/get_item', authMiddleware(), viewItem);
router.post('/update_profile', authMiddleware(), updateProfile);
router.post('/review_grocery', authMiddleware(), reviewGrocery);
router.post('/create_order', authMiddleware(), createOrder);
router.post('/add_to_order', authMiddleware(), addToOrder);
router.get('/view_cart', authMiddleware(), viewCart);
router.post('/find_nearby_groceries', authMiddleware(), findNearbyGroceries);
router.post('/remove_from_order', authMiddleware(), removeFromOrder);

module.exports = router;