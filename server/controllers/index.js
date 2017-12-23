var models = require('../models');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        if (err){
          return err;
        } else {
          res.json(results);
        }

      });


    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var parameters = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(parameters, function(err, results){
        if (err){
          return err;
        } else {
          res.end(201);
        }

      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.messages.get(function(err, results){
        if (err){
          return err;
        } else {
          res.json(results);
        }

      });

    },
    post: function (req, res) {
      var parameters = [req.body.username];
      models.messages.post(parameters, function(err, results){
        if (err){
          return err;
        } else {
          res.end(201);
        }

      });

    }
  }
};

