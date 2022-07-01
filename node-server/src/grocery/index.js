const { Router } = require('express');
const { add } = require('./controller/grocery');
const router = Router();

router.post('/add_grocery', add);
module.exports = router;
