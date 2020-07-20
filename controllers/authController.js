const express = require("express");
const db = require("../models");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((foundUser) => {
      console.log(foundUser);
      // TODO: Convert user signup to use bcrypt to hash passwords before going into the database.
      // bcrypt.compare() to compare user submitted password.
      if (foundUser.password === req.body.password) {
        jwt.sign(
          { username: foundUser.username },
          "supersecret",
          (err, token) => {
            console.log(token);
            res.json({
              error: false,
              data: token,
              message: "Successfully authenticated.",
            });
          }
        );
      } else {
        res.status(401).json({
          error: true,
          data: null,
          message: "Failed to authenticate user.",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
