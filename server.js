const express = require("express");
const db = require("./models");
const UsersController = require("./controllers/usersController");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    message: "Success",
  });
});

// SEPARATION OF CONCERNS
// MVC Pattern
app.use("/api/users", UsersController);

// db.sequelize.sync({force:true}).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
