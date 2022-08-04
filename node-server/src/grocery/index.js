const { Router } = require('express');
const { auth, register, login, addCategory, addItem, removeItem, updateItem, updateAccount, viewStock, viewItem, manageOrder, viewGrocery,registerByOCR, newConversation, getConversation, addMessage, getMessage } = require('./controller/grocery');
const authMiddleware = require('../../middleware/auth');

const router = Router();

router.post('/auth', authMiddleware(), (req, res) => auth (req, res));
router.post('/register', register);
router.post('/register_OCR', registerByOCR);
router.post('/login', login);
router.post('/new_conversation', authMiddleware(), newConversation);
router.get('/get_conversation', authMiddleware(), getConversation);
router.post('/add_message', authMiddleware(), addMessage);
router.get('/get_message', authMiddleware(),  getMessage);
router.post('/add_category', authMiddleware(), addCategory);
router.post('/add_item', authMiddleware(), addItem);
router.post('/remove_item', authMiddleware(), removeItem);
router.post('/update_item', authMiddleware(), updateItem);
router.post('/update_account', authMiddleware(), updateAccount);
router.get('/view_stock', authMiddleware(), viewStock);
router.get('/view_item', authMiddleware(), viewItem);
router.get('/manage_order', authMiddleware(), manageOrder);
router.get('/view_grocery', authMiddleware(), viewGrocery);

module.exports = router;
