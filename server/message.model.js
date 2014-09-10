'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  email: {type: String, require: true, trim: true},
  name: {type: String, require: false, trim: true},
  subject: {type: String, require: false, trim: true},
  message: {type: String, require: false, trim: true}
});

module.exports = mongoose.model('Message', MessageSchema);