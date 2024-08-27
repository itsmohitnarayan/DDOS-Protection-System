const Log = require('../models/log');
const { analyzeTraffic, blockIP } = require('../services/ddosService');

exports.analyzeTraffic = async (req, res) => {
  const result = await analyzeTraffic(req.body);
  res.json(result);
};

exports.blockIP = async (req, res) => {
  const result = await blockIP(req.body.ipAddress);
  res.json(result);
};
