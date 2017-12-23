var models = require('../models');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('GET REQUEST FROM CONTROLLER')
      models.messages.get(function(err, results){
        if (err){
          console.log("get request fail from messages");
        } else {
          res.json(results);
        }

      });


    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("POST REQUEST IN CONROLLER!!!")
      // var parameters = [req.body.message, req.body.username, req.body.roomname];
      // models.messages.post(parameters, function(err, results){
      //   if (err){
      //     console.log("You messed up in messages post");
      //   } else {
      //     res.end(201);
      //   }

      // });
      res.end(200)

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      models.messages.get(function(err, results){
        if (err){
          console.log("failed in users get");
        } else {
          res.json(results);
        }

      });

    },
    post: function (req, res) {
      console.log("MADE IT TO POST REQUEST IN USERS CONTROLLER")
      var parameters = [req.body.username];
      models.messages.post(parameters, function(err, results){
        if (err){
        console.log("failed in users post");
        } else {
          res.end(201)

        }

      })

    }
  }
};

