# pizza-palace

A SQL, Express, Node, React app.

It is designed to keep track of available Pizzas, display them to the user, and allow an admin to edit available pizzas.

Today, we're going to be building the REST endpoints on the server, and the database structure.

## Initial Setup

1. Create a `server.js` file.
2. Run `npm init -y`
3. Npm install: `npm install express sequelize mysql2`

## Setup Express Boilerplate

1. Require express
2. Create an instance of express, called app.
3. Create a PORT
4. Listen on the PORT.
5. Add body-parser middleware.

## Setup the Database

1. Create a schema.sql file to drop and re-create database.
2. Run the schema code in MySQL Workbench and confirm the database was successfully created. (Sequelize will handle our tables for us.)

## Setup Sequelize

** NOTE: Make sure you have `sequelize-cli` installed globally or these commands will not work. **

1. Run the command: `sequelize init:models & sequelize init:config`
2. Update config.json with your local password.
3. Update config.json with your database name.

## Build out Sequelize Models

1. Create a new file `user.js`
2. Build out your model.
3. Go back to `server.js` and require "./models".
4. Sync our database.

```javascript
db.sequelize.sync().then(() => {});
```

** NOTE: If you need to make a change, you will have to add `{force:true}` to your db.sequelize.sync() method. **

5. Build out any remaining models.

## Build out Controllers/Routes

1. Create a get route for `/api/config` in the server.js
2. Create a `controllers` folder.
3. Create `*Controller.js` file for each model.
4. Scaffold out the basic controller using `express.Router()`

```javascript
const express = require("express");

const router = express.Router();

module.exports = router;
```

## Miscellaneous

- Add a `watch` or `dev` script to package.json that includes `nodemon server.js`
