const { Router } = require('express');
const { auth, register, login, addCategory, addItem, removeItem, updateItem, updateAccount, viewStock, viewItem, manageOrder, viewGrocery,registerByOCR, newConversation, getConversation } = require('./controller/grocery');
const middleware = require('../../middleware/auth');

const router = Router();

router.post('/auth', middleware(), (req, res) => auth (req, res));
router.post('/register', register);
router.post('/register_OCR', registerByOCR);
router.post('/login', login);
router.post('/new_conversation', newConversation);
router.get('/get_conversation', getConversation);
router.post('/add_category', middleware(), addCategory);
router.post('/add_item', middleware(), addItem);
router.post('/remove_item', middleware(), removeItem);
router.post('/update_item', middleware(), updateItem);
router.post('/update_account', middleware(), updateAccount);
router.get('/view_stock', middleware(), viewStock);
router.get('/view_item', middleware(), viewItem);
router.get('/manage_order', middleware(), manageOrder);
router.get('/view_grocery', middleware(), viewGrocery);

module.exports = router;
