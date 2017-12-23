var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log("MADE IT TO GET in MODEL!")
      //Why would you use a left join?

      //When you begin building queries 
      //using OUTER JOIN, the SQL Standard 
      //considers the first table you name 
      //as the one on the "left," and the 
      //second table as the one on the "right." 
      //So, if you want all the rows from the first 
      //table and any matching rows from the second table, 
      //you'll use a LEFT OUTER JOIN...shane said LEFT JOIN should work

      var queryStr = 'SELECT * FROM messages LEFT JOIN users ON (messages.userid = user.id)' 
      //or select individual properties? order?
      db.query(queryStr, function(err, results){

        callback(results);
      });
    }
    },


    post: function (parameters, callback) {
      console.log("MADE IT TO POST IN MESSAGES MODEL!")
        //will create a new message
      var queryStr = 'INSERT INTO messages (message, username, roomname) VALUES (?, (SELECT id FROM users WHERE username = ?), ?)'

      db.query(queryStr, parameters, function(err, results){

        callback(results);
    }) 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      //will get all users
      var queryStr = 'SELECT * FROM users' //"Selects all from users table"

      db.query(queryStr, function(err, results){

        callback(results); //defines what you want to do with the list of users
      })
    },
    post: function (parameters, callback) {
      console.log("MADE IT TO POST IN USERS MODEL")
      //will create a user
      var queryStr = 'INSERT INTO users (username) VALUE (?)' //Inserts value of username into users table

      db.query(queryStr, parameters, function(err, results){

        callback(results);
    
      })
    }
  } 
}

//why is models.messages.post not a function yet models.messages.get is? They are
//literally the same thing.  