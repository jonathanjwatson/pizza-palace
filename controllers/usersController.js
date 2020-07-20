const express = require("express");
const db = require("../models");

const router = express.Router();

// GET ALL USERS
router.get("/", (req, res) => {
  db.User.findAll({
    attributes: ["id", "username", "phoneNumber"],
  }).then((users) => {
    console.log(users);
    // THIS IS BAD!
    // const usersToReturn = users.map((user) => {
    //   return {
    //     id: user.id,
    //     username: user.username,
    //     phoneNumber: user.phoneNumber,
    //   };
    // });
    res.json({
      error: false,
      data: users,
      message: "All available users.",
    });
  });
});

// GET SINGLE USER
router.get("/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((singleUser) => {
    const userToReturn = {
      id: singleUser.id,
      username: singleUser.username,
      phoneNumber: singleUser.phoneNumber,
    };
    res.json({
      error: false,
      data: userToReturn,
      message: "User with requested id",
    });
  });
});

// CREATE NEW USER
router.post("/", (req, res) => {
  if (
    !req.body.username ||
    !req.body.password ||
    req.body.username.trim().length < 1 ||
    req.body.password.trim().length < 1
  ) {
    return res.status(400).json({
      error: true,
      data: null,
      message: "Invalid user provided.",
    });
  }

  db.User.create(req.body)
    .then((result) => {
      res.json({
        error: false,
        data: result,
        message: "Successfully created new user.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "An error occurred creating new user.",
      });
    });
});

// UPDATE USER BY ID
router.put("/:id", (req, res) => {
  res.json({
    error: false,
    data: null,
    message: "Successfully updated user.",
  });
});

// DELETE USER - GET ID FROM REQ.BODY
router.delete("/", (req, res) => {
  res.json({
    error: false,
    data: null,
    message: "Successfully deleted user.",
  });
});

module.exports = router;
