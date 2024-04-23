
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

const usersRoute = require("./users.js");
const boardsRoute = require("./boards.js");

app.use("/users", usersRoute);
app.use("/boards", boardsRoute);

app.listen(port, () => {
  console.log(`Express is running on http://${hostname}:${port}/`);
} );
