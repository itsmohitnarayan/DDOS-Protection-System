const mongoose =  require('mongoose');

const logSchema = new mongoose.Schema({
    ipAddress: String,
    timestamp: Date,
    requestType: String,
    status: String
  });
  
  module.exports = mongoose.model('Log', logSchema);