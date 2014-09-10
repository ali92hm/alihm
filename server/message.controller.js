
'use strict';

var Message = require('./message.model');

// Get list of Messages
exports.index = function(req, res) {
  // if (req.body.password !== 'something') { return res.send(404);}
  Message.find(function (err, Messages) {
    if(err) { return handleError(res, err); }
    return res.json(200, Messages);
  });
};

// Get a single Message
exports.show = function(req, res) {
  Message.findById(req.params.id, function (err, Message) {
    if(err) { return handleError(res, err); }
    if(!Message) { return res.send(404); }
    return res.json(Message);
  });
};

// Creates a new Message in the DB.
exports.create = function(req, res) {
  Message.create(req.body, function(err, Message) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(Message);
  });
};

// Deletes a Message from the DB.
exports.destroy = function(req, res) {
  Message.findById(req.params.id, function (err, Message) {
    if(err) { return handleError(res, err); }
    if(!Message) { return res.send(404); }
    Message.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.status(500).json(err);
}