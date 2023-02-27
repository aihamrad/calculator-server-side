const express = require('express');
const historyController = require('../controllers/historyController')
const router = express.Router();

router.get('/', historyController.getHistroy);

router.post('/', historyController.postHistory);

router.delete('/', historyController.deleteHistory);

module.exports = router;