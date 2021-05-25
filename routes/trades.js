const express = require('express');
const router = express.Router();
const tradesController = require('../controllers/trades.js');
const { validateAjv } = require("../lib/validator");
const { createTrade } = require("../schema/trades");



/* creates a new trade. */
router.post('/trades', validateAjv(createTrade), tradesController.createTrade);

/* GET list all trades. */
router.get('/trades', tradesController.getTrades);

/* GET trade by id. */
router.get('/trades/:id', tradesController.getTradeById);


/* GET trade by id. */
router.all('/trades/:id', function (req, res, next) {
    res.status(405).send();
});

module.exports = router;
