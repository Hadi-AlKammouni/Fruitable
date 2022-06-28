require("dotenv").config();
require("./config/database").connect();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require("express");

const app = express();
app.use(express.json());

module.exports = app;