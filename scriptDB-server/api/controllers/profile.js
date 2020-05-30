var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function (req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function (err, user) {
        res.status(200).json(user);
      });
  }

};

module.exports.getUsers = function (req, res) {
  User
    .find({}, { email: 1, name: 1 })
    .exec(function (err, user) {
      res.status(200).json(user);
    });

};

module.exports.updateUser = function (req, res) {
  console.log('put req', req.body)

  User
    .update({ _id: req.body._id }, {
      name: req.body.name,
    }
    ).exec(function (err, user) {

      res.status(200).json(user);
    });
}



module.exports.deleteUser = function (req, res) {
  console.log("req", req.body._id)
  User.find({"_id":req.body._id}).remove().exec(function(err, user) {
    res.status(200).json(user);


    // data will equal the number of docs removed, not the document itself
  })
}