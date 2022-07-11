const { Router } = require('express');
const { register, login, addCategory, addItem, removeItem, updateItem, updateAccount, viewStock, viewItem, viewCategories, add, manageOrder, viewOrderElement } = require('./controller/grocery');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/add_category', addCategory);
router.post('/add_item', addItem);
router.post('/remove_item', removeItem);
router.post('/update_item', updateItem);
router.post('/update_account', updateAccount);
router.get('/view_stock', viewStock);
router.get('/view_item', viewItem);
router.get('/view_categories', viewCategories);
router.post('/add_grocery', add);
router.get('/manage_order', manageOrder);
router.get('/view_order_element', viewOrderElement);

module.exports = router;
