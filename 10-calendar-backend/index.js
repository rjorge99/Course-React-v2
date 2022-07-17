require('dotenv').config();
require('express-async-errors');

const dbConnection = require('./database/config');

const Server = require('./models/server');

dbConnection();
const server = new Server();
server.start();
