const { Router } = require('express');
const authMiddleware = require('../../middleware/auth');
const { 
    registerByOCR,
    login, 
    addItem, 
    removeItem, 
    updateItem, 
    updateAccount, 
    viewStock, 
    viewItem, 
    manageOrder, 
    viewGrocery, 
    newConversation, 
    getConversation, 
    addMessage, 
    getMessage,
} = require('./controller/grocery');

const router = Router();

router.post('/register_OCR', registerByOCR);
router.post('/login', login);
router.post('/add_item', authMiddleware(), addItem);
router.post('/remove_item', authMiddleware(), removeItem);
router.post('/update_item', authMiddleware(), updateItem);
router.post('/update_account', authMiddleware(), updateAccount);
router.get('/view_stock', authMiddleware(), viewStock);
router.get('/view_item', authMiddleware(), viewItem);
router.get('/manage_order', authMiddleware(), manageOrder);
router.get('/view_grocery', authMiddleware(), viewGrocery);
router.post('/new_conversation', authMiddleware(), newConversation);
router.get('/get_conversation', authMiddleware(), getConversation);
router.post('/add_message', authMiddleware(), addMessage);
router.get('/get_message', authMiddleware(),  getMessage);

module.exports = router;
