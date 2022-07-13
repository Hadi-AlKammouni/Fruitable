require("dotenv").config();
require("./config/database").connect();

const cors = require('cors');
const http = require("http");
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
const express = require("express");
const app = express();
const server = http.createServer(app);
const userRouter = require('./src/user');
const groceryRouter = require('./src/grocery');

app.use(cors());
app.use(express.json());
app.use('/api/v1/user', userRouter);
app.use('/api/v1/grocery', groceryRouter);

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
