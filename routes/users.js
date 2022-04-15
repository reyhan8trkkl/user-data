var express = require("express");
var UserModel = require("../models/Users");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  //  res.send("respond with a resource");
  UserModel.find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/", function (req, res) {
  const newUser = UserModel({
    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
    address: req.body.address,
    phone: req.body.phone,
    username: req.body.username,
    website: req.body.website,
  });
  /*
  router.post("/", function (req, res) {
    const newUser = UserModel(req.body); */

  newUser.save((err, data) => {
    if (err) {
      res.json(err);
    }
    res.json(data);
  });
});
/*  newUser.save().then((movie)=>{res.json(movie)}).catch((err)=>{res.json(err)}) */

module.exports = router;
