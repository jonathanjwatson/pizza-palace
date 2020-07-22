const express = require("express");
const db = require("../models");

const router = express.Router();

// GET ALL PIZZAS
router.get("/", (req, res) => {
  db.Pizza.findAll({})
    .then((allPizzas) => {
      res.json({
        error: false,
        data: allPizzas,
        message: "Successfully retrieved all pizzas.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all pizzas.",
      });
    });
});

router.get("/:id", (req, res) => {
  db.Pizza.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((singlePizza) => {
      res.json({
        error: false,
        data: singlePizza,
        message: `Successfully retrieved pizza with id: ${req.params.id}`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: `Unable to retrieve pizza with id: ${req.params.id}`,
      });
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
  db.Pizza.create(req.body)
    .then((createdPizza) => {
      res.json({
        error: false,
        data: createdPizza,
        message: "Successfully created new pizza.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new pizza.",
      });
    });
});

module.exports = router;
