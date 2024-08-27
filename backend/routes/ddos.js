const express = require('express');
const router = express.Router();
const DDoSController = require('../controllers/ddosController');

router.post('/analyze', DDoSController.analyzeTraffic);
router.post('/block', DDoSController.blockIP);

module.exports = router;
